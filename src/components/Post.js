import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/Post.css";
function Post({ post }) {
  const currentUser = useSelector(selectUser);
  console.log(currentUser.data._id, post.user);
  const user = true;
  const handlePostDelete = async () => {
    await fetch(`http://localhost:8000/api/post/${post.user}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={post.photo} />
        <div className="post__userInfo">
          <h4 className="post__name">{post.username}</h4>
          <p className="post__time">{post.updatedAt}</p>
        </div>
      </div>
      <p>{post.description}</p>
      <img className="post__image" src={post.image} alt="" />
      <div className="post__icons">
        {currentUser.data._id === post.user ? (
          <DeleteIcon className="red" onClick={handlePostDelete} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Post;

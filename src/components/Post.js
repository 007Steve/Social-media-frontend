import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import DeleteIcon from "@material-ui/icons/Delete";
import "../styles/Post.css";
function Post({ post }) {
  // add icons need to add current user id
  //add delete
  console.log(post.user);
  const user = true;
  const handlePostDelete = async() => {
    await fetch(`http://localhost:8000/api/post/${post._id}`, {
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
        {/* <ThumbUpIcon className=""/>
          <EmojiEmotionsIcon className=""/> */}
        {post.user === post.user ? (
          <DeleteIcon className="red" onClick={handlePostDelete} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Post;

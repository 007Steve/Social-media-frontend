import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import { Avatar } from "@material-ui/core";
import "../components/Card";
import StoryCard from "./StoryCard";
import Nav from "./Nav";
import Post from "../components/Post";
import { useSelector,  } from "react-redux";
import { selectUser,  } from "../features/userSlice";
function Feed() {
  const [texts, setexts] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [posts, setPost] = useState([]);
//added
  const currentUser = useSelector(selectUser);
  const toggleChecked = () => setShow((value) => !value);

  const handleGetData = async () => {
    await fetch("http://localhost:8000/api/post")
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
    username: currentUser.data.name,
      photo: currentUser.data.photo,
      description: texts,
      user: currentUser.data._id,
      image: image,
    };

    await fetch("http://localhost:8000/api/post", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setImage("");
    setexts("");
  };



  useEffect(() => {
    handleGetData();
  }, [texts]);
  // need to formate date get redux to get state,add delete update to post
  //  post
  return (
    <div className="feed">
      <Nav />
      <div className="feed__container">
        <form
          className="feed__form"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1619654400&v=beta&t=beUY3v1xVyOsDxiE8qPu_4zZPrlzJCYsGKOsxHJ_VX4" />
          <label htmlFor="texts"></label>
          <input
            type="text"
            name="texts"
            placeholder="What's up?"
            value={texts}
            onChange={(e) => setexts(e.target.value)}
          />
          <label htmlFor="image"></label>
          {show ? (
            <input
              type="text"
              id="feed__imageInput"
              name="image"
              placeholder="Add an image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          ) : (
            <></>
          )}
        </form>
        <div className="feed__container two">
          <div className="feed__imageContainer">
            <p className="feed__imageContainer"></p>
            <button className="feed__imageButton hover" onClick={toggleChecked}>
              Image
            </button>
          </div>

          <button
            className="feed__postButton hover"
            type="submit"
            onClick={(e) => {
              handleFormSubmit(e);
            }}
          >
            Post
          </button>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import { Avatar } from "@material-ui/core";
import "../components/Card";
import StoryCard from "./StoryCard";
import Nav from "./Nav";
import Post from "../components/Post";

function Feed() {
  const [texts, setexts] = useState("");
  const [posts, setPost] = useState([]);
  const handleGetData = async () => {
    await fetch("http://localhost:8000/api/post")
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  useEffect(() => {
    handleGetData();
  }, []);
  // need to formate date get redux to get state,add delete update to post
  //  post

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: "Stephen",
      photo:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1619654400&v=beta&t=beUY3v1xVyOsDxiE8qPu_4zZPrlzJCYsGKOsxHJ_VX4",
      description: texts,
      user: "6031b805d553b6b13ae92567",
      image:
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1124,w_2000,x_0,y_46/f_auto,q_auto,w_1100/v1554932218/shape/mentalfloss/532661-istock-825167430.jpg",
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
  };

  console.log(texts);
  return (
    <div className="feed">
      <Nav />
      {/* <div className="feed__stories">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div> */}
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
        </form>
        <div className="feed__container two">
          <div className="feed__imageContainer">
            <p className="feed__imageContainer">Add image</p>
            <button className="feed__imageButton hover">Image</button>
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
        {posts.reverse().map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

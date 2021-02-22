import React from "react";
import "../styles/Feed.css";
import { Avatar } from "@material-ui/core";
import "../components/Card";
import StoryCard from "./StoryCard";
import Nav from "./Nav";
function Feed() {
  return (
    <div className="feed">
        <Nav/>
      <div className="feed__stories">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
      <div className="feed__container">
        <form className="feed__form">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1619654400&v=beta&t=beUY3v1xVyOsDxiE8qPu_4zZPrlzJCYsGKOsxHJ_VX4" />
          <label htmlFor="texts"></label>
          <input type="text" name="texts" placeholder="What's up?" />
        </form>
        <div className="feed__container two">
          <div className="feed__imageContainer">
            <p className="feed__imageContainer">Add image</p>
            <button className="feed__imageButton hover">Image</button>
          </div>

          <button className="feed__postButton hover">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;

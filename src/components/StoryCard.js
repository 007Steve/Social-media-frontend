import React from "react";
import "../styles/StoryCard.css";
function StoryCard() {
  return (
    <div  className="storyCard">
      <video
        autoPlay
        muted
        className="storyCard__video"
        src="/production ID_4515315.mp4"
      ></video>
    </div>
  );
}

export default StoryCard;

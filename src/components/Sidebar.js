import React from "react";
import "../styles/Sidebar.css";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CreateIcon from "@material-ui/icons/Create";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logoContainer">
        <img
          className="sidebar__logo"
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt=""
        />
        
      </div>
      <div className="sidebar__container">
        <div className="sidebar__linkContainer">
          <HomeOutlinedIcon />
          <p className="sidebar__title">Home</p>
        </div>
        <div className="sidebar__linkContainer">
          <PersonOutlineIcon />
          <p className="sidebar__title">Friends</p>
        </div>
        <div className="sidebar__linkContainer">
          <ChatBubbleOutlineIcon />
          <p className="sidebar__title">Messages</p>
        </div>
        <div className="sidebar__linkContainer">
          <CreateIcon />
          <p className="sidebar__title">Post</p>
        </div>
        <div className="sidebar__linkContainer">
          <ExitToAppOutlinedIcon  />
          <p className="sidebar__title">Logout</p>
        </div>
      </div>
     
    </div>
  );
}

export default Sidebar;

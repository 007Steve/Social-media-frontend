import React from "react";
import "../styles/Sidebar.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CreateIcon from "@material-ui/icons/Create";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link, useHistory } from "react-router-dom";
function Sidebar() {
  let history = useHistory();
  const handlelogout = () => {
    fetch("http://localhost:8000/api/users/logout")
      .then((res) => res.json())
      .then((data) => console.log(data));
    history.push("/login");
  };
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
        <div className="sidebar__linkContainer" onClick={handlelogout}>
          <ExitToAppOutlinedIcon />
          <p className="sidebar__title">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

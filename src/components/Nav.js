import React,{useState}from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StoreIcon from "@material-ui/icons/Store";
import styles from "../styles/Nav.css";
import { Avatar } from "@material-ui/core";
function Nav() {
const [dark,setDark]= useState(false)
return (
    <nav className="nav dark">
        <h2>Social App</h2>
      {/* <img className={styles.image} src="" alt="" /> */}
      <div className="icons__container">
        <HomeIcon className="blue "/>
        <PeopleIcon className="purple" />
        <SupervisedUserCircleIcon className="orange" />
        <StoreIcon className="pink" />
      </div>
      <div className="nav__right">
        <button className="nav__button" >Dark Mode</button>
        <Avatar/>
      </div>
    </nav>
  );
}

export default Nav;

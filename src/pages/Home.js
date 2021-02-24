import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import "../styles/Home.css";
function Home() {
  //fetch
  useEffect(() => {
    fetch("http://localhost:8000/api/users/loggedIn", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  return (
    <div className="login">
      <h2 className="login-title">Sign Up</h2>
      <form className="login-form">
        <label>Username</label>
        <input
          className="login-input name"
          type="name"
          required
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>E-Mail</label>
        <input
          className="login-input email"
          type="text"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="login-input email"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Profile Picture</label>
        <input
          className="login-input name"
          type="text"
          required
          placeholder="Profile Picture (optional url)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
      </form>
      <button
        className="login-btn"
        // disabled={!name}
        type="submit"
        // onClick={setUserHandler}
      >
        Demo
      </button>
      <br />
      <p className="google">
      <Link to="/login"> Already have an account?</Link></p>
    </div>
  );
}

export default Login;

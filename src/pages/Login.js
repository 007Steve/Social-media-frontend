import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h2 className="login-title">Login </h2>
      <form className="login-form">
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
        <Link to="/signup"> Don't have an account?</Link>
      </p>
    </div>
  );
}

export default Login;

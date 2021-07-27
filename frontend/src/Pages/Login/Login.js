import React from "react";
import "./Login.css";
import image from "./login.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="login-top"></div>
      <div className="login-bottom"></div>
      <h3 className="login-title">Login</h3>
      <form className="login-form" action="">
        <div className="label-input">Email</div>
        <label htmlFor="email">
          <input className="login-input" type="email" id="email" />
        </label>
        <div className="label-input">Password</div>
        <label htmlFor="password">
          <input className="login-input" type="password" id="password" />
        </label>
        <button className="login-button" type="submit">
          Submit
        </button>
      </form>
      <Link to="/SignUp">Don't have an account? Create one </Link>
      <img className="login-image" src={image} alt="" />
    </div>
  );
}

export default Login;

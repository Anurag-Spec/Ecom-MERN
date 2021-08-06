import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <div className="login-top"></div>
      <div className="login-bottom"></div>
      <h3 className="login-title">Sign-Up</h3>
      <form className="login-form" action="">
        <div className="label-input">Enter Name</div>
        <label htmlFor="Name">
          <input className="login-input" type="Name" id="Name" />
        </label>
        <div className="label-input">Enter Email</div>
        <label htmlFor="email">
          <input className="login-input" type="email" id="email" />
        </label>
        <div className="label-input">Enter Password</div>
        <label htmlFor="password">
          <input className="login-input" type="password" id="password" />
        </label>
        <button className="login-button" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;

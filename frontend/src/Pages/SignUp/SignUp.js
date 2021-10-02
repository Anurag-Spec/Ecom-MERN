import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Register } from "../../actions/Register";

import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  return (
    <div>
      <div className="login-top"></div>
      <div className="login-bottom"></div>
      <h3 className="login-title">Sign-Up</h3>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="label-input">Enter Name</div>
        <label htmlFor="Name">
          <input
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            type="Name"
            id="Name"
          />
        </label>
        <div className="label-input">Enter Email</div>
        <label htmlFor="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            type="email"
            id="email"
          />
        </label>
        <div className="label-input">Enter Password</div>
        <label htmlFor="password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            type="password"
            id="password"
          />
        </label>
        <button className="login-button" type="submit">
          Create Account
        </button>
      </form>
      <Link to="/Login">Have an account? Login </Link>
    </div>
  );
}

export default SignUp;

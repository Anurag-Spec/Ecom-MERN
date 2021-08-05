import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import image from "./login.svg";
import { Link, useHistory } from "react-router-dom";
import { Signin } from "../../actions/userActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Signin(email, password));
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
      <h3 className="login-title">Login</h3>
      <form className="login-form" onSubmit={submitHandler}>
        <div className="label-input">Email</div>
        <label htmlFor="email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            type="email"
            id="email"
            required
          />
        </label>
        <div className="label-input">Password</div>
        <label htmlFor="password">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            type="password"
            id="password"
          />
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

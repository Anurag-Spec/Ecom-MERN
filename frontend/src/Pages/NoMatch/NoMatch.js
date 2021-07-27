import React from "react";
import { useLocation } from "react-router-dom";
import image from "./404.svg";
import { Link } from "react-router-dom";
import "./NoMatch.css";

function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <div className="error-message">
        Couldn't Locate the Page <code>{location.pathname}</code>
      </div>
      <button className="home-link-cont">
        <Link className="home-link" to="/">
          Go back Home
        </Link>
      </button>
      <img className="error" src={image} alt="error" />
    </div>
  );
}

export default NoMatch;

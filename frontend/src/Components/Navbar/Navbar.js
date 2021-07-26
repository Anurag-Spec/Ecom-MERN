import React from "react";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-title">Dforce Esports </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

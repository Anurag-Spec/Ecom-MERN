import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
            <Link className="link" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="link" to="/login">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="link" to="/wishlist">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="nav-title">Dforce Gaming Esports </div>
        <ul className="nav-list">
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </li>
          <li className="nav-list-item">
            <FontAwesomeIcon icon={faHeart} size="2x" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faShoppingCart,
  faUser,
  faHeart,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/userActions";

function Navbar() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <nav className="navbar">
        <Link className="link" to="/">
          <div className="nav-title">Dforce Esports </div>
        </Link>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="link" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </li>
          <li className="nav-list-item">
            {userInfo ? (
              <div className="dropdown">
                <Link className="link" to="#">
                  {userInfo.user.name}
                  <FontAwesomeIcon icon={faCaretDown} size="lg" />
                </Link>
                <ul className="dropdown-content">
                  <Link className="link" to="#signout" onClick={signoutHandler}>
                    SignOut
                  </Link>
                </ul>
              </div>
            ) : (
              <Link className="link" to="/login">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
            )}
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

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-icons"></div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wislist</Link>
      </div>
    </footer>
  );
}

export default Footer;

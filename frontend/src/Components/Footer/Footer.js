import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  library.add(fab);
  return (
    <footer className="footer">
      <div className="footer-icons-container">
        <FontAwesomeIcon
          className="footer-icons"
          icon={["fab", "facebook"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="footer-icons"
          icon={["fab", "twitter"]}
          size="2x"
        />
        <FontAwesomeIcon
          className="footer-icons"
          icon={["fab", "instagram"]}
          size="2x"
        />
      </div>
      <div className="footer-links-container">
        <h3 className="footer-subtitle">Sitemap</h3>
        <Link className="footer-links" to="/">
          Home
        </Link>
        <Link className="footer-links" to="/cart">
          Cart
        </Link>
        <Link className="footer-links" to="/products">
          Products
        </Link>
        <Link className="footer-links" to="/wishlist">
          Wislist
        </Link>
      </div>
      <div className="footer-title">DForce Gaming</div>
    </footer>
  );
}

export default Footer;

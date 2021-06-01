import React from "react";
import { Link } from "react-router-dom";
import FooterSocialMedia from "../footerSocialMedia";

import "./style.scss";

function FooterFirst() {
  return (
    <React.Fragment>
      <div className="black-line"></div>
      <div className="container-footer">
        <div className="footer-two">
          <div className="logo-item">
            <h2>Clay Shop</h2>
            <p>
              Fashion is a popular aesthetic expression at a particular time,
              place and in a specific context, expectially in clothing,
              footwear, lifestyle, accessories, makeup.
            </p>
          </div>
          <div className="hot-links">
            <h2>Hot links</h2>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="more-info">
            <h2>More info</h2>
            <ul>
              <Link to="">
                <li>How it works</li>
              </Link>
              <Link to="">
                <li>About us</li>
              </Link>
              <Link to="">
                <li>Decline rules</li>
              </Link>
              <Link to="">
                <li>Terms & Conditions</li>
              </Link>
            </ul>
          </div>
          <div className="description">
            <h2>Customer care</h2>
            <ul>
              <Link to="">
                <li>FQA</li>
              </Link>
              <Link to="">
                <li>Terms of use</li>
              </Link>
              <Link to="">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>
        <FooterSocialMedia />
      </div>
    </React.Fragment>
  );
}

export default FooterFirst;

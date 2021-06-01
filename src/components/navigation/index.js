import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Navigation = () => (
  <nav className="container">
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
  </nav>
);

export default Navigation;

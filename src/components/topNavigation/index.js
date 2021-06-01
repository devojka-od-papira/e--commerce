import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

function GlayShop() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="container">
      <div className="logo">Clay Shop</div>
      <div className="social-media">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </div>
      <div className="search">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        {location.pathname === "/shop" ? (
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        ) : null}
        <FontAwesomeIcon className="icon" icon={faShoppingBag} />
      </div>
    </div>
  );
}

export default GlayShop;

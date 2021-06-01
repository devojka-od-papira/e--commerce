import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

function FooterSocialMedia() {
  return (
    <div className="footer-social-media">
      <div className="copy">
        <p>&copy; Clay Shop all rights reserved</p>
      </div>
      <div className="icon-footer">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </div>
    </div>
  );
}

export default FooterSocialMedia;

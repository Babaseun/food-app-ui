import React from "react";
import Brand from "../../assets/image 12.png";
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/face.png";
import Instagram from "../../assets/insta.png";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-contents">
          <img className="footer-logo content" src={Brand} alt="logo" />
          <div className="content">
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
          </div>
          <p className="content">Copyright 2022 Bella Onojie.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

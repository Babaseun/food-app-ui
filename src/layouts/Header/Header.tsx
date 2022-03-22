import React from "react";
import "./Header.scss";
import Brand from "../../assets/Bella Olonje logo 111 1.png";

function Header() {
  return (
    <div className="header">
      <div className="header__image">
        <img src={Brand} alt="Bella Olonje" />
      </div>
      <div className="header__links">
        <a href="/">Home</a>
        <a href="/">Product</a>
        <a href="/">Faq</a>
        <a href="/">Contact</a>
      </div>
      <div className="hamburger-menu">
        <i className="fa-solid fa-bars" />
      </div>
    </div>
  );
}

export default Header;

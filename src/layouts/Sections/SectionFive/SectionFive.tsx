import React from "react";
import Phone from "../../../assets/ipx.png";
import "../Section.scss";

function SectionFive() {
  return (
    <div className="section">
      <div className="container">
        <div className="section__columns">
          <div className="section__column img-column">
            <img src={Phone} alt="phone" />
          </div>
          <div className="section__column text-column">
            <h3>Checkout</h3>
            <h2>When you done check out and get it delivered.</h2>
            <h4>When you done check out and get it delivered with ease.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;

import React from "react";
import Phone from "../../../assets/Iphone4.png";
import "../Section.scss";

function SectionFour() {
  return (
    <div className="section">
      <div className="container">
        <div className="section__columns">
          <div className="section__column text-column">
            <h3>Explore varieties</h3>
            <h2>Shop for your favorites meal as e dey hot.</h2>
            <h4>
              Shop for your favorite meals or drinks and enjoy while doing it.
            </h4>
          </div>
          <div className="section__column img-column">
            <img src={Phone} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;

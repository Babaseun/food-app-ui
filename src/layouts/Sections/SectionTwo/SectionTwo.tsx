import React from "react";
import IphoneOne from "../../../assets/iphone1-removebg-preview.png";
import IphoneTwo from "../../../assets/iphone2-removebg-preview.png";
import "./SectionTwo.scss";

function SectionTwo() {
  return (
    <div className="sectionTwo__container">
      <div className="section__two__images">
        <div className="section__two__image__one">
          <img src={IphoneOne} alt="Iphone1" />
        </div>
        <div className="section__two__image__two">
          <img src={IphoneTwo} alt="Iphone2" />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;

import React from "react";
import TomatoButton from "../../../components/Buttons/TomatoButton/TomatoButton";
import TransparentButton from "../../../components/Buttons/TransparentButton/TransparentButton";
import "./SectionOne.scss";

function SectionOne() {
  return (
    <div className="sectionOne">
      <div className="sectionOne__container">
        <p className="sectionOne__intro">Food app</p>
        <h1 className="sectionOne__title">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <h4 className="sectionOne__download">
          Download the bella onoje’s food app now on
        </h4>
        <div className="sectionOne__buttons">
          <TomatoButton text="Playstore" button="oval" />
          <TransparentButton text="Appstore" button="oval" />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;

import React from "react";
import TomatoButton from "../../../components/Buttons/TomatoButton/TomatoButton";
import TransparentButton from "../../../components/Buttons/TransparentButton/TransparentButton";
import "./SectionSix.scss";

function SectionSix() {
  return (
    <div className="sectionSix">
      <div className="container">
        <div className="sectionSix__contents">
          <h2>Download the app now</h2>
          <h4>
            Available on your favorite store. Start your premium experience now
          </h4>
          <div className="sectionSix__buttons">
            <TomatoButton text="Playstore" button="square" />
            <TransparentButton text="App store" button="square" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;

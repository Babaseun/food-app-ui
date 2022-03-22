import React from "react";
import Phone from "../../../assets/phone3.png";
import "../Section.scss";

function SectionThree() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section__title">How the app works</h1>
        <div className="section__columns">
          <div className="section__column img-column">
            <img src={Phone} alt="phone" />
          </div>
          <div className="section__column text-column">
            <h3>Create an account</h3>
            <h2>Create/login to an existing account to get started</h2>
            <h4>
              An account is created with your email and a desired password
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionThree;

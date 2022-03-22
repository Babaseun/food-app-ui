import React from "react";

interface SplitScreenProps {
  sectionOne: React.ElementType;
  sectionTwo: React.ElementType;
  sectionThree: React.ElementType;
  sectionFour: React.ElementType;
  sectionFive: React.ElementType;
  sectionSix: React.ElementType;
}
function SplitScreen(props: SplitScreenProps) {
  const {
    sectionOne: SectionOne,
    sectionTwo: SectionTwo,
    sectionThree: SectionThree,
    sectionFour: SectionFour,
    sectionFive: SectionFive,
    sectionSix: SectionSix,
  } = props;

  return (
    <div className="splitScreen">
      <div className="splitScreen__section__one">
        <SectionOne />
      </div>
      <div className="splitScreen__section__two">
        <SectionTwo />
      </div>
      <div className="splitScreenSection__three">
        <SectionThree />
      </div>
      <div className="splitScreenSection__four">
        <SectionFour />
      </div>
      <div className="splitScreenSection__five">
        <SectionFive />
      </div>
      <div className="splitScreenSection__six">
        <SectionSix />
      </div>
    </div>
  );
}

export default SplitScreen;

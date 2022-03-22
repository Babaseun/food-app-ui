import React from "react";
import "./App.scss";
import Footer from "./layouts/Footer/Footer";

import Header from "./layouts/Header/Header";
import SectionFive from "./layouts/Sections/SectionFive/SectionFive";
import SectionFour from "./layouts/Sections/SectionFour/SectionFour";
import SectionOne from "./layouts/Sections/SectionOne/SectionOne";
import SectionSix from "./layouts/Sections/SectionSix/SectionSix";
import SectionThree from "./layouts/Sections/SectionThree/SectionThree";
import SectionTwo from "./layouts/Sections/SectionTwo/SectionTwo";
import SplitScreen from "./SplitScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <SplitScreen
        sectionOne={SectionOne}
        sectionTwo={SectionTwo}
        sectionThree={SectionThree}
        sectionFour={SectionFour}
        sectionFive={SectionFive}
        sectionSix={SectionSix}
      />
      <Footer />
    </div>
  );
}

export default App;

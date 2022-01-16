import React from "react";
import Presentation from "../Presentation";
import IntroImage from "../../atoms/IntroImage";
import "./style.css";

const Intro = (props = {}) => {
  return (
    <section className="intro">
      <div className="intro__container">
        <Presentation />
      </div>
      <div className="intro__container">
        <IntroImage />
      </div>
    </section>
  );
};

export default Intro;

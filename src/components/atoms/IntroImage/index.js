import React from "react";
import Group from "../../../assets/Group.svg";
import ImageMockups from "../../../assets/image-mockups.png";
import "./style.css";

const IntroImage = (props = {}) => {
  return (
    <div className="intro-image">
      <img className="intro-image__mockups" src={ImageMockups} alt="mockups" />
      <img className="intro-image__group" src={Group} alt="" />
    </div>
  );
};

export default IntroImage;

import React from "react";
import Presentation from "../../molecules/Presentation";
import "./style.css";

const Welcome = (props = {}) => {
  return (
    <section className="welcome">
      <Presentation />
    </section>
  );
};

export default Welcome;

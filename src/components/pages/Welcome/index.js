import React from "react";
import Footer from "../../molecules/Footer";
import Presentation from "../../organisms/Presentation";
import "./style.css";

const Welcome = (props = {}) => {
  return (
    <section className="welcome">
      <Presentation className="welcome__presentation" />
      <Footer></Footer>
    </section>
  );
};

export default Welcome;

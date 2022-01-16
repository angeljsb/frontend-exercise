import React from "react";
import Header from "../../organisms/Header";
import "./style.css";

const Welcome = (props = {}) => {
  return (
    <section className="welcome">
      <Header></Header>
    </section>
  );
};

export default Welcome;

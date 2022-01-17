import React, { useEffect } from "react";
import Header from "../../organisms/Header";
import Intro from "../../organisms/Intro";
import WhyChoose from "../../organisms/WhyChoose";
import LastestArticles from "../../organisms/LastestArticles";
import Footer from "../../organisms/Footer";
import "./style.css";

const Welcome = (props = {}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="welcome">
      <Header></Header>
      <Intro></Intro>
      <WhyChoose></WhyChoose>
      <LastestArticles></LastestArticles>
      <Footer></Footer>
    </section>
  );
};

export default Welcome;

import React, { useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import LastestArticles from "../../organisms/LastestArticles";
import AddArticle from "../../organisms/AddArticle";
import "./style.css";

const Articles = (props = {}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="articles">
      <Header />
      <AddArticle />
      <LastestArticles />
      <Footer />
    </div>
  );
};

export default Articles;

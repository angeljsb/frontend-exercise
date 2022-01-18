import React, { useContext } from "react";
import Subtitle from "../../atoms/Subtitle";
import Button from "../../atoms/Button";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import "./style.css";
import Article from "../Article";
import { Link, useLocation } from "react-router-dom";
import ArticlesContext from "../../../context/ArticlesContext";

const LastestArticles = (props = {}) => {
  const { articles } = useContext(ArticlesContext);
  const location = useLocation();

  const isArticles = location.pathname.includes("articles");

  const data = articles?.reverse().slice(0, 4);

  return (
    <section className="lastest-articles">
      <div className="lastest-articles__container">
        <div className="lastest-articles__header">
          <Subtitle>Latest Articles</Subtitle>
          {isArticles ? (
            <span></span>
          ) : (
            <Link to="/articles">
              <Button>+ Add New Article</Button>
            </Link>
          )}
        </div>
        <div className="lastest-articles__grid">
          <Grid columns={4}>
            {!data
              ? ""
              : data.map((article, index) => (
                  <GridItem key={index}>
                    <Article article={article}></Article>
                  </GridItem>
                ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default LastestArticles;

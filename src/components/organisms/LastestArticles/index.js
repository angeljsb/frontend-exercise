import React, { useEffect, useState } from "react";
import Subtitle from "../../atoms/Subtitle";
import Button from "../../atoms/Button";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import Api from "../../../api";
import "./style.css";
import Article from "../Article";

const LastestArticles = (props = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Api.get().then(async (res) => {
      if (!res.ok) {
        return;
      }
      const json = await res.json();
      setData(json.data.reverse().slice(0, 4));
    });
  });

  return (
    <section className="lastest-articles">
      <div className="lastest-articles__container">
        <div className="lastest-articles__header">
          <Subtitle>Latest Articles</Subtitle>
          <Button>+ Add New Article</Button>
        </div>
        <div className="lastest-articles__grid">
          <Grid columns={4}>
            {data === null
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

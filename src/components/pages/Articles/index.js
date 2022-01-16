import React, { useEffect, useState } from "react";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import Card from "../../organisms/Card";
import Api from "../../../api";
import "./style.css";
import Footer from "../../molecules/Footer";

const Articles = (props = {}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Api.get().then((res) => {
      console.log(res)
      setData(res.data);
    });
  }, []);

  return (
    <section className="articles">
      <Container className="articles__title-container">
        <Title size="large">Articulos</Title>
      </Container>
      <Container className="articles__grid-container">
        {data === null ? (
          ""
        ) : data.length === 0 ? (
          "No se encontraron resultados"
        ) : (
          <Grid className="articles__grid" columns="4">
            {data.map((article, index) => (
              <GridItem key={index}>
                <Card article={article}></Card>
              </GridItem>
            ))}
          </Grid>
        )}
      </Container>
      <Footer/>
    </section>
  );
};

export default Articles;

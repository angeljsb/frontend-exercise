import React from "react";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Grid from "../../atoms/Grid";

const Articles = (props = {}) => {
  return (
    <section className="articles">
      <Container className="articles__title-container">
        <Title size="large">Articulos</Title>
      </Container>
      <Container className="articles__grid-container">
        <Grid columns="4"></Grid>
      </Container>
    </section>
  );
};

export default Articles;

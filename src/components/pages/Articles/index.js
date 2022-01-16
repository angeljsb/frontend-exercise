import React, { useEffect, useState } from "react";
import Container from "../../atoms/Container";
import Title from "../../atoms/Title";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import Card from "../../organisms/Card";
import Api from "../../../api";
import Footer from "../../molecules/Footer";
import ArticlesForm from "../../organisms/ArticlesForm";
import IconButton from "../../molecules/IconButton";
import { FiPlus } from "react-icons/fi";
import "./style.css";

const Articles = (props = {}) => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Api.get().then((res) => {
      setData(res.data);
    });
  }, []);

  const closeModal = () => setOpen(false);

  const openModal = () => setOpen(true);

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
      <ArticlesForm open={open} onClose={closeModal} />
      <IconButton
        className="articles__create-button"
        onClick={openModal}
        icon={<FiPlus size="1rem" />}
      ></IconButton>
      <Footer />
    </section>
  );
};

export default Articles;

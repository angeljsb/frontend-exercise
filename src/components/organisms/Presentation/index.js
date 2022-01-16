import React from "react";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import { Link } from "react-router-dom";
import "./style.css";

const Presentation = (props = {}) => {
  const { className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <div className={`presentation ${parentClass}`} {...otherProps}>
      <Container className="presentation__container">
        <Title className="presentation__title" size="presentation">
          Bienvenido
        </Title>
      </Container>
      <Container className="presentation__container">
        <Link to="/articles">
          <Button className="presentation__button" color="primary">
            Ver Articulos
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Presentation;

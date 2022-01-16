import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import CardTitle from "../../atoms/CardTitle";
import "./style.css";

const Card = (props = {}) => {
  const { article, ...otherProps } = props;

  return (
    <Container className="card" {...otherProps} rounded>
      <Container className="card__header">
        <img
          className="card__image"
          src={article.image_url}
          alt={article.title}
        />
      </Container>
      <Container className="card__body">
        <Container className="card__author-container">
          <Text className="card__author" size="small" color="black">
            By: {article.author}
          </Text>
        </Container>
        <Container className="card__container card__title-container">
          <CardTitle className="card__title" size="small">
            {article.title}
          </CardTitle>
        </Container>
        <Container className="card__container card__content-container">
          <Text className="card__content" color="black">
            {article.content}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;

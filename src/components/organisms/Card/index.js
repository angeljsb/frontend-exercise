import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import Subtitle from "../../atoms/Subtitle";
import RoundImage from "../../molecules/RoundImage";
import "./style.css";

const Card = (props = {}) => {
  const { article, ...otherProps } = props;

  return (
    <Container className="card" {...otherProps} rounded>
      <Container className="card__body">
        <Container className="card__container card__image-container">
          <RoundImage
            className="card__image"
            src={article.image_url}
            alt={article.title}
          />
        </Container>
        <Container className="card__container card__title-container">
          <Subtitle className="card__title" color="black">{article.title}</Subtitle>
        </Container>
        <Container className="card__container card__content-container">
          <Text className="card__content" size="small" color="black">{article.content}</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;

import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import Subtitle from "../../atoms/Subtitle";
import RoundImage from "../../molecules/RoundImage";
import "./style.css";

const Card = (props = {}) => {
  const { article, ...otherProps } = props;

  const dateObject = new Date(article.date);

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
          <Subtitle className="card__title" color="black">
            {article.title}
          </Subtitle>
        </Container>
        <Container className="card__container card__content-container">
          <Text className="card__content" color="black">
            {article.content}
          </Text>
        </Container>
        <Container className="card__container card__author-date-container">
          <Container className="card__author-container">
            <Text className="card__author" size="small" color="black">
              Written by: {article.author}
            </Text>
          </Container>
          <Container className="card__date-container">
            <Text className="card__date" size="small" color="gray">
              {dateObject.toLocaleDateString()}
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;

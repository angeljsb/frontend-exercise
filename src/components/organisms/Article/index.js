import React from "react";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import CardTitle from "../../atoms/CardTitle";
import "./style.css";

const Article = (props = {}) => {
  const { article, ...otherProps } = props;

  return (
    <Container className="article" {...otherProps} rounded>
      <Container className="article__header">
        <img
          className="article__image"
          src={article.image_url}
          alt={article.title}
        />
      </Container>
      <Container className="article__body">
        <Container className="article__author-container">
          <Text className="article__author" size="small" color="black">
            By {article.author}
          </Text>
        </Container>
        <Container className="article__container article__title-container">
          <CardTitle className="article__title" size="small">
            {article.title}
          </CardTitle>
        </Container>
        <Container className="article__container article__content-container">
          <Text className="article__content" color="black">
            {article.content}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Article;

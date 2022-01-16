import React from "react";
import Container from "../../atoms/Container";
import "./style.css";

const RoundImage = (props = {}) => {
  const { src, alt, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <Container className={`round-image ${parentClass}`} {...otherProps} rounded>
      <img
        src={src}
        alt={alt}
        className={`round-image__image`}
      ></img>
    </Container>
  );
};

export default RoundImage;

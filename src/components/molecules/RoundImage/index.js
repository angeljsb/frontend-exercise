import React from "react";
import Container from "../../atoms/Container";

const RoundImage = (props = {}) => {
  const { src, alt, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <Container className="round-image" {...otherProps} rounded>
      <img
        src={src}
        alt={alt}
        className={`round-image__image ${parentClass}`}
      ></img>
    </Container>
  );
};

export default RoundImage;

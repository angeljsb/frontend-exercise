import React from "react";
import "./style.css";

const Title = (props = {}) => {
  const { children, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <h1 className={`title ${parentClass}`} {...otherProps}>
      {children}
    </h1>
  );
};

export default Title;

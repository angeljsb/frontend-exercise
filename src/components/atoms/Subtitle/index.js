import React from "react";
import "./style.css";

const Subtitle = (props = {}) => {
  const { children, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <h1 className={`subtitle ${parentClass}`} {...otherProps}>
      {children}
    </h1>
  );
};

export default Subtitle;

import React from "react";
import "./style.css";

const Subtitle = (props = {}) => {
  const { children, color, size, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <h2 className={`subtitle ${parentClass}`} {...otherProps}>
      {children}
    </h2>
  );
};

export default Subtitle;

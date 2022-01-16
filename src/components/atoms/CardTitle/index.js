import React from "react";
import "./style.css";

const CardTitle = (props = {}) => {
  const { children, className, size, ...otherProps } = props;

  const realSize = size || "medium";
  const parentClass = className || "";

  return (
    <h3
      className={`card-title card-title--${realSize} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </h3>
  );
};

export default CardTitle;

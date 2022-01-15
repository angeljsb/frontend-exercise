import React from "react";
import "./style.css";

const Title = (props = {}) => {
  const { size, children, className, ...otherProps } = props;

  const realSize = ["small", "medium", "large", "presentation"].includes(size)
    ? size
    : "medium";

  const parentClass = className || "";

  return (
    <h1 className={`title title--${realSize} ${parentClass}`} {...otherProps}>
      {children}
    </h1>
  );
};

export default Title;

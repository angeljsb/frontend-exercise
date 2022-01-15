import React from "react";
import "./style.css";

const Text = (props = {}) => {
  const { size, children, className, ...otherProps } = props;

  const realSize = ["small", "medium", "large"].includes(size)
    ? size
    : "medium";

  const parentClass = className || "";

  return (
    <p className={`text text--${realSize} ${parentClass}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;

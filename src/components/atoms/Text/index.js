import React from "react";
import "./style.css";

const Text = (props = {}) => {
  const { size, color, children, className, ...otherProps } = props;

  const realSize = ["small", "medium", "large"].includes(size)
    ? size
    : "medium";
  const parentClass = className || "";
  const colorClass = color ? `text--${color}` : "text--white"

  return (
    <p className={`text text--${realSize} ${colorClass} ${parentClass}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;

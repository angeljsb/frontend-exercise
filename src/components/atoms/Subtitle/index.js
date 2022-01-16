import React from "react";
import "./style.css";

const Subtitle = (props = {}) => {
  const { children, color, size, className, ...otherProps } = props;

  const parentClass = className || "";
  const colorClass = color ? `subtitle--${color}` : "subtitle--white";
  const realSize = ["small", "medium", "large"].includes(size)
    ? size
    : "medium";

  return (
    <h2
      className={`subtitle subtitle--${realSize} ${colorClass} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </h2>
  );
};

export default Subtitle;

import React from "react";
import "./style.css";

const Subtitle = (props = {}) => {
  const { children, color, className, ...otherProps } = props;

  const parentClass = className || "";
  const colorClass = color ? `subtitle--${color}` : "subtitle--white"

  return (
    <h1 className={`subtitle ${colorClass} ${parentClass}`} {...otherProps}>
      {children}
    </h1>
  );
};

export default Subtitle;

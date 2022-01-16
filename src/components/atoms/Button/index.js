import React from "react";
import "./style.css";

const Button = (props = {}) => {
  const { children, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <button className={`button ${parentClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

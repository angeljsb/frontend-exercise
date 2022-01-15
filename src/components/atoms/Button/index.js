import React from "react";
import "./style.css";

const Button = (props = {}) => {
  const { color, children, className, ...otherProps } = props;

  const realColor = ["primary", "secondary"].includes(color)
    ? color
    : "primary";

  const parentClass = className || "";

  return (
    <button
      className={`button button--${realColor} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

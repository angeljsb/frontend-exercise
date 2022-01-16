import React from "react";
import "./style.css";

const Button = (props = {}) => {
  const { color, size, children, className, ...otherProps } = props;

  const realColor = ["primary", "secondary"].includes(color)
    ? color
    : "primary";
  const realSize = size || "large";

  const parentClass = className || "";

  return (
    <button
      className={`button button--${realSize} button--${realColor} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

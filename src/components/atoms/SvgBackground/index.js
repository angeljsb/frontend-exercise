import React from "react";
import "./style.css";

const SvgBackground = (props = {}) => {
  const { children, ...otherProps } = props;

  return (
    <div className="svg-background" {...otherProps}>
      {children}
    </div>
  );
};

export default SvgBackground;

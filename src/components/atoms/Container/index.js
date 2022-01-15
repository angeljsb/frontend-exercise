import React from "react";
import "./style.css";

const Container = (props = {}) => {
  const { rounded, children, className, ...otherProps } = props;

  const roundedClass = rounded ? "container--rounded" : "";
  const parentClass = className || "";

  return (
    <div className={`container ${roundedClass} ${parentClass}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;

import React from "react";
import "./style.css";

const GridItem = (props = {}) => {
  const { colSpan, children, className, ...otherProps } = props;

  const span = colSpan || 1;
  const parentClass = className || "";

  return (
    <div
      className={`grid-item grid-item--cols-${span} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default GridItem;

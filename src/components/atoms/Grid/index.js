import React from "react";
import "./style.css";

const Grid = (props = {}) => {
  const { columns, children, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <div
      className={`grid grid--columns-${columns} ${parentClass}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Grid;

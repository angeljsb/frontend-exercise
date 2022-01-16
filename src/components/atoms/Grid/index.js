import React from "react";

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

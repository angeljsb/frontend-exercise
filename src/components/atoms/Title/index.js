import React from "react";

const Title = (props = {}) => {
  const { size, children, ...otherProps } = props;

  const realSize = ["small", "medium", "large", "presentation"].includes(size)
    ? size
    : "medium";

  return (
    <h1 className={`title title--${realSize}`} {...otherProps}>
      {children}
    </h1>
  );
};

export default Title;

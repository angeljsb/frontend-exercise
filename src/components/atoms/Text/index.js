import React from "react";

const Text = (props = {}) => {
  const { size, children, ...otherProps } = props;

  const realSize = ["small", "medium", "large", "presentation"].includes(size)
    ? size
    : "medium";

  return (
    <p className={`text text--${realSize}`} {...otherProps}>
      {children}
    </p>
  );
};

export default Text;

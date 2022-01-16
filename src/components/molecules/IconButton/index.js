import React from "react";
import Button from "../../atoms/Button";
import "./style.css";

const IconButton = (props = {}) => {
  const { className, icon, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <Button className={`icon-button ${parentClass}`} {...otherProps}>
      <div className="icon-button__icon-container">{icon}</div>
    </Button>
  );
};

export default IconButton;

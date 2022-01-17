import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./style.css";

const Link = (props = {}) => {
  const { className, ...otherProps } = props;
  return (
    <ReactRouterLink className={`link ${className || ""}`} {...otherProps} />
  );
};

export default Link;

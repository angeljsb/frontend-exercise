import React from "react";
import LogoBlack from "./logo-black.svg";
import LogoWhite from "./logo-white.svg";

const Logo = (props = {}) => {
  const { color, className, ...otherProps } = props;

  const parentClass = className || "";
  const src = color === "white" ? LogoWhite : LogoBlack;

  return <img src={src} className={`logo ${parentClass}`} {...otherProps} />;
};

export default Logo;

import React from "react";
import LogoBlack from "../../../assets/logo-black.svg";
import LogoWhite from "../../../assets/logo-white.svg";

const Logo = (props = {}) => {
  const { color, className, ...otherProps } = props;

  const parentClass = className || "";
  const src = color === "white" ? LogoWhite : LogoBlack;

  return (
    <img
      src={src}
      alt="easybank"
      className={`logo ${parentClass}`}
      {...otherProps}
    />
  );
};

export default Logo;

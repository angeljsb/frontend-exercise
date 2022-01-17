import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const FooterIcon = (props = {}) => {
  const { children, to, ...otherProps } = props;

  return (
    <div className="footer-icon" {...otherProps}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default FooterIcon;

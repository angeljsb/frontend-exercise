import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavItem = (props = {}) => {
  const { children, to, className, ...otherProps } = props;

  const parentClass = className || "";

  return (
    <li className={`navigation-link ${parentClass}`} {...otherProps}>
      <Link className="navigation-link__link" to={to}>
        {children}
        <span className="navigation-link__mark"></span>
      </Link>
    </li>
  );
};

export default NavItem;

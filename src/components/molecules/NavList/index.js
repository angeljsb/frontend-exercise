import React from "react";
import NavItem from "../../atoms/NavItem";
import "./style.css";

const NavList = (props = {}) => {
  const { items, ...otherProps } = props;

  return (
    <ul className="nav-list" {...otherProps}>
      {items.map((item, index) => (
        <NavItem key={index} to={item.url} className="nav-list__item">
          {item.name}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavList;

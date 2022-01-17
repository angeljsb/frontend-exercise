import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo";
import NavList from "../../molecules/NavList";
import Button from "../../atoms/Button";
import "./style.css";

const Header = (props = {}) => {
  const directions = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#",
    },
    {
      name: "Contact",
      url: "#",
    },
    {
      name: "Blog",
      url: "#",
    },
    {
      name: "Careers",
      url: "#",
    },
  ];

  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to="/">
          <Logo color="black"></Logo>
        </Link>
        <NavList items={directions} />
        <Button>Request Invite</Button>
      </nav>
    </header>
  );
};

export default Header;

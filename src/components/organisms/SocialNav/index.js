import React from "react";
import { ReactComponent as Facebook } from "../../../assets/facebook.svg";
import { ReactComponent as Youtube } from "../../../assets/youtube.svg";
import { ReactComponent as Twitter } from "../../../assets/twitter.svg";
import { ReactComponent as Pinterest } from "../../../assets/pinterest.svg";
import { ReactComponent as Instagram } from "../../../assets/instagram.svg";
import FooterIcon from "../../molecules/FooterIcon";
import "./style.css";

const SocialNav = (props = {}) => {
  const options = [
    {
      icon: <Facebook />,
      url: "",
    },
    {
      icon: <Youtube />,
      url: "",
    },
    {
      icon: <Twitter />,
      url: "",
    },
    {
      icon: <Pinterest />,
      url: "",
    },
    {
      icon: <Instagram />,
      url: "",
    },
  ];

  return (
    <nav className="social-nav">
      <ul className="social-nav__link">
        {options.map((option, index) => (
          <li key={index}>
            <FooterIcon to={option.url}>{option.icon}</FooterIcon>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialNav;

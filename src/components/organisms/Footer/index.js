import React from "react";
import Logo from "../../atoms/Logo";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import "./style.css";
import SocialNav from "../SocialNav";
import FooterLinks from "../../molecules/FooterLinks";

const Footer = (props = {}) => {
  const { children, ...otherProps } = props;

  const links = [
    {
      name: "About Us",
      url: "",
    },
    {
      name: "Careers",
      url: "",
    },
    {
      name: "Contact",
      url: "",
    },
    {
      name: "Support",
      url: "",
    },
    {
      name: "Blog",
      url: "",
    },
    {
      name: "Privacy Policy",
      url: "",
    },
  ];

  return (
    <footer className="footer" {...otherProps}>
      <Grid className="footer__container" columns="4">
        <GridItem className="footer__social-logo">
          <Logo color="white"></Logo>
          <SocialNav></SocialNav>
        </GridItem>
        <GridItem>
          <FooterLinks options={links}></FooterLinks>
        </GridItem>
        <GridItem></GridItem>
        <GridItem className="footer__rights">
          <Button>Request Invite</Button>
          <Text className="footer__text">© Easybank. All Rights Reserved</Text>
        </GridItem>
      </Grid>
    </footer>
  );
};

export default Footer;

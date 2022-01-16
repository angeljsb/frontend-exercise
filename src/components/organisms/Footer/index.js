import React from "react";
import Text from "../../atoms/Text";
import "./style.css";

const Footer = (props = {}) => {
  const { children, ...otherProps } = props;

  return (
    <footer className="footer" {...otherProps}>
      <Text size="small">Created by Angel Suárez</Text>
    </footer>
  );
};

export default Footer;

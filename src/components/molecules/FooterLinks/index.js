import React from "react";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import Link from "../../atoms/Link";
import "./style.css";

const FooterLinks = (props = {}) => {
  const { options, ...otherProps } = props;

  return (
    <nav className="footer-links" {...otherProps}>
      <Grid className="footer-links__grid" columns={2}>
        {options.map((option, index) => (
          <GridItem className="footer-links__grid-item" key={index}>
            <Link className="footer-links__link" to={option.url}>
              {option.name}
            </Link>
          </GridItem>
        ))}
      </Grid>
    </nav>
  );
};

export default FooterLinks;

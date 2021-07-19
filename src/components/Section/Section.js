import React from "react";
import PropTypes from "prop-types";

import { H2Styled } from "./Section.styles";

export const Section = ({ title, children }) => {
  return (
    <section>
      <H2Styled>{title}</H2Styled>
      <>{children}</>
    </section>
  );
};

Section.defaultProps = {
  children: "",
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

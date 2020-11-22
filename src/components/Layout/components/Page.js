import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html, body {
    margin: 0;
    padding: 0;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
  display: block;
  width: 100vw;
  background: #0D0C1D;
  color: #EFFFFA;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}



`;

const Page = ({ children, title, ...otherProps }) => (
  <Fragment>
    <Helmet title={`${title} — My gif`} />
    <GlobalStyle />
    {children}
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;

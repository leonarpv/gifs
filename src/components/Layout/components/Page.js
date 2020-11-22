import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
body {
  width: 100vw;
  height: 100vh;
  display: block;
}
main{
    width: 100%;
    margin: auto;
    max-width: 792px;
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

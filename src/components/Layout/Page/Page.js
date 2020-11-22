import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ children, title, ...otherProps }) => (
  <Fragment>
    <Helmet title={`${title} — My gif`} />
    <Header />
    <div className="container">
      <div className="row">{children}</div>
    </div>
    <Footer />
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;

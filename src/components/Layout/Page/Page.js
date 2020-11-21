import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const Page = ({ children, title, ...otherProps }) => (
  <Fragment>
    <Helmet title={`${title} — My gif`} />
    <div className="container">
      <div className="row">{children}</div>
    </div>
  </Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;

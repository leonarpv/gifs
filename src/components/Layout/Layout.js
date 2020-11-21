import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Page from "./Page/Page";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, history, match, ...rest }) => {
  const handleSearch = async (value) => {
    history.push(`/search/${value}`);
  };

  return (
    <Page {...rest}>
      <Sidebar />
      {children}
    </Page>
  );
};

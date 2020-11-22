import React from "react";
import Page from "./Page/Page";
import { Sidebar, SearchBar } from "../common";

export const Layout = ({ children, history, match, ...rest }) => {
  return (
    <Page {...rest}>
      <Sidebar />
      <SearchBar />
      {children}
    </Page>
  );
};

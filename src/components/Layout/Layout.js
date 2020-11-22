import React from "react";
import Page from "./Page/Page";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children, history, match, ...rest }) => {
  return (
    <Page {...rest}>
      <Sidebar />
      {children}
    </Page>
  );
};

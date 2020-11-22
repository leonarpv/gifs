import React from "react";

import { Sidebar, SearchBar } from "../common";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

export const Layout = ({ children, history, match, ...rest }) => {
  return (
    <Page {...rest}>
      <Header />
      <Sidebar />
      <SearchBar />
      {children}
      <Footer />
    </Page>
  );
};

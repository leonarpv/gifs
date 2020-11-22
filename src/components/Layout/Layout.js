import React from "react";

import { Sidebar, SearchBar } from "../common";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";
import useUserContext from "../../hooks/useUserContext";
import Burger from "../common/Burger";
import { useUserDispatch, useUserState } from "../../context/UserContext/hooks";

export const Layout = ({ children, history, match, ...rest }) => {
  const { sidebarOpen } = useUserState();
  const { openSidebar } = useUserDispatch();

  return (
    <Page {...rest}>
      <Header />
      <Sidebar open={sidebarOpen} />
      <Burger open={sidebarOpen} setOpen={openSidebar} />
      <SearchBar />

      <Footer />
    </Page>
  );
};
//  {children}

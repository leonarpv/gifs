import React from "react";
import { Favorites, SearchBar, Navigation } from "../common";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Burger from "../common/Burger";
import Star from "../common/Star";
import { useUserDispatch, useUserState } from "../../context/UserContext/hooks";
import { StyledLayoutWrapper } from "./styled";

export const Layout = ({
  children,
  history,
  match,
  loading,
  loadingText = "Loading your content...",
  ...rest
}) => {
  const { sidebarOpen } = useUserState();
  const { openSidebar } = useUserDispatch();

  return (
    <Page {...rest}>
      <StyledLayoutWrapper>
        <Header />
        <Navigation open={sidebarOpen} />
        <Star open={sidebarOpen} setOpen={openSidebar} />
        <SearchBar />
        {children}
        <Footer />
      </StyledLayoutWrapper>
    </Page>
  );
};
//  {children}

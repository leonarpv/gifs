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
  const { sidebarOpen, favoritesOpen } = useUserState();
  const { openSidebar, setOpenFavorites } = useUserDispatch();

  return (
    <Page {...rest}>
      <StyledLayoutWrapper>
        <Header />
        <Navigation open={sidebarOpen} />
        <Favorites open={favoritesOpen} />
        {!favoritesOpen && <Burger open={sidebarOpen} setOpen={openSidebar} />}
        {!sidebarOpen && (
          <Star open={favoritesOpen} setOpen={setOpenFavorites} />
        )}
        <SearchBar />
        {children}
        <Footer />
      </StyledLayoutWrapper>
    </Page>
  );
};
//  {children}

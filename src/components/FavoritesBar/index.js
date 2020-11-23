import React from "react";
import { useUserState } from "../../context/UserContext/hooks";
import { Sidebar } from "../common";
import FavoritesList from "./FavoritesList";
import { ListTitle } from "./styled";
export const FavoritesBar = ({ open }) => {
  const { favorites } = useUserState();
  return (
    <Sidebar open={open}>
      <ListTitle>Your favorites</ListTitle>
      <FavoritesList
        height="150"
        width="150"
        itemNoTitle
        favorites={favorites}
      />
    </Sidebar>
  );
};

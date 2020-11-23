import React from "react";

import { useUserState } from "../../context/UserContext/hooks";
import { Sidebar } from "../common";

import FavoritesList from "./FavoritesList";

export const FavoritesBar = ({ open }) => {
  const { favorites } = useUserState();
  return (
    <Sidebar open={open}>
      <FavoritesList
        height="150"
        width="150"
        itemNoTitle
        title="Your favorites"
        favorites={favorites}
      />
    </Sidebar>
  );
};

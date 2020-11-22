import React from "react";
import useUserContext from "../../../hooks/useUserContext";
import ItemList from "../../common/ItemList";

export default function FavoritesList(favorites) {
  return <ItemList gifs={favorites} />;
}

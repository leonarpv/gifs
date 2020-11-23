import React from "react";
import ItemList from "../../common/ItemList";

export default function FavoritesList(favorites) {
  return <ItemList gifs={favorites} />;
}

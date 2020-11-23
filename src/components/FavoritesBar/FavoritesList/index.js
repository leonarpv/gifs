import React from "react";
import ItemList from "../../common/ItemList";

export default function FavoritesList({ favorites = [], ...rest }) {
  return <ItemList items={favorites} {...rest} />;
}

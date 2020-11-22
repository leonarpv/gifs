import React from "react";
import Item from "./../Item";
import { ItemListWrapper } from "./styled";

export default function ItemList({ items, title }) {
  return (
    <ItemListWrapper>
      {items ? (
        items.map((item) => <Item key={item.id} gif={item} />)
      ) : (
        <div>trending</div>
      )}
    </ItemListWrapper>
  );
}

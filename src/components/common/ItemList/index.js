import React from "react";
import Item from "./../Item";
import { ItemListWrapper, ListTitleWrapper, ListTitle } from "./styled";

export default function ItemList({ items, title }) {
  return (
    <ItemListWrapper>
      <ListTitleWrapper>
        {title && <ListTitle>{title}</ListTitle>}
      </ListTitleWrapper>
      {items && items.map((item) => <Item key={item.id} gif={item} />)}
    </ItemListWrapper>
  );
}

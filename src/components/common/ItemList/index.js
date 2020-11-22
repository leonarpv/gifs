import React from "react";
import Item from "./../Item";

export default function ItemList({ items }) {
  return (
    <div className="gifs">
      {items ? (
        items.map((item) => <Item key={item.id} gif={item} />)
      ) : (
        <div>trending</div>
      )}
    </div>
  );
}

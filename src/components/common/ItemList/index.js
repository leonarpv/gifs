import React from "react";
import Item from "./../Item";

export default function ItemList({ gifs }) {
  return (
    <div className="gifs">
      {gifs.map((gif) => <Item key={gif.id} gif={gif} />).splice(2, 3)}
    </div>
  );
}

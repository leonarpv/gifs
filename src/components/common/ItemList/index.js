import React from "react";
import Item from "./../Item";

export default function ItemList({ gifs }) {
  return (
    <div>
      {gifs.map(({ id, title, url, ...restGif }) => (
        <Item id={id} key={id} title={title} url={url} {...restGif} />
      ))}
    </div>
  );
}

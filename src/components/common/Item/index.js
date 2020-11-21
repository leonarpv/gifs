import React from "react";
import { Link } from "react-router-dom";
import ItemFav from "../ItemFav";

export default function Item({ gif }) {
  const { title, id, images, image = "original" } = gif;
  return (
    <div>
      <div>
        <ItemFav gif={gif} />
      </div>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        {images[image] && (
          <img loading="lazy" alt={title} src={images[image].url} />
        )}
      </Link>
    </div>
  );
}

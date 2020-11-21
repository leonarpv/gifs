import React from "react";
import { Link } from "react-router-dom";
import ItemFav from "../ItemFav";

export default function Item({ title, id, images, image = "original" }) {
  return (
    <div>
      <div>
        <ItemFav id={id} />
      </div>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
      </Link>
    </div>
  );
}

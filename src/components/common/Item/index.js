import React from "react";
import { Link } from "react-router-dom";
import ItemFav from "../ItemFav";
import { ItemWrapper, ItemInfoWrapper, ItemInfo, ItemImage } from "./styled";

export default function Item({ gif, itemNoTitle = false }) {
  const { title, id, images, bitlyUrl, image = "original" } = gif;

  return (
    // onMouseOver={}
    <ItemWrapper>
      <ItemInfoWrapper>
        <ItemFav gif={gif} />
        <ItemInfo>
          <Link to={`/gif/${id}`}>{!itemNoTitle && <h1>{title}</h1>}</Link>
        </ItemInfo>
      </ItemInfoWrapper>
      {images[image] && (
        <ItemImage
          className="loaded-image"
          loading="lazy"
          alt={title}
          src={images[image].url}
        />
      )}
    </ItemWrapper>
  );
}

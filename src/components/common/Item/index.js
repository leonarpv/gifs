import React from "react";
import { Link } from "react-router-dom";
import ItemFav from "../ItemFav";
import { ItemWrapper, ItemInfoWrapper, ItemInfo, ItemImage } from "./styled";

export default function Item({ gif }) {
  const { title, id, images, bitlyUrl, image = "original" } = gif;
  return (
    <ItemWrapper>
      <Link to={`/gif/${id}`}>
        <ItemInfoWrapper>
          <ItemInfo>
            <h1>{title}</h1>
          </ItemInfo>
          <div className="image-view-icon">
            <i className="far fa-eye" />
          </div>
        </ItemInfoWrapper>
        {images[image] && (
          <ItemImage
            className="loaded-image"
            loading="lazy"
            alt={title}
            src={images[image].url}
          />
        )}
      </Link>
    </ItemWrapper>
  );
}

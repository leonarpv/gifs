import React, { useState } from "react";
import useFavorites from "../../../hooks/useFavorites";
import useAdFavorite from "../../../hooks/useAdFavorite";

export default function ItemFav({ gif }) {
  const { data } = useFavorites();
  const [addFavorite, addFavoriteInfo] = useAdFavorite();
  const isFaved = data.some((fav) => fav.id === gif.id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <button onClick={() => addFavorite(gif)}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
    </>
  );
}

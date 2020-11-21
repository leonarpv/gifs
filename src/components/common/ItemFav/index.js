import React, { useState } from "react";
import useFavorites from "../../../hooks/useFavorites";
import useAdFavorite from "../../../hooks/useAdFavorite";

export default function ItemFav({ id }) {
  const { data } = useFavorites();
  const [addFavorite, addFavoriteInfo] = useAdFavorite();
  const isFaved = data.some((fav) => fav.id === id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <button onClick={() => addFavorite(id)}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
    </>
  );
}

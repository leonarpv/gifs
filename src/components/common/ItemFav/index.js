import React, { useState } from "react";

import useUserContext from "../../../hooks/useUserContext";

export default function ItemFav({ gif }) {
  const { favorites, saveFavorite } = useUserContext();
  const isFaved = favorites.some((fav) => fav.id === gif.id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <>
      <button onClick={() => saveFavorite(gif)}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
    </>
  );
}

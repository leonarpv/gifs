import React from "react";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import useUserContext from "../../../hooks/useUserContext";
import { FavWrapper } from "./styled";

export default function ItemFav({ gif }) {
  const { favorites, saveFavorite } = useUserContext();
  const isFaved = favorites.some((fav) => fav.id === gif.id);

  const [label, emoji] = isFaved
    ? ["Remove Gif from favorites", <RiStarHalfFill />]
    : ["Add Gif to favorites", <RiStarFill />];

  return (
    <FavWrapper>
      <span onClick={() => saveFavorite(gif)}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </span>
    </FavWrapper>
  );
}

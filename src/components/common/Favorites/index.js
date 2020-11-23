import React from "react";
import { Link } from "react-router-dom";
import { useUserState } from "../../../context/UserContext/hooks";
import { Sidebar } from "../Sidebar";

export const Favorites = ({ open }) => {
  const { favorites } = useUserState();
  return (
    <Sidebar open={open}>
      <ul>
        {favorites.length ? (
          favorites.map((gif, key) => (
            <li key={gif?.id.toString()}>
              <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
            </li>
          ))
        ) : (
          <li>No tienes Favoritos</li>
        )}
      </ul>
    </Sidebar>
  );
};
/*
 */

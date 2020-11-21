import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import useUserContext from "../../hooks/useUserContext";
export const Sidebar = () => {
  const { favorites } = useUserContext();
  console.log(favorites);
  return (
    <div>
      <ul>
        {favorites.map((gif, key) => (
          <li key={gif?.id.toString()}>
            <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

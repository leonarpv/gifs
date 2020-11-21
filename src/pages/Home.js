import React, { useState, useEffect, useCallback } from "react";
import useTrending from "../hooks/useTrending";
import { Link } from "react-router-dom";

export const Home = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useTrending();

  return (
    <div>
      {isFetching && <div>Cargando</div> && console.log("cargo")}
      {isError && <div>Ocurió un error</div>}
      {!isFetching && (
        <ul>
          {data.map((gif) => (
            <li>
              <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

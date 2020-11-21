import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
export const Sidebar = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useFavorites();

  return (
    <div>
      <ul>
        {isFetching && <li>Cargando</li>}
        {isError && <li>Ocurió un error</li>}
        {!isFetching && !isError && (
          <>
            {data.length &&
              data.map((gif, key) => (
                <li key={gif?.id.toString()}>
                  <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
                </li>
              ))}
          </>
        )}
      </ul>
      <hr></hr>
    </div>
  );
};

import React from "react";
import useTrending from "../hooks/useTrending";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import useAdFavorite from "../hooks/useAdFavorite";

export const Home = () => {
  const { isFetching, isError, data, refetch } = useTrending();
  const [addFavorite, addFavoriteInfo] = useAdFavorite();

  return (
    <div>
      <ul>
        {isFetching && <li>Cargando</li>}
        {isError && <li>Ocurió un error</li>}
        {!isFetching && !isError && (
          <>
            {data.map((gif, key) => (
              <li key={key.toString()}>
                <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
                {gif.isFavorite && (
                  <button onClick={() => addFavorite(gif)}>
                    {addFavoriteInfo.isLoading
                      ? "Saving..."
                      : addFavoriteInfo.isError
                      ? "Error!"
                      : addFavoriteInfo.isSuccess
                      ? "Saved!"
                      : "Add to favorites"}
                  </button>
                )}
                {!gif.isFavorite && (
                  <button onClick={() => addFavorite(gif)}>
                    {addFavoriteInfo.isLoading
                      ? "Saving..."
                      : addFavoriteInfo.isError
                      ? "Error!"
                      : addFavoriteInfo.isSuccess
                      ? "Saved!"
                      : "remove of favorites"}
                  </button>
                )}
              </li>
            ))}
          </>
        )}
      </ul>
      <hr></hr>
      <Sidebar />
    </div>
  );
};

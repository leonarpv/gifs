import React from "react";
import useTrending from "../hooks/useTrending";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import useAdFavorite from "../hooks/useAdFavorite";
import ItemList from "../components/common/ItemList";

export const Home = () => {
  const { isFetching, isError, data, refetch } = useTrending();

  return (
    <div>
      <ul>
        {isFetching && <li>Cargando</li>}
        {isError && <li>Ocurió un error</li>}
        {!isFetching && !isError && <ItemList gifs={data} />}
      </ul>
      <Sidebar />
    </div>
  );
};

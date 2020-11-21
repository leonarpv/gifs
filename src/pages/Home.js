import React from "react";
import useTrending from "../hooks/useTrending";
import { Sidebar } from "../components";
import { useHistory } from "react-router-dom";

import ItemList from "../components/common/ItemList";

import { SearchBox } from "../components/common/SearchBox";
export const Home = () => {
  const { isFetching, isError, data, refetch } = useTrending();
  const history = useHistory();
  const onHandleSubmit = (value) => {
    history.push(`/search/${value}`);
    refetch();
  };
  return (
    <div>
      <SearchBox placeholder="ingrese valor" handleSubmit={onHandleSubmit} />
      <ul>
        {isFetching && <li>Cargando</li>}
        {isError && <li>Ocurió un error</li>}
        {!isFetching && !isError && <ItemList gifs={data} />}
      </ul>
      <Sidebar />
    </div>
  );
};

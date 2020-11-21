import React from "react";
import { useHistory } from "react-router-dom";
import ItemList from "../components/common/ItemList";
import { SearchBox } from "../components/common/SearchBox";

import useSearchGifs from "../hooks/useSearchGifs";

export const Search = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useSearchGifs();
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
    </div>
  );
};

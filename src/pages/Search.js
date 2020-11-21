import React from "react";

import useSearchGifs from "../hooks/useSearchGifs";

export const Search = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useSearchGifs();

  return <div>{isFetching ? <div>Cargando</div> : <div>Tengo data</div>}</div>;
};

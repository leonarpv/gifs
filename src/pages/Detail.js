import React, { useState, useEffect, useCallback } from "react";
import useTrending from "../hooks/useTrending";
export const Home = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useGif();

  return <div>{isFetching ? <div>Cargando</div> : <div>Tengo data</div>}</div>;
};

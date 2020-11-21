import React, { useState, useEffect, useCallback } from "react";
import useGif from "../hooks/useTrending";
export const Detail = ({ ...rest }) => {
  const { isFetching, isError, data, refetch } = useGif();

  return <div>{isFetching ? <div>Cargando</div> : <div>Tengo data</div>}</div>;
};

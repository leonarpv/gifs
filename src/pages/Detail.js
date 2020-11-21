import React from "react";
import { Gif } from "@giphy/react-components";
import { useParams } from "react-router-dom";
import useDetailGif from "../hooks/useDetailGif";
export const Detail = ({ ...rest }) => {
  const { id } = useParams();
  const { isFetching, isError, data, refetch } = useDetailGif(id);

  return (
    <div>
      {isFetching && <div>Cargando</div>}
      {isError && <div>Ocurió un error</div>}
      {!isFetching && <Gif gif={data} />}
    </div>
  );
};

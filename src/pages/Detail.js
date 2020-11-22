import React from "react";
import { Gif } from "@giphy/react-components";
import useDetailGifContext from "../hooks/useDetailGifContext";
import { Layout } from "../components/Layout/Layout";

export const Detail = () => {
  const { loading, gif } = useDetailGifContext();
  console.log(gif);
  return (
    <Layout title={gif?.title}>
      {loading && <div>Cargando</div>}
      {gif && <Gif gif={gif} />}
    </Layout>
  );
};

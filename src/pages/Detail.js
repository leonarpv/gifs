import React from "react";
import { Gif } from "@giphy/react-components";
import useDetailGifContext from "../hooks/useDetailGifContext";
import GifDetail from "../components/Detail/GifDetail";
import { Layout } from "../components/Layout";

export const Detail = () => {
  const { loading, gif } = useDetailGifContext();
  return (
    <Layout title="Detalles">
      {gif && (
        <GifDetail loading={loading} image="downsized" noLink gif={gif} />
      )}
    </Layout>
  );
};

import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
import useTrendingGifContext from "../hooks/useTrendingGifContext";
export const Home = () => {
  const { loading, trendings } = useTrendingGifContext();

  return (
    <Layout title={"Home"}>
      <ul>
        {loading && <li>Cargando</li>}
        {!loading && <ItemList gifs={trendings} />}
      </ul>
    </Layout>
  );
};

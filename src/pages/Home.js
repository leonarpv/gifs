import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
import useTrendingContext from "../hooks/useTrendingContext";
export const Home = () => {
  const { loading, trendings } = useTrendingContext();

  return (
    <Layout title={"Home"}>
      <ul>
        {loading && <li>Cargando</li>}
        {!loading && <ItemList gifs={trendings} />}
      </ul>
    </Layout>
  );
};

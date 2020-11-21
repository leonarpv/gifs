import React from "react";
import useTrending from "../hooks/useTrending";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
export const Home = () => {
  const { isFetching, isError, data, refetch } = useTrending();

  return (
    <Layout title={"Home"}>
      <ul>
        {isFetching && <li>Cargando</li>}
        {isError && <li>Ocurió un error</li>}
        {!isFetching && !isError && <ItemList gifs={data} />}
      </ul>
    </Layout>
  );
};

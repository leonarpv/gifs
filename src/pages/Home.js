import React from "react";
import useGifContext from "../hooks/useGifContext";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
export const Home = () => {
  const { loading, gifs } = useGifContext();

  return (
    <Layout title={"Home"}>
      <ul>
        {loading && <li>Cargando</li>}

        {!loading && <ItemList gifs={gifs} />}
      </ul>
    </Layout>
  );
};

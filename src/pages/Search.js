import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
import useSearchGifContextt from "../hooks/useSearchGifContext";

export const Search = () => {
  const { loading, gifs } = useSearchGifContextt();

  return (
    <Layout title={"Search"}>
      <ul>
        {loading && <li>Cargando</li>}

        {!loading && <ItemList gifs={gifs} />}
      </ul>
    </Layout>
  );
};

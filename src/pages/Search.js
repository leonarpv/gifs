import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout";
import useSearchGifContextt from "../hooks/useSearchGifContext";

export const Search = () => {
  const { loading, gifs, querySearch } = useSearchGifContextt();

  return (
    <Layout
      title={"Search"}
      loading={loading}
      loadingText={`Searching ${querySearch}`}
    >
      <ul>
        {loading && <li>Cargando</li>}

        {!loading && <ItemList gifs={gifs} />}
      </ul>
    </Layout>
  );
};

import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout/Layout";
import useSearchGifsContext from "../hooks/useSearchGifsContext";

export const Search = () => {
  const { loading, gifs } = useSearchGifsContext();

  return (
    <Layout title={"Search"}>
      <ul>
        {loading && <li>Cargando</li>}

        {!loading && <ItemList gifs={gifs} />}
      </ul>
    </Layout>
  );
};

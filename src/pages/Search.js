import React from "react";
import ItemList from "../components/common/ItemList";
import { Layout } from "../components/Layout";
import SearchResults from "../components/Search/SearchResults";
import useSearchGifContextt from "../hooks/useSearchGifContext";

export const Search = () => {
  const { loading, gifs, querySearch } = useSearchGifContextt();

  return (
    <Layout
      title={"Search"}
      loading={loading}
      loadingText={`Searching ${querySearch}`}
    >
      <SearchResults results={gifs} />
    </Layout>
  );
};

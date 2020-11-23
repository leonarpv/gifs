import React from "react";
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
      <SearchResults
        results={gifs}
        height="200"
        width="200"
        title={
          querySearch
            ? `${
                loading ? `Searching` : ` ${gifs.length} results for`
              } ${querySearch} results...`
            : `Nothing to search? please type something...`
        }
      />
    </Layout>
  );
};

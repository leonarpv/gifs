import React from "react";
import GlobalLoader from "../../common/GlobalLoader";
import ItemList from "../../common/ItemList";

const SearchResultsWithLoading = GlobalLoader(ItemList);

export default function SearchResults({ results = [], loading, ...rest }) {
  return (
    <SearchResultsWithLoading isLoadings={loading} items={results} {...rest} />
  );
}

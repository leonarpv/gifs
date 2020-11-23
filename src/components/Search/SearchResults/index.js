import React from "react";
import ItemList from "../../common/ItemList";

export default function SearchResults({ results = [], ...rest }) {
  return <ItemList items={results} {...rest} />;
}

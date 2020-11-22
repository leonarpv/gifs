import React from "react";
import ItemList from "../../common/ItemList";

export default function SearchResults({ results = [] }) {
  return <ItemList items={results} />;
}

import React from "react";
import ItemList from "../../common/ItemList";

export default function TrendingList({ trendings = [] }) {
  return <ItemList items={trendings} />;
}

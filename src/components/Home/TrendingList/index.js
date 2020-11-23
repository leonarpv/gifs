import React from "react";
import GlobalLoader from "../../common/GlobalLoader";
import ItemList from "../../common/ItemList";

const ListWithLoading = GlobalLoader(ItemList);

export default function TrendingList({ trendings = [], loading, ...rest }) {
  return <ListWithLoading isLoadings={loading} items={trendings} {...rest} />;
}

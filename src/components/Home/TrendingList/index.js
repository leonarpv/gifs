import React from "react";
import GlobalLoader from "../../common/GlobalLoader";
import ItemList from "../../common/ItemList";

const TrendingListWithLoading = GlobalLoader(ItemList);

export default function TrendingList({ trendings = [], loading, ...rest }) {
  return (
    <TrendingListWithLoading isLoadings={loading} items={trendings} {...rest} />
  );
}

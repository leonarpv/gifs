import React, { useState } from "react";
import ItemList from "../components/common/ItemList";
import {
  StyledTabContent,
  StyledTab,
  StyledTabs,
} from "../components/common/Tab";
import FavoritesList from "../components/Favorites/FavoritesList";
import TrendingList from "../components/Home/TrendingList";
import { Layout } from "../components/Layout";
import useTrendingGifContext from "../hooks/useTrendingGifContext";
export const Home = () => {
  const { loading, trendings } = useTrendingGifContext();

  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);

    if (index !== active) {
      setActive(index);
    }
  };

  const tabs = ["Tredings", "Favorites"];

  return (
    <Layout title={"Home"} loading={loading}>
      {!loading && <TrendingList trendings={trendings} />}
      <FavoritesList />
    </Layout>
  );
};

//   {!loading && }

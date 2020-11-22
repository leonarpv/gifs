import React, { useState } from "react";

import FavoritesList from "../components/Favorites/FavoritesList";
import TrendingList from "../components/Home/TrendingList";
import { Layout } from "../components/Layout";
import useTrendingGifContext from "../hooks/useTrendingGifContext";
export const Home = () => {
  const { loading, trendings } = useTrendingGifContext();

  return (
    <Layout title={"Home"} loading={loading}>
      {!loading && <TrendingList trendings={trendings} />}
    </Layout>
  );
};

//   {!loading && }

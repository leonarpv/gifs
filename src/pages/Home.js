import React, { useState } from "react";
import TrendingList from "../components/Home/TrendingList";
import { Layout } from "../components/Layout";
import useTrendingGifContext from "../hooks/useTrendingGifContext";
export const Home = () => {
  const { loading, trendings } = useTrendingGifContext();

  return (
    <Layout title={"Home"} loading={loading}>
      <TrendingList
        title="Trending gifs"
        loading={loading}
        trendings={trendings}
      />
    </Layout>
  );
};

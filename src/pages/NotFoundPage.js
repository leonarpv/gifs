import React from "react";
import { Layout } from "../components/Layout";
import SearchResults from "../components/Search/SearchResults";
import useSearchGifContextt from "../hooks/useSearchGifContext";

export const NotFoundPage = () => {
  return (
    <Layout
      title={"Not found"}
      placeholderSearch="Nothing to search? please type something..."
    ></Layout>
  );
};

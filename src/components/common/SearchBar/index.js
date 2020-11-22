import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useSearchGifContext from "../../../hooks/useSearchGifContext";
import { SearchBox } from "./components";

export const SearchBar = () => {
  const { loading, refetch } = useSearchGifContext();
  const { push } = useHistory();
  const { query } = useParams();
  const onHandleSubmit = (value) => {
    push(`/search/${value}`);
    refetch();
  };
  return <SearchBox initialValue={query} handleSubmit={onHandleSubmit} />;
};

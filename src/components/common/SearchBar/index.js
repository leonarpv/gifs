import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useSearchGifContext from "../../../hooks/useSearchGifContext";
import { SearchBox } from "./SearchBox";
import { StyledSearchBar } from "./styled";

export const SearchBar = ({ placeholderSearch = "" }) => {
  const { refetch } = useSearchGifContext();
  const { push } = useHistory();
  const { query } = useParams();
  const onHandleSubmit = (value) => {
    push(`/search/${value}`);
    refetch();
  };
  return (
    <StyledSearchBar>
      <SearchBox
        initialValue={query}
        placeholder={placeholderSearch}
        handleSubmit={onHandleSubmit}
      />
    </StyledSearchBar>
  );
};

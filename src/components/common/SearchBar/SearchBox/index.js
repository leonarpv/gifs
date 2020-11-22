import React from "react";
import { StyledSearchBox, StyledSearchForm, StyledSearchInput } from "./styled";

export const SearchBox = ({ placeholder, handleSubmit, initialValue }) => {
  const [value, setValue] = React.useState(initialValue, "");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
  };

  const onHandleSetValue = (e) => setValue(e.target.value);

  return (
    <StyledSearchBox>
      <StyledSearchForm onSubmit={onHandleSubmit}>
        <StyledSearchInput
          type="text"
          className="search-query form-control"
          value={value}
          placeholder={placeholder}
          onChange={onHandleSetValue}
        />
      </StyledSearchForm>
    </StyledSearchBox>
  );
};

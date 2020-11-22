import styled from "styled-components";

const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;
const StyledSearchForm = styled.form`
  width: 100%;
`;
const StyledSearchInput = styled.input`
  justify-content: stretch;

  font-size: 22px;
  border: unset;
  :focus {
    border: unset;
  }
`;

export { StyledSearchBox, StyledSearchForm, StyledSearchInput };

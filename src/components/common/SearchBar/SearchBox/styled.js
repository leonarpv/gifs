import styled from "styled-components";

const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #effffa;
  width: 100%;
  border-radius: 5px;
  position: relative;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
`;
const StyledSearchForm = styled.form`
  width: 100%;
`;
const StyledSearchInput = styled.input`
  height: 55px;
  background: #effffa;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0 60px 0 20px;
  font-size: 18px;
  .active {
    border-radius: 5px 5px 0 0;
  }
  :focus {
    border-color: unset;
  }
`;

export { StyledSearchBox, StyledSearchForm, StyledSearchInput };

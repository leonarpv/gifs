import styled from "styled-components";

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  min-height: 50%;
`;

const ListTitleWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const ListTitle = styled.h1`
  font-size: 48px;
`;

export { ItemListWrapper, ListTitleWrapper, ListTitle };

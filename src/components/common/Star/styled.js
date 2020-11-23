import styled from "styled-components";
const StyledStar = styled.span`
  position: absolute;
  top: 15%;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  color: ${(props) => (props.open ? "#0D0C1D" : "#effffa")};
  font-size: 48px;
  z-index: 10;
  :hover {
    cursor: pointer;
  }
  :active {
    border: unset;
  }
`;
export default StyledStar;

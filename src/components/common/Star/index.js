import React from "react";
import { GiStarsStack } from "react-icons/gi";
import StyledStar from "./styled";

export default function Stars({ open, setOpen }) {
  return (
    <StyledStar open={open} onClick={() => setOpen(!open)}>
      <GiStarsStack />
    </StyledStar>
  );
}

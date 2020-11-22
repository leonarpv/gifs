import React from "react";
import { StyledLoader } from "./styled";

export default function GlobalLoader() {
  return (
    <StyledLoader
      css={`
        position: fixed;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.5rem;
        transition: 0.3s ease;
        pointer-events: none;
      `}
    />
  );
}

import React from "react";
import { keyframes } from "styled-components";
import { ImSpinner } from "react-icons/im";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export function StyledLoader(props) {
  return (
    <ImSpinner
      {...props}
      css={`
        vertical-align: middle;
      `}
    />
  );
}

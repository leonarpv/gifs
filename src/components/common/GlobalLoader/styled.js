import React from "react";
import { ImSpinner } from "react-icons/im";

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

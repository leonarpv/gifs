import React from "react";
import StyledSidebar from "./styled";

export const Sidebar = ({ children, open, ...rest }) => {
  return (
    <StyledSidebar open={open} {...rest}>
      {children}
    </StyledSidebar>
  );
};

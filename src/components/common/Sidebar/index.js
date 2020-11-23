import React from "react";
import { Link } from "react-router-dom";
import StyledSidebar from "./styled";

export const Sidebar = ({ children, open, ...rest }) => {
  return (
    <StyledSidebar open={open} {...rest}>
      {children}
    </StyledSidebar>
  );
};
/*
 {favorites.map((gif, key) => (
          <li key={gif?.id.toString()}>
            <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
          </li>
        ))}*/

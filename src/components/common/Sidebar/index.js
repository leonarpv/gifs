import React from "react";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import StyledSidebar from "./styled";

export const Sidebar = ({ open }) => {
  return (
    <StyledSidebar open={open}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
      <hr></hr>
    </StyledSidebar>
  );
};
/*
 {favorites.map((gif, key) => (
          <li key={gif?.id.toString()}>
            <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
          </li>
        ))}*/

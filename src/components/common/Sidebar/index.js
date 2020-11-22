import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import StyledSidebar from "./styled";

export const Sidebar = ({ open }) => {
  const { favorites } = useUserContext();

  return (
    <StyledSidebar open={open}>
      <ul>
        {favorites.map((gif, key) => (
          <li key={gif?.id.toString()}>
            <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
          </li>
        ))}
      </ul>
      <hr></hr>
    </StyledSidebar>
  );
};

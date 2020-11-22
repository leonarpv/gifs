import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useSearchGifContext from "../../hooks/useSearchGifContext";
import useUserContext from "../../hooks/useUserContext";
import { SearchBox } from "../common/SearchBox";
export const Sidebar = () => {
  const { favorites } = useUserContext();
  const { loading, refetch } = useSearchGifContext();
  const history = useHistory();
  const { query } = useParams();
  const onHandleSubmit = (value) => {
    history.push(`/search/${value}`);
    refetch();
  };
  return (
    <div>
      <SearchBox
        placeholder="ingrese valor"
        initialValue={query}
        handleSubmit={onHandleSubmit}
      />
      <ul>
        {favorites.map((gif, key) => (
          <li key={gif?.id.toString()}>
            <Link to={`/gif/${gif.id}`}>{gif.title}</Link>
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

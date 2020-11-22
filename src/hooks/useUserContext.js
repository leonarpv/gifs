import { useEffect } from "react";
import { useUserDispatch, useUserState } from "../context/UserContext/hooks";
import { KEY_FAVORITES } from "../utils/constants";
import useLocalStorage from "./useLocalStorage";

export const isEmptyList = (list) => !list || list.length === 0;

export default function useUserContext() {
  const [elements, setElements] = useLocalStorage(KEY_FAVORITES, []);

  const { favorites } = useUserState();
  const { addFavorite } = useUserDispatch();
  const saveFavorite = (favorite) => {
    const favIndex = favorites.findIndex((f) => f.id === favorite.id);
    let newFavorites;
    if (favIndex !== -1) {
      newFavorites = favorites.filter((f) => f.id !== favorite.id);
    } else {
      newFavorites = [...favorites, favorite];
    }

    setElements(newFavorites);
    addFavorite(newFavorites);
  };
  useEffect(() => {
    if (elements) {
      addFavorite(elements);
    }
  }, [addFavorite, elements]);

  return {
    favorites,
    saveFavorite,
  };
}

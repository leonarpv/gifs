import { useMemo, useEffect } from "react";
import { useUserDispatch, useUserState } from "../context/UserContext/hooks";
import { KEY_FAVORITES } from "../utils/constants";
import useLocalStorage from "./useLocalStorage";

export const isEmptyList = (list) => !list || list.length === 0;
const preventDuplicity = (from, add) => from.filter((f) => f.id !== add.id);
export default function useUserContext() {
  const [elements, setElements] = useLocalStorage(KEY_FAVORITES, []);

  const { favorites } = useUserState();
  const { addFavorite } = useUserDispatch();
  const saveFavorite = (favorite) => {
    const oldFavorites = favorites;
    const newFavorites = [
      ...preventDuplicity(oldFavorites, favorite),
      favorite,
    ];
    setElements(newFavorites);
    addFavorite(newFavorites);
  };
  useEffect(() => {
    if (elements) {
      addFavorite(elements);
    }
  }, [favorites, elements]);

  return {
    favorites,
    saveFavorite,
  };
}

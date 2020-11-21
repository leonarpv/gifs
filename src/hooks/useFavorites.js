import { useMemo } from "react";
import { useQuery } from "react-query";
import { KEY_FAVORITES } from "../utils/constants";
import useLocalStorage from "./useLocalStorage";

export const isEmptyList = (list) => !list || list.length === 0;

export default function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage(KEY_FAVORITES, []);

  const initialRepositories = useMemo(() => favorites, []);

  return useQuery(KEY_FAVORITES, favorites, {
    initialData: initialRepositories,
    onError: (error, _newPost, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
  });
}

import { useMutation, queryCache } from "react-query";
import { KEY_FAVORITES } from "../utils/constants";
import useLocalStorage from "./useLocalStorage";
const preventDuplocity = (from, add) => from.filter((f) => f.id !== add.id);
export default function useAdFavorite() {
  const [favorites, setFavorites] = useLocalStorage(KEY_FAVORITES, []);
  return useMutation(
    (gif) => {
      return setFavorites([...preventDuplocity(favorites, gif), gif]);
    },

    {
      onMutate: (newFavorite) => {
        const oldFavorites = queryCache.getQueryData(KEY_FAVORITES);

        if (queryCache.getQueryData(KEY_FAVORITES)) {
          queryCache.setQueryData(KEY_FAVORITES, (old) => [
            ...preventDuplocity(old, newFavorite),
            newFavorite,
          ]);
        }

        return () => queryCache.setQueryData(KEY_FAVORITES, oldFavorites);
      },
      onError: (error, _newPost, rollback) => {
        console.error(error);
        if (rollback) rollback();
      },
      onSettled: () => {
        queryCache.invalidateQueries(KEY_FAVORITES);
      },
    }
  );
}

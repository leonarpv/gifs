import React, { useEffect, useMemo } from "react";
import { useQuery, queryCache } from "react-query";
import { KEY_FAVORITES } from "../utils/constants";

export const isEmptyList = (list) => !list || list.length === 0;

export default function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const initialRepositories = useMemo(() => favorites, []);

  return useQuery(KEY_FAVORITES, favorites, {
    initialData: initialRepositories,
  });
}

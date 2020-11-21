import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { KEY_TRENDINGS } from "../utils/constants";
import { fetchTrending } from "../fetchers";
import useFavorites from "./useFavorites";

const getTrendingByParams = async (key, params) => fetchTrending(params);
export default function useTrending() {
  const { query } = useParams();
  const { data: favorites } = useFavorites();
  const queryKey = useMemo(
    () => [
      KEY_TRENDINGS,
      {
        q: query,
      },
    ],
    [query]
  );

  const initialQueryKey = useMemo(() => queryKey, []);

  const { isFetching, isError, data, refetch } = useQuery(
    queryKey,
    getTrendingByParams,
    {
      initialData: initialQueryKey,
    }
  );

  return {
    isFetching,
    isError,
    data,
    refetch,
  };
}

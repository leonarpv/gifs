import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery, queryCache } from "react-query";
import { KEY_GIFS, KEY_TRENDINGS } from "../utils/constants";
import { fetchTrending } from "../fetchers";

const getTrendingByParams = async (key, params) => fetchTrending(params);
export default function useTrending() {
  const { query } = useParams();

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

  return useQuery(queryKey, getTrendingByParams, {
    initialData: initialQueryKey,
  });
}

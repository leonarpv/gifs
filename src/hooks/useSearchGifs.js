import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { KEY_GIFS } from "../utils/constants";
import { fetchGifs } from "../fetchers";

const getGifsByParams = async (key, params) => fetchGifs(params);

export default function useSearchGifs() {
  const { query } = useParams();

  const queryKey = useMemo(
    () => [
      KEY_GIFS,
      {
        q: query,
      },
    ],
    [query]
  );

  const initialQueryKey = useMemo(() => queryKey, []);

  return useQuery(queryKey, getGifsByParams, {
    initialData: initialQueryKey,
  });
}

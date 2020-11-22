import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchGifs } from "../fetchers";
import { useGifState, useGifDispatch } from "../context/GifContext/hooks";
const getGifsByParams = async (params) => fetchGifs(params);

export default function useSearchGifContext() {
  const { gifs } = useGifState();
  const { setGifs } = useGifDispatch();
  const { query } = useParams();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const refetch = useCallback(async () => {
    setloading(true);
    try {
      setGifs(await getGifsByParams({ q: query }));
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, []);

  useEffect(async () => {
    await refetch();
  }, []);
  return {
    loading,
    gifs,
    error,
    refetch,
  };
}

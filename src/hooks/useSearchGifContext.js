import { useEffect, useState, useCallback } from "react";
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
      setGifs(await getGifsByParams({ q: query, options: { limit: 20 } }));
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, [query, setloading, setError, setGifs]);

  useEffect(async () => {
    await refetch();
  }, [refetch, query]);
  return {
    loading,
    gifs,
    error,
    refetch,
    querySearch: query,
  };
}

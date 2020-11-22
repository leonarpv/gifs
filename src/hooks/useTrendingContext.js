import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, queryCache } from "react-query";
import { KEY_GIFS, KEY_TRENDINGS } from "../utils/constants";
import { fetchTrending } from "../fetchers";

import { useGifState } from "../context/GifContext/hooks";
import { useGifDispatch } from "../context/GifContext/hooks/useGifDispatch";

const getTrendingByParams = async (params) => fetchTrending(params);

export default function useTrendingContext() {
  const { trendings } = useGifState();
  const { setTrendings } = useGifDispatch();
  const { query } = useParams();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(async () => {
    setloading(true);
    try {
      setTrendings(await getTrendingByParams({ q: query }));
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, []);
  return {
    loading,
    trendings,
    error,
  };
}

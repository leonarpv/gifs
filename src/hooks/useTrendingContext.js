import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTrending } from "../fetchers";
import { useGifState, useGifDispatch } from "../context/GifContext/hooks";

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

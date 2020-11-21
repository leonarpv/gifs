import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, queryCache } from "react-query";
import { KEY_GIFS, KEY_TRENDINGS } from "../utils/constants";
import { fetchTrending } from "../fetchers";
import useFavorites from "./useFavorites";
import { useGifState } from "../context/GifContext/hooks";
import { useGifDispatch } from "../context/GifContext/hooks/useGifDispatch";

const getTrendingByParams = async (params) => fetchTrending(params);
export default function useGifContext() {
  const { gifs } = useGifState();
  const { setGifs } = useGifDispatch();
  const { query } = useParams();
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setGifs(await getTrendingByParams({ q: query }));
  }, []);
  return {
    loading,
    gifs,
  };
}

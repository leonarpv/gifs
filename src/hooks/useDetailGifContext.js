import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchGif } from "../fetchers";
import { useGifState, useGifDispatch } from "../context/GifContext/hooks";

const getGif = async (id) => fetchGif(id);

export default function useDetailGifContext() {
  const { id } = useParams();
  const { gif, gifs } = useGifState();
  const cachedGif = gifs.find((singleGif) => singleGif.id === id);

  const { setGif } = useGifDispatch();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const fetchGif = useCallback(async () => {
    setloading(true);
    try {
      setGif(await getGif(id));
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, [id, setGif]);

  useEffect(async () => {
    if (!cachedGif) {
      await fetchGif(id);
    } else {
      setGif(cachedGif);
    }
  }, [id, fetchGif, cachedGif]);

  return {
    loading,
    gif,
    error,
  };
}

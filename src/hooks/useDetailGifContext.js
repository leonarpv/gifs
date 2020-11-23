import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { fetchGif } from "../fetchers";
import { useGifState, useGifDispatch } from "../context/GifContext/hooks";

const getGif = async (id) => fetchGif(id);

export default function useDetailGifContext() {
  const { id } = useParams();
  const { gif } = useGifState();
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
    await fetchGif(id);
  }, [id, fetchGif]);

  return {
    loading,
    gif,
    error,
  };
}

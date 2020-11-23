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
    try {
      setGif(await getGif(id));
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, [id]);

  useEffect(async () => {
    setloading(true);

    await fetchGif(id);
  }, [id]);

  return {
    loading,
    gif,
    error,
  };
}

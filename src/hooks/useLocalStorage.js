import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      const localStorageValue = localStorage.getItem(key);
      if (typeof localStorageValue !== "string") {
        if (initialValue !== undefined) {
          localStorage.setItem(key, JSON.stringify(initialValue));
        }
        return initialValue;
      } else {
        return JSON.parse(localStorageValue ?? "null");
      }
    } catch {
      return initialValue;
    }
  });

  const serializedState = JSON.stringify(state);
  useEffect(() => {
    try {
      localStorage.setItem(key, serializedState);
    } catch {}
  }, [serializedState]);

  return [state, setState];
};

export default useLocalStorage;

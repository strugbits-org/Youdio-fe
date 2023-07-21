import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 300) => {
  const [dbounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return dbounceValue;
};

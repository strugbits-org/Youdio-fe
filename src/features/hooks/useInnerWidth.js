import { useState, useEffect } from "react";

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState();

  const getInnerWidth = () => {
    const windowWidth = window.innerWidth;
    const width = windowWidth < 768 ? "mobileFilters" : "webFilters";
    setInnerWidth(width)
  };

    useEffect(() => {
      getInnerWidth();
  }, []);

  return { innerWidth, getInnerWidth };
};

export default useInnerWidth;

import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({});

  const handleScreenSize = () => {
    console.log("window");
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);
    return window.removeEventListener("resize", handleScreenSize);
  }, []);

  return windowSize;
};

export default useWindowSize;

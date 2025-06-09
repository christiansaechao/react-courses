import { useEffect, useState } from "react";

export function useWindowResize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return {
    height: windowHeight,
    width: windowWidth,
  };
}

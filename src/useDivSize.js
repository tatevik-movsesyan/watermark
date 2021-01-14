import { useState, useEffect } from "react";

export const useDivSize = (element) => {
  const [divSize, setDivSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const elementIsRef = element.hasOwnProperty("current");
    if (!elementIsRef) return;
    setDivSize({
      width: element.current.getBoundingClientRect().width,
      height: element.current.getBoundingClientRect().height,
    });
  }, []);

  return divSize;
};

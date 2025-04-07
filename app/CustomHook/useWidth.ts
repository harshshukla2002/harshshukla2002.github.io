import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState<number | undefined>(0); // Initial state as undefined

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the code is running on the client-side
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Initialize width on component mount
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return width;
};

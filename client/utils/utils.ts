"use client";

import { useState, useEffect } from "react";

// Custom hook to check if the media query matches
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const mediaQueryList = window.matchMedia(query);

      const handleChange = () => {
        setMatches(mediaQueryList.matches);
      };

      setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", handleChange);
      return () => {
        mediaQueryList.removeEventListener("change", handleChange);
      };
    }
  }, [isClient, query]);

  return matches;
};

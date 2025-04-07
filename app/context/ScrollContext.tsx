"use client";

import { createContext, useRef, useContext } from "react";

const ScrollContext = createContext(undefined);

export const ScrollProvider = ({ children }: any) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        aboutRef,
        contactRef,
        experienceRef,
        projectsRef,
        skillsRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

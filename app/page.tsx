"use client";

import { useRef } from "react";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Name from "./sections/Name";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Stats from "./sections/Stats";

export default function Home() {
  return (
    <div>
      <Name />
      <Stats />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

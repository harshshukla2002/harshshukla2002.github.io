import React from "react";
import { LuDot } from "react-icons/lu";

import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import { projects } from "./data.json";
import ProjectCard from "@/app/components/ProjectCard";
import { useScroll } from "@/app/context/ScrollContext";

function Projects() {
  const { theme } = useTheme();
  const width = useWidth();
  const { projectsRef: ref } = useScroll();

  return (
    <section ref={ref} id="projects" className="scroll-mt-5">
      <div
        className="my-5 rounded-2xl mx-1.5 p-10"
        style={{
          background:
            theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
          borderBottom: theme === "dark" ? "1px solid green" : "",
          borderLeft: theme === "dark" ? "1px solid green" : "",
        }}
      >
        <div className="flex flex-row items-center">
          <LuDot size={45} color="green" />
          <p className="text-xl text-green-500">Projects</p>
        </div>
        <p className="text-3xl mb-[5%] ml-3">My Recent Projects</p>
        <div>
          {projects.map((proj) => {
            return (
              <ProjectCard
                key={proj.live}
                title={proj.title}
                duration={proj.duration}
                desc={proj.desc}
                github={proj.github}
                image={proj.image}
                live={proj.live}
                tech={proj.tech}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

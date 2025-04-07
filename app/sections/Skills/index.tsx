import React from "react";

import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import {
  Skills as TechSkills,
  frontend,
  backend,
  database,
  tools,
  others,
} from "./data.json";
import Image from "next/image";
import { useScroll } from "@/app/context/ScrollContext";

function Skills() {
  const { theme } = useTheme();
  const width = useWidth();
  const { skillsRef: ref } = useScroll();

  return (
    <section ref={ref} id="skills" className="scroll-mt-5">
      <div
        className="my-5 rounded-3xl mx-1.5 p-10"
        style={{
          background:
            theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
        }}
      >
        <p className="text-3xl text-center">My Skills</p>
        <div className="flex justify-between gap-15 mt-[2%] items-center flex-wrap">
          <div className="flex gap-7 border-2 rounded-xl p-5 flex-wrap w-[100%] md:w-[43%]">
            {TechSkills.map((skill, index) => {
              return (
                <Image
                  key={index}
                  src={skill}
                  alt="skill-image"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              );
            })}
          </div>

          <ul className="flex flex-col gap-3 w-[100%] md:w-[50%]">
            <li className="list-disc text-lg">
              Frontend:{" "}
              <span className="text-gray-500">{frontend.join(", ")}</span>
            </li>
            <li className="list-disc text-lg">
              Backend:{" "}
              <span className="text-gray-500">{backend.join(", ")}</span>
            </li>
            <li className="list-disc text-lg">
              Database:{" "}
              <span className="text-gray-500">{database.join(", ")}</span>
            </li>
            <li className="list-disc text-lg">
              Tools: <span className="text-gray-500">{tools.join(", ")}</span>
            </li>
            <li className="list-disc text-lg">
              Others: <span className="text-gray-500">{others.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;

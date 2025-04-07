import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  desc: String;
  tech: string[];
  live: string;
  duration: string;
  github: string;
}

function ProjectCard({
  image,
  title,
  desc,
  tech,
  live,
  duration,
  github,
}: ProjectCardProps) {
  const width = useWidth();
  const { theme } = useTheme();

  return (
    <div className="flex flex-row justify-between gap-10 my-[6%] mx-[2%] flex-wrap">
      <Image
        src={image}
        alt={title}
        width={width! * 0.4}
        height={20}
        className="rounded-xl object-contain w-[100%] md:w-[40%]"
      />
      <div className="flex flex-col gap-3 w-[100%] md:w-[50%]">
        <p className="text-2xl text-green-500">{title}</p>
        <p className="text-base text-gray-500">{desc}</p>
        <div>
          <p className="text-base text-red-400 my-[3%]">Project Info</p>
          <div
            className="flex justify-between items-center text-base border-b-1 pb-2 mt-2"
            style={{ borderBottomColor: theme === "light" ? "black" : "white" }}
          >
            <p>Completion Time</p>
            <p>{duration}</p>
          </div>
          <div
            className="flex flex-row gap-3 justify-between items-center text-base border-b-1 pb-2 mt-2 flex-wrap"
            style={{ borderBottomColor: theme === "light" ? "black" : "white" }}
          >
            <p className="w-[40%]">Technologies</p>
            <p>{tech.join(", ")}</p>
          </div>
        </div>

        <div className="flex gap-10">
          <Link
            href={live}
            target="_blank"
            className="underline text-green-500 text-base"
          >
            Live Demo
          </Link>
          <Link href={github} target="_blank" className="underline text-base">
            View In Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

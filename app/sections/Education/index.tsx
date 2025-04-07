import React from "react";
import { IoIosBook } from "react-icons/io";

import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import { education } from "./data.json";
import "./styles.css";

function Education() {
  const { theme } = useTheme();
  const width = useWidth();

  return (
    <div
      className="my-5 rounded-2xl mx-1.5 p-10"
      style={{
        background: theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
      }}
    >
      <div className="flex flex-row gap-3 items-center">
        <IoIosBook size={30} color="green" />
        <p className="text-2xl text-green-500">Education</p>
      </div>
      <div className="m-[4%] md:m-[2%]">
        <ul className="StepProgress">
          {education.map((ed) => {
            return (
              <li
                className={`StepProgress-item ${
                  theme === "light" ? "dark" : ""
                }`}
                key={ed.degree}
              >
                <p className="text-green-500 text-xl">
                  <span className="text-gray-500 text-lg">{ed.duration}:</span>{" "}
                  {ed.from}
                </p>
                <p className="text-lg ml-[1%]">{ed.degree}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Education;

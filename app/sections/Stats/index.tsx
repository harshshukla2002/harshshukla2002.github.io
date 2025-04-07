import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import React from "react";
import { CiCalendar } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { PiCertificateLight } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";

function Stats() {
  const { theme } = useTheme();
  const width = useWidth();

  return (
    <div
      className="my-5 rounded-2xl mx-1.5 flex gap-20 justify-between items-center p-10"
      style={{
        background: theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
        flexWrap: width! > 1000 ? "nowrap" : "wrap",
      }}
    >
      <div className="flex flex-col gap-1">
        <CiCalendar size={32} />
        <p className="text-4xl mt-3 ml-2">1+</p>
        <p className="ml-2 text-xl text-gray-500">Years of experience</p>
      </div>
      <div className="flex flex-col gap-1">
        <RiComputerLine size={32} />
        <p className="text-4xl mt-3 ml-2">10+</p>
        <p className="ml-2 text-xl text-gray-500">Projects Completed</p>
      </div>
      <div className="flex flex-col gap-1">
        <FaCode size={32} />
        <p className="text-4xl mt-3 ml-2">1200+</p>
        <p className="ml-2 text-xl text-gray-500">Hours of DSA</p>
      </div>
      <div className="flex flex-col gap-1">
        <PiCertificateLight size={32} />
        <p className="text-4xl mt-3 ml-2">2+</p>
        <p className="ml-2 text-xl text-gray-500">Certificate Completed</p>
      </div>
    </div>
  );
}

export default Stats;

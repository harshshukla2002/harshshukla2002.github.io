import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import React from "react";
import { GoDeviceDesktop, GoDatabase } from "react-icons/go";
import { MdApi } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { RiFontSizeAi } from "react-icons/ri";

import { data } from "./data.json";
import OfferCard from "@/app/components/OfferCard";
import { useScroll } from "@/app/context/ScrollContext";

function AboutMe() {
  const { theme } = useTheme();
  const width = useWidth();
  const { aboutRef: ref } = useScroll();

  const getIcon = (type: string, size: number) => {
    switch (type) {
      case "desktop":
        return <GoDeviceDesktop size={size} />;
      case "database":
        return <GoDatabase size={size} />;
      case "api":
        return <MdApi size={size} />;
      case "performance":
        return <CgPerformance size={size} />;
      case "ai":
        return <RiFontSizeAi size={size} />;
      default:
        return <GoDeviceDesktop size={size} />;
    }
  };

  return (
    <section ref={ref} id="about" className="scroll-mt-5">
      <div
        className="my-5 rounded-2xl mx-1.5 p-10"
        style={{
          background:
            theme === "light" ? COLORS.lightCardBg : COLORS.darkCardBg,
          flexWrap: width! > 1000 ? "nowrap" : "wrap",
        }}
      >
        <p className="text-2xl text-green-500 text-center">What can I do</p>
        <p
          className="text-3xl text-center font-bold mt-2 mx-auto"
          style={{ width: width! > 800 ? "50%" : "90%" }}
        >
          Designing Solutions{" "}
          <span className="text-gray-500">Customized to Meet Requirements</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 mt-15">
          {data.map((item) => {
            return (
              <OfferCard
                key={item.icon}
                icon={getIcon(item.icon, 30)}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

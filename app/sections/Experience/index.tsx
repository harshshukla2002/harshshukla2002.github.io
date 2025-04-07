import { COLORS } from "@/app/constants/Colors";
import { useTheme } from "@/app/context/theme";
import { useWidth } from "@/app/CustomHook/useWidth";
import React, { useState } from "react";
import { LuDot } from "react-icons/lu";

import { Companies, CompanyDetails } from "./data.json";
import CompanyCard from "@/app/components/CompanyCard";
import CompanyDetailsCard from "@/app/components/CompanyDetailsCard";
import { useScroll } from "@/app/context/ScrollContext";

function Experience() {
  const { theme } = useTheme();
  const width = useWidth();
  const [selectedCompany, setSelectedCompany] = useState("Kazam");
  const { experienceRef: ref } = useScroll();

  return (
    <section ref={ref} id="experience" className="scroll-mt-5">
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
          <p className="text-xl text-green-500">Experience</p>
        </div>
        <p className="text-2xl lg:text-4xl md:text-3xl mx-5 w-[90%] md:w-[60%] lg:w-[50%]">
          1+ years of passion for programming techniques
        </p>
        <div className="flex flex-row justify-around gap-20 mt-5 flex-wrap">
          <div className="w-[100%] md:w-[43%]">
            {Companies.map((company) => {
              return (
                <CompanyCard
                  key={company.company}
                  image={company.image}
                  company={company.company}
                  duration={company.duration}
                  onClick={setSelectedCompany}
                />
              );
            })}
          </div>
          <div className="w-[100%] md:w-[50%]">
            {CompanyDetails.map((detail) => {
              if (detail.company === selectedCompany) {
                return (
                  <CompanyDetailsCard
                    key={detail.position}
                    jobDescription={detail["job-description"]}
                    position={detail.position}
                    technologies={detail.technologies}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

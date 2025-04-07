import React from "react";
import { LuDot } from "react-icons/lu";

interface CompanyDetailsCardProps {
  position: string;
  jobDescription: string[];
  technologies: string[];
}

function CompanyDetailsCard({
  jobDescription,
  position,
  technologies,
}: CompanyDetailsCardProps) {
  return (
    <div>
      <p className="text-2xl text-green-500">{position}</p>
      <div className="my-5 text-lg">
        {jobDescription.map((job) => {
          return (
            <div key={job} className="flex gap-2 items-center my-3">
              <LuDot size={60} />
              <p>{job}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 flex-wrap">
        {technologies.map((tech) => {
          return (
            <div key={tech} className="border-2 px-2 py-1 rounded">
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyDetailsCard;

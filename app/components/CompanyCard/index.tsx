import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const ANUGRAHA = "Anugraha Exceed Incorporated";

interface CompanyCardProps {
  image: string;
  company: string;
  duration: string;
  onClick: Dispatch<SetStateAction<string>>;
}

function CompanyCard({ image, company, duration, onClick }: CompanyCardProps) {
  return (
    <div
      className="flex gap-5 items-center border-2 p-3 rounded-2xl m-5 cursor-pointer flex-col md:flex-row"
      onClick={() => onClick(company)}
    >
      <Image
        src={image}
        alt={company}
        width={company === ANUGRAHA ? 70 : 90}
        height={company === ANUGRAHA ? 70 : 90}
      />
      <div className="text-center sm:text-left">
        <p className="text-xl">{company}</p>
        <p className="text-gray-500">{duration}</p>
      </div>
    </div>
  );
}

export default CompanyCard;

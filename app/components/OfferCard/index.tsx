import React from "react";

interface OfferCardProps {
  title: string;
  icon: import("react").ReactElement;
  description: string;
}

function OfferCard({ title, icon, description }: OfferCardProps) {
  return (
    <div className="flex flex-col gap-3 border-2 rounded-2xl p-4 h-[100%]">
      {icon}
      <p className="text-2xl">{title}</p>
      <p className="text-gray-500 text-lg">{description}</p>
    </div>
  );
}

export default OfferCard;

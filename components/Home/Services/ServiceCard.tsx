// components/Home/Services/ServiceCard.tsx
import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div
      className="bg-[#0c1c16] border border-[#00ff9c22] rounded-xl p-8 flex flex-col items-start 
      transition-all duration-500 hover:border-[#00ff9c55] hover:shadow-[0_0_25px_#00ff9c33] 
      hover:-translate-y-2 group h-full min-h-[320px]"
    >
      {/* Icon bubble */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#022b1f] to-[#011a13] 
        flex items-center justify-center shadow-[0_0_10px_#00ff9c1a] 
        group-hover:shadow-[0_0_25px_#00ff9c55] transition-all duration-500"
      >
        <Image
          src={icon}
          alt="service-icon"
          width={45}
          height={45}
          className="object-contain opacity-90 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Title */}
      <h1
        className="mt-6 text-xl md:text-2xl font-bold text-white 
        group-hover:text-[#00ff9c] transition-colors duration-300"
      >
        {name}
      </h1>

      {/* Description */}
      <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

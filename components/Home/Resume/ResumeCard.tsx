// components/Home/Resume/ResumeCard.tsx
import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  delay?: number; // ms
};

const ResumeCard = ({ Icon, role, date, delay = 0 }: Props) => {
  return (
    // AOS attributes (fade-up) + data-aos-delay untuk stagger
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay={delay}
      className="w-full max-w-[750px"
      // Note: keep wrapper width controlled by parent; card itself has padding
    >
      <div className="flex items-start gap-5 p-4 sm:p-6 bg-[#07140f] rounded-xl shadow-md hover:shadow-[0_10px_30px_rgba(0,255,156,0.08)] transition-all duration-300 group">
        {/* Icon bubble with softened neon & hover pulse */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#022b1f] to-[#011a13] flex items-center justify-center shadow-[0_0_10px_#00ff9c1a] transition-all duration-500 hover:shadow-[0_0_25px_#00ff9c55] hover:scale-105">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#5effb7] opacity-90 transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {date && (
            <h2 className="mb-2 inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm sm:text-base font-semibold">
              {date}
            </h2>
          )}
          <h3 className="text-white text-lg sm:text-xl font-semibold mt-2 group-hover:text-[#00ff9c] transition-colors duration-200">
            {role}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;

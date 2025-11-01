// components/Home/Resume/Resume.tsx
import React from "react";
import ResumeCard from "./ResumeCard";
import { HiAcademicCap } from "react-icons/hi";

// data education — mudah di-extend tanpa ubah struktur render
const EDUCATION = [
  { id: 1, date: "2017", role: "Paket A - Elementary School Equivalent" },
  {
    id: 2,
    date: "2019",
    role: "Junior High School at SMP IT Daarul Hikmah Boarding School",
  },
  {
    id: 3,
    date: "2020",
    role: "Senior High School at SMAN Islam As-Shofi",
  },
];

const Resume = () => {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My <span className="text-[#00ff9c]">Education</span>
        </h1>

        {/* Cards — kita map dan beri delay bertahap */}
        <div className="mt-10 flex flex-col items-center space-y-6 w-full">
          {EDUCATION.map((item, i) => (
            <ResumeCard
              key={item.id}
              Icon={HiAcademicCap}
              role={item.role}
              date={item.date}
              delay={i * 150} // delay in ms: 0, 150, 300, ...
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

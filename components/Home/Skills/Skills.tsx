"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiAdobeillustrator,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "HTML Basic", icon: <SiHtml5 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "FIGMA", icon: <FaFigma /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
];

const Skills = () => {
  return (
    <section id="skills" className="text-white pt-16 pb-24 px-4">
      {/* Title */}
      <h1
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
        data-aos="fade-up"
      >
        a little of My <span className="text-[#00ff9c]">Skills</span>
      </h1>

      {/* Skill grid */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-[1100px] mx-auto">
        {skills.map((skill, i) => (
          <Tilt
            key={skill.name}
            scale={1.08}
            transitionSpeed={400}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
          >
            <div
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="bg-[#0c1c16] border border-[#00ff9c22] rounded-2xl 
              w-36 h-44 sm:w-40 sm:h-48 flex flex-col items-center justify-center 
              text-center transition-all duration-500 
              hover:border-[#00ff9c66] hover:shadow-[0_0_25px_#00ff9c33] 
              hover:-translate-y-2"
            >
              <div
                className="text-5xl mb-3 text-[#00ff9cbb] 
                drop-shadow-[0_0_10px_#00ff9c66] 
                group-hover:scale-110 transition-transform duration-300"
              >
                {skill.icon}
              </div>
              <p className="text-[#d9fbe5] font-medium text-sm sm:text-base">
                {skill.name}
              </p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;

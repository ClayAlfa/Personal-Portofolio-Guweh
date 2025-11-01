// components/Home/Projects/Projects.tsx
import Image from "next/image";
import React from "react";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      img: "/images/p1.jpg",
      title: "Web Kelas - Gabut Project",
      category: "Web Development, reactjs, firebase",
      href: "https://stitek-23.vercel.app/",
    },
    {
      id: 2,
      img: "/images/p2.jpg",
      title: "Branding Design Thinking Project UI/UX",
      category: "UI/UX, Design, Branding",
      href: "https://drive.google.com/file/d/1xoWChUSJUlgW-QKIu9cHgFERNpJDlneo/view?usp=sharing",
    },
    {
      id: 3,
      img: "/images/p3.jpg",
      title: "Crud Laravel Basic Application",
      category: "Web Development, Laravel, PHP",
      href: "https://github.com/ClayAlfa/crud-laravel-11-Tugas-PBF.git",
    },
  ];

  return (
    <section id="projects" className="pt-16 pb-16 px-4 sm:px-6 md:px-8">
      <h2
        data-aos="fade-down"
        data-aos-anchor-placement="top-center"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        A small selection of recent <br />
        <span className="text-[#00ff9c]">projects</span>
      </h2>

      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-16 justify-items-center">
        {projectList.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.title}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            data-aos-anchor-placement="top-bottom"
            data-aos-once="true"
            className="w-full max-w-[600px] group transform transition-all duration-500"
          >
            {/* Project Card */}
            <div className="relative w-full overflow-hidden rounded-3xl shadow-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(0,255,156,0.2)]">
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#00ff9c]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image */}
              <Image
                src={p.img}
                alt={p.title}
                width={1920}
                height={1080}
                className="rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white text-center group-hover:text-[#00ff9c] transition-colors duration-300">
              {p.title}
            </h3>
            <p className="pt-2 font-medium text-white/80 text-center">
              {p.category}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

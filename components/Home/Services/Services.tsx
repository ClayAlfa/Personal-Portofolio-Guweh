// components/Home/Services/Services.tsx
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "/images/s1.png",
      name: "UI and UX",
      description:
        "Design intuitive, efficient, and user-centric digital interfaces for satisfying experiences.",
      delay: 0,
    },
    {
      id: 2,
      icon: "/images/s2.png",
      name: "Web Development",
      description:
        "Building and implementing efficient and responsive web solutions with a focus on functionality and user experience.",
      delay: 100,
    },
    {
      id: 3,
      icon: "/images/s3.png",
      name: "Design & Creative",
      description:
        "Creating aesthetically appealing visual and creative designs while ensuring an efficient and easy-to-use interface.",
      delay: 200,
    },
    {
      id: 4,
      icon: "/images/s4.png",
      name: "Development",
      description:
        "Develop and maintain robust code and systems to deliver functional interfaces and superior user experiences.",
      delay: 300,
    },
  ];

  return (
    <section id="services" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-[980px] mx-auto text-center" data-aos="fade-up">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Collaborate with brands <br />
          and agencies to create <br />
          impactful results <br />
          <span className="text-[#00ff9c]">– Kerjaan Gabut –</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto mt-12">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                     gap-y-10 gap-x-8 items-stretch"
        >
          {services.map((s) => (
            <div
              key={s.id}
              data-aos="fade-up"
              data-aos-delay={s.delay}
              className="h-full"
            >
              <ServiceCard
                icon={s.icon}
                name={s.name}
                description={s.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

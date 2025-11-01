// components/Home/Hero/Hero.tsx
"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground"; // sesuaikan jika path berbeda

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Particles (optional) */}
      {/* Jika ParticlesHero menyebabkan masalah sementara, kamu bisa komentar baris ini */}
      <ParticlesHero />

      {/* soft radial glow (use tailwind blur class to be safe) */}
      <div
        aria-hidden
        className="absolute -top-16 sm:-top-28 left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full blur-3xl pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,156,0.22) 0%, rgba(0,255,156,0.08) 30%, transparent 60%)",
          zIndex: 5,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Avatar with neon border and subtle pulse (using animate-pulse) */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="relative flex items-center justify-center"
        >
          <div className="rounded-full border-[6px] border-[#00ff9c] shadow-[0_0_25px_#00ff9c66] overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={260}
              height={260}
              className="object-cover w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full"
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="250"
          className="mt-8 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-wide"
        >
          Creating web products, <br />
          <span className="text-[#00ff9c]">brands</span>, design, <br /> and{" "}
          <span className="text-[#00ff9c]">experiences.</span>
        </h1>

        {/* Subtext with Typewriter */}
        <h2
          data-aos="fade-up"
          data-aos-delay="450"
          className="mt-4 text-sm sm:text-lg text-white/80"
        >
          Hi! I'm AlfaOps — a passionate{" "}
          <span className="text-[#00ff9c] font-semibold">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Web Developer",
                  "Developer Gabut",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h2>

        {/* CTA Button (simple) */}
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-8 px-8 sm:px-10 py-3 rounded-full bg-[#00e884] hover:bg-[#00d87b] text-black font-semibold flex items-center gap-2 transition-all duration-300 shadow-md"
        >
          See My Work <BsArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

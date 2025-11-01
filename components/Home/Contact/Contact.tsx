// components/Home/Contact/Contact.tsx
"use client";
import React from "react";
import Link from "next/link";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  // ganti link berikut dengan milikmu ketika siap
  const INSTAGRAM = "https://www.instagram.com/_alfalost/";
  const GITHUB = "https://github.com/ClayAlfa";
  const LINKEDIN = "https://www.linkedin.com/in/alfarabi-bravo-650a20314";
  const MAILTO = "mailto:alfarabibravo8@gmail.com";

  return (
    <section id="contact" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Heading + contact details */}
        <div className="text-white" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Terus terhubung dan mari kita buat sesuatu yang luar biasa bersama!
          </h2>
          <p className="mt-6 text-white/70 max-w-[560px]">
            Kunjungi saya di platform berikut atau kirim email langsung. Saya
            senang mendengar dari Anda!
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] shadow-[0_0_12px_#00ff9c22]">
                <BiPhone className="w-6 h-6 text-[#00ff9c]" />
              </div>
              <a
                href="tel: +62 858 2822 0032"
                className="text-white font-medium"
              >
                +62 858 2822 0032
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] shadow-[0_0_12px_#00ff9c22]">
                <BiEnvelope className="w-6 h-6 text-[#00ff9c]" />
              </div>
              <a href={MAILTO} className="text-white font-medium">
                alfarabibravo8@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] shadow-[0_0_12px_#00ff9c22]">
                <BiMap className="w-6 h-6 text-[#00ff9c]" />
              </div>
              <p className="text-white font-medium">
                Bontang, Kalimantan Timur. Indonesia
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-4">
            <Link
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] hover:bg-[#013226] transition-colors shadow-[0_0_8px_#00ff9c22]">
                <FaInstagram className="text-[#00ff9c] w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
            </Link>

            <Link
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] hover:bg-[#013226] transition-colors shadow-[0_0_8px_#00ff9c22]">
                <FaGithub className="text-[#00ff9c] w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
            </Link>

            <Link
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#022b1f] hover:bg-[#013226] transition-colors shadow-[0_0_8px_#00ff9c22]">
                <FaLinkedin className="text-[#00ff9c] w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right: simple CTA card (replaces the full form) */}
        <div
          className="bg-[#07140f] rounded-xl p-8 shadow-md border border-[#00ff9c11] flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Let's connect</h3>
            <p className="mt-3 text-white/70">
              If you'd like to work together or ask something quick, click the
              button below to open your email client.
            </p>
          </div>

          <div className="mt-6">
            <a
              href={MAILTO}
              className="inline-block px-8 py-3 rounded-full bg-[#00e884] hover:bg-[#00d87b] text-black font-semibold shadow-[0_8px_30px_#00ff9c33] transition-all duration-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

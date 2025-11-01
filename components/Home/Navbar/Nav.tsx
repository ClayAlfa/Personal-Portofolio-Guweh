"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "@/constant/constant";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY >= 90);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed w-full z-[10000] transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1f16e0] backdrop-blur-md shadow-[0_0_25px_rgba(0,255,156,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[92%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#00ff9c] rounded-full flex items-center justify-center shadow-[0_0_12px_#00ff9c88]">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold tracking-wide">
            AlfaOps
          </h1>
        </div>

        {/* Nav Links (desktop only) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {Array.isArray(NavLinks) &&
            NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base text-white/90 hover:text-[#00ff9c] font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* ✨ Interactive Download CV Button (desktop only) */}
          <a
            href="/CV_AlfaOps.pdf"
            download
            className="hidden lg:inline-flex relative overflow-hidden group px-8 py-3.5 rounded-lg bg-[#00d87b] text-black font-semibold items-center space-x-2 transition-all duration-300 shadow-[0_0_20px_#00ff9c33] hover:shadow-[0_0_25px_#00ff9c99] hover:scale-[1.03] active:scale-95"
          >
            {/* background glow layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#00ff9c] via-[#00e884] to-[#00d87b] opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
            {/* icon & text */}
            <BiDownload className="w-5 h-5 z-10 group-hover:animate-bounce" />
            <span className="z-10">Download CV</span>
          </a>

          {/* Mobile Menu (burger) */}
          <button
            aria-label="Open menu"
            onClick={openNav}
            className="lg:hidden text-[#00ff9c] p-1"
            type="button"
          >
            <HiBars3BottomRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;

// components/Home/Navbar/ResponsiveNav.tsx
"use client";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll untuk efek background di nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-[#0b1f16e0] backdrop-blur-md shadow-[0_0_25px_rgba(0,255,156,0.1)]"
          : "bg-transparent"
      }`}
    >
      {/* Navbar desktop & mobile toggle */}
      <Nav openNav={openNavHandler} />

      {/* Mobile nav overlay */}
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </header>
  );
};

export default ResponsiveNav;

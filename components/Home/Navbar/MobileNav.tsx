// components/Home/Navbar/MobileNav.tsx
"use client";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  // lock body scroll when menu open
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNav]);

  return (
    <div>
      {/* overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 z-[10000] transition-opacity duration-400 ${
          showNav
            ? "opacity-60 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-[#02130c] backdrop-blur-sm`}
      />

      {/* panel */}
      <aside
        className={`fixed right-0 top-0 z-[10001] h-full w-[84%] sm:w-[68%] max-w-[420px] transform transition-transform duration-400
          ${showNav ? "translate-x-0" : "translate-x-full"}
          bg-[#07140f]/95 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.6)]`}
        role="dialog"
        aria-modal="true"
      >
        {/* header inside panel */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#00ff9c11]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#00ff9c] flex items-center justify-center shadow-[0_0_10px_#00ff9c55]">
              <span className="text-black font-bold">/</span>
            </div>
            <div className="text-white font-semibold">Menu</div>
          </div>

          <button
            aria-label="Close menu"
            onClick={closeNav}
            className="text-[#00ff9c] hover:text-[#5effb7] p-2"
          >
            <CgClose className="w-6 h-6" />
          </button>
        </div>

        {/* menu content */}
        <nav className="px-6 py-8 flex flex-col gap-6">
          {Array.isArray(NavLinks) &&
            NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={closeNav}
                className="block text-lg sm:text-xl font-medium text-white/90 hover:text-[#00ff9c] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

          {/* small actions */}
          <div className="mt-4 border-t border-[#00ff9c11] pt-6 flex flex-col gap-3">
            {/* Download CV: anchor with download attribute and same styling as desktop */}
            <a
              href="/CV_AlfaOps.pdf"
              download
              onClick={closeNav}
              className="mt-2 mx-0 inline-flex items-center justify-center rounded-md bg-[#00ff9c] text-black font-semibold py-3 px-4 transition-all duration-300 shadow-[0_0_20px_#00ff9c33] hover:shadow-[0_0_25px_#00ff9c99] hover:scale-[1.03] active:scale-95 w-full text-center"
            >
              Download CV
            </a>
          </div>
        </nav>

        {/* footer note */}
        <div className="mt-auto px-6 py-6 text-sm text-white/60 border-t border-[#00ff9c11]">
          © {new Date().getFullYear()} AlfaOps
        </div>
      </aside>
    </div>
  );
};

export default MobileNav;

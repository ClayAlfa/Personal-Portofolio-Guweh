"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 700, // durasi animasi
      once: true, // hanya jalan sekali per elemen
      easing: "ease-out-cubic",
      offset: 80, // jarak mulai animasi dari viewport
    });
  }, []);
  return null;
}

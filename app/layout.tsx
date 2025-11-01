// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import AosInit from "@/components/Helper/AosInit"; // <- inisialisasi AOS global

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlfaOps Portfolio | Developer Gabut",
  description: "Portfolio built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Background gradient dengan nuansa hijau neon */}
      <body
        className={`${font.className} antialiased bg-gradient-to-b from-[#0b1f16] via-[#07140f] to-[#020a07] text-white`}
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Subtle neon glow overlay */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(0,255,156,0.25) 0%, rgba(0,255,156,0.08) 35%, transparent 70%)",
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <ResponsiveNav />

          {/* init AOS (client-only) */}
          <AosInit />

          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { AuroraParallax } from "@/components/AuroraParallax";
import { CursorTracker } from "@/components/CursorTracker";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jahaan Pardhanani — Builder, Composer, Leader",
  description:
    "Portfolio of Jahaan Pardhanani — high school freshman, FRC Software Lead, classically trained pianist, producer, and band leader. Sage Hill School, Class of 2029.",
  authors: [{ name: "Jahaan Pardhanani" }],
  openGraph: {
    title: "Jahaan Pardhanani — Builder, Composer, Leader",
    description:
      "FRC Software Lead, MTAC Level 9 pianist, AI/ML student, band leader. Sage Hill School, Class of 2029.",
    type: "profile",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <AuroraParallax />
        <div className="grid-base" aria-hidden />
        <div className="grid-glow" aria-hidden />
        <CursorTracker />
        <CursorSpotlight />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

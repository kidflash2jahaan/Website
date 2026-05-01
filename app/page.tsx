import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Engineering } from "@/components/Engineering";
import { Music } from "@/components/Music";
import { Leadership } from "@/components/Leadership";
import { Academics } from "@/components/Academics";
import { Athletics } from "@/components/Athletics";
import { Vision } from "@/components/Vision";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <StatsStrip />
        <Engineering />
        <Music />
        <Leadership />
        <Academics />
        <Athletics />
        <Vision />
        <Footer />
      </main>
    </>
  );
}

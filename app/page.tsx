// page.tsx
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Work from "@/app/components/Work";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Lanyard from "@/app/components/Lanyard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
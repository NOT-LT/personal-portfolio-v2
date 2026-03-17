import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Work from "@/app/components/Work";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import {
  getHeroContent,
  getAboutContent,
  getWorkContent,
  getProjectsContent,
  getContactContent,
} from "@/lib/content";

export default function Home() {
  const hero = getHeroContent();
  const about = getAboutContent();
  const work = getWorkContent();
  const projects = getProjectsContent();
  const contact = getContactContent();

  return (
    <>
      <Navbar />
      <Hero content={hero} />
      <About content={about} />
      <Work content={work} />
      <Projects content={projects} />
      <Contact content={contact} />
    </>
  );
}

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="container mx-auto max-w-6xl">
        <Hero />
        <Projects />
        <Skills />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}

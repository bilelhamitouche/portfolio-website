import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import AnimatedSection from "@/components/animated-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen bg-background text-foreground">
      <AnimatedSection animation="fade-up" delay={100}>
        <Navbar />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={200}>
        <Hero />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Contact />
      </AnimatedSection>
    </div>
  );
}

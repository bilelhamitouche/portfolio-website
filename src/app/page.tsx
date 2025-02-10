import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="container mx-auto max-w-6xl">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

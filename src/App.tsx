import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

type Props = {};

function App({}: Props) {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Navbar />
      <main className="py-28">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

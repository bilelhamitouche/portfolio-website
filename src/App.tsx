import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type Props = {};

function App({}: Props) {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <Navbar />
      <main className="py-28">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;

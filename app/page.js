import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="text-white">
      <Hero />
      <About />
      <Gallery />
    </div>
  );
}

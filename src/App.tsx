import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { TechStack } from "./components/TechStack";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030711] text-slate-100 overflow-hidden">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-400 focus:px-3 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

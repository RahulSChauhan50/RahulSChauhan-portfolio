import { useRef } from "react";
import { Footer } from "./components/main/footer";
import { Navbar } from "./components/main/navbar";
import { StarsCanvas } from "./components/main/star-background";
import { Encryption } from "./components/main/encryption";
import { Hero } from "./components/main/hero";
import { Projects } from "./components/main/projects";
import { Skills } from "./components/main/skills";
import { Blogs } from "./components/main/blogs";
import { BlackHole } from "./components/main/blackHole";
import "./App.css";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={
        "bg-[#030014] overflow-y-scroll overflow-x-hidden inter-font flex flex-col flex-1 scroll-smooth scrollbar-hidden"
      }
      ref={scrollRef}
    >
      <StarsCanvas />
      <Navbar />
      <BlackHole scrollRef={scrollRef} />
      <main className="w-full z-10">
        <div className="mx-auto max-w-[1440px] px-6 py-6 lg:px-10 flex flex-col gap-28">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
          <Blogs />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

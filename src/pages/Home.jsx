import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import FluidBackground from "../components/FluidBackground";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const [blobs, setBlobs] = useState([
    { x: 200, y: 200 },
    { x: 800, y: 400 },
  ]);

  useEffect(() => {
    const move = (e) => {
      setBlobs((prev) =>
        prev.map((b, i) => ({
          x: b.x + (e.clientX - b.x) * (0.02 + i * 0.01),
          y: b.y + (e.clientY - b.y) * (0.02 + i * 0.01),
        }))
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 
      ${darkMode ? "text-[#FFF2EF]" : "text-[#1A2A4F]"}`}
    >
      <FluidBackground dark={darkMode} />

      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-8 py-4 shadow-sm fixed top-0 left-0 w-full backdrop-blur-md z-50
        ${darkMode ? "bg-[#1A2A4F]/80" : "bg-[#FFF2EF]/80"}`}
      >
        <h1 className="text-2xl font-bold text-[#F7A5A5]">Twinky Casidsid</h1>

        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#F7A5A5] transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-[#FFDBB6] transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center min-h-screen px-6 pt-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-[#F7A5A5]">Twinky</span>
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mb-6">
          A developer from Cebu City. I create clean, efficient, and
          human-centered systems using IoT, AI, and full-stack development.
        </p>

        <a
          href="#projects"
          className="bg-[#F7A5A5] text-[#1A2A4F] px-6 py-3 rounded-md font-semibold 
          hover:scale-105 transition-transform"
        >
          View My Work
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className={`py-24 px-6 text-center 
        ${darkMode ? "bg-[#1A2A4F]" : "bg-[#FFDBB6]"}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#F7A5A5]">About Me</h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I’m a BSIT student at the University of Cebu Lapu-Lapu and Mandaue.
          Skilled in C#, Java, React, Python, and IoT. I turn real problems into
          usable and reliable software.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#F7A5A5]">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "WisEnergy",
              desc: "IoT + AI monitoring system for households in Cebu.",
            },
            {
              title: "ScholarTrack",
              desc: "A C# library attendance tracking app for scholars.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all
              ${darkMode ? "bg-[#1A2A4F]" : "bg-[#FFDBB6]"}`}
            >
              <h3 className="text-xl font-semibold text-[#F7A5A5] mb-2">
                {p.title}
              </h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`py-24 px-6 text-center 
        ${darkMode ? "bg-[#1A2A4F]" : "bg-[#FFDBB6]"}`}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#F7A5A5]">Get in Touch</h2>

        <p className="text-lg mb-6">
          Let’s collaborate or talk about your next project.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            className="hover:text-[#F7A5A5]"
            href="mailto:twinkycasidsid@example.com"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://github.com/twinkycasidsid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F7A5A5]"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/in/twinkycasidsid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F7A5A5]"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#F7A5A5] text-[#1A2A4F]">
        © {new Date().getFullYear()} Twinky Casidsid — All Rights Reserved.
      </footer>
    </div>
  );
};

import React, { useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-green-600">Twinky Casidsid</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col justify-center items-center text-center min-h-screen px-6 pt-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-green-600">Twinky</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          A passionate developer from Cebu City. I build clean, efficient, and
          human-centered software—from IoT and AI-powered apps to full-stack
          systems.
        </p>
        <a
          href="#projects"
          className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 text-center bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-green-600">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          I’m a BSIT student at the University of Cebu Lapu-Lapu and Mandaue.
          Skilled in C#, Java, React, Python, and IoT development. I enjoy
          transforming real-world problems into reliable software solutions with
          a focus on usability and performance.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-600">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "WisEnergy",
              desc: "IoT + AI energy monitoring system for households in Cebu.",
            },

            {
              title: "ScholarTrack",
              desc: "ScholarTrack is a C# desktop application designed to efficiently manage and track scholars’ library attendance. It provides an automated way to record time-ins and time-outs, replacing the old paper-based system that was prone to loss and dishonesty.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 text-center bg-gray-50 dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-green-600">Get in Touch</h2>
        <p className="text-lg mb-6">
          Let’s collaborate or discuss your next project!
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:twinkycasidsid@example.com"
            className="hover:text-green-600"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/twinkycasidsid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/twinkycasidsid"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-600"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-green-600 text-white">
        © {new Date().getFullYear()} Twinky Casidsid — All Rights Reserved.
      </footer>
    </div>
  );
};

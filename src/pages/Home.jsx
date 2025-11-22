import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import GlitterBackground from "../components/GlitterBackground";
import SimpleGradientBackground from "../components/SimpleGradientBackground";
import Navbar from "../components/Navbar";
import winxLogo from "/winx.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-16 relative text-[#725a72] font-[PT Serif]">
      <SimpleGradientBackground />
      <GlitterBackground />

      <Navbar />

      {/* PROFILE */}
      <div
        className="mt-40 w-56 h-56 rounded-full overflow-hidden border-[6px] border-[#ffffff] relative z-10"
        style={{ clipPath: "ellipse(50% 55% at 50% 50%)" }}
      >
        <img src="/twinky.png" className="w-full h-full object-cover" />
      </div>

      <h1
        className="mt-6 text-7xl text-[#6953a6] z-10"
        style={{ fontFamily: "Alex Brush" }}
      >
        Twinky Casidsid
      </h1>

      <p className="text-[#6953a6] -mt-4 text-lg z-10 font-bold">
        Aspiring Software Developer
      </p>

      <div className="flex space-x-6 mt-6 z-10 text-[#ffffff]">
        <a
          href="mailto:twinky@example.com"
          className="hover:scale-110 transition"
        >
          <Mail size={32} />
        </a>
        <a
          href="https://github.com/twinkycasidsid"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Github size={32} />
        </a>
        <a
          href="https://linkedin.com/in/twinkycasidsid"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  );
};

export default Home;

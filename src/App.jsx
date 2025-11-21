import SimpleGradientBackground from "./components/SimpleGradientBackground";
import GlitterBackground from "./components/GlitterBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen font-[PT Serif] text-[#725a72]">
      {/* Backgrounds apply to all pages */}
      <SimpleGradientBackground />
      <GlitterBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App; // <-- THIS IS REQUIRED

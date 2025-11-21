import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen pt-40 pb-20 z-10 text-[#725a72] font-[PT Serif]">
      <Navbar />

      <h1 className="text-5xl font-bold text-[#6953a6] text-center mb-16">
        My Projects
      </h1>

     <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto px-8">

  <ProjectCard
    image="/wisenergy.png"
    label="Capstone Project"
    title="WisEnergy"
    description="WisEnergy is a mobile and IoT-powered system designed to help households monitor real-time appliance energy usage. It combines an IoT Device, AI-driven analysis, and a clean mobile app interface to provide insights, alerts, and budget tracking for users in Mandaue and Lapu-Lapu City."
    role="Project Manager, UI/UX Designer, Front-end Developer"
    tags={["React Native", "ESP32", "Firebase", "IoT", "FastAPI", "AI/Prophet"]}
    link="https://wisenergy.site"    
  />

</div>

    </div>
  );
}

import Navbar from "../components/Navbar";
import { Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen w-full pt-32 pb-20 px-6 text-[#725a72] relative">
      <Navbar />

      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-center text-5xl font-bold mb-12 tracking-tight">
          About Me
        </h1>

        {/* About Section */}
        <section className="mb-20 space-y-4 text-center">
          <h2 className="text-3xl font-bold">Who I Am</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            I am Twinky Casidsid, an aspiring software developer who enjoys building
            clean and user-centered applications. I like blending creativity and
            technology to craft simple and intuitive digital experiences, while
            continuously improving my skills.
          </p>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
              <h3 className="text-xl font-semibold">BS Information Technology</h3>
              <p className="text-md mt-1">University of Cebu Lapu-Lapu and Mandaue</p>
              <p className="text-sm opacity-70">2021 – Present</p>

              <ul className="mt-4 text-sm opacity-80 space-y-1">
                <li>Consistent Dean’s Lister</li>
                <li>Academic Scholar</li>
                <li>PSITS-UCLM 2nd-Year Representative (2022)</li>
                <li>IBPAP Hackathon 2025 Participant</li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
              <h3 className="text-xl font-semibold">Senior High School — STEM</h3>
              <p className="text-sm opacity-70">High Honors, 2021</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
              <h3 className="text-xl font-semibold mb-4">Hard Skills</h3>
              <ul className="space-y-1 opacity-80 text-sm">
                <li>Programming</li>
                <li>Web Development</li>
                <li>Database Management</li>
                <li>Microsoft Office Suite</li>
                <li>Video Editing</li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="space-y-1 opacity-80 text-sm">
                <li>Leadership</li>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Time Management</li>
                <li>Team Collaboration</li>
                <li>Adaptability</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
            <ul className="space-y-2 opacity-80 text-sm">
              <li>IBM SkillsBuild – Working in a Digital World (2025)</li>
              <li>IBM SkillsBuild – Getting Started with AI (2025)</li>
              <li>IBM SkillsBuild – AI Fundamentals (2025)</li>
              <li>Social Media Management Course (2025)</li>
            </ul>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
          <div className="bg-white/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 border border-white/40">
            <ul className="space-y-2 opacity-80 text-sm">
              <li>3rd Place – Application Development Competition (2023)</li>
              <li>Academic Scholar & Dean’s Lister</li>
              <li>High Honors in Senior High School</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

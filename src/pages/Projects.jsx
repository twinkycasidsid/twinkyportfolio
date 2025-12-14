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
          tags={[
            "React Native",
            "ESP32",
            "Firebase",
            "IoT",
            "FastAPI",
            "AI/Prophet",
          ]}
          link="https://wisenergy.site"
        />

        <ProjectCard
          image="/openheart.png"
          label="Solo Project"
          title="Open Heart"
          description="Open Heart is an emotional-support chatbot built with Supabase Edge Functions and Gemini. It adapts to different moods, speaks naturally in Tagalog or Bisaya, and delivers warm, human-like conversations without repeating or robotic tone."
          role="Supabase, Gemini API, React, Bootstrap"
          tags={[
            "React Native",
            "ESP32",
            "Firebase",
            "IoT",
            "FastAPI",
            "AI/Prophet",
          ]}
          link="https://twinkycasidsid.github.io/open-heart/"
        />

        <ProjectCard
          image="/scholartrack.jpg"
          label="Personal Project"
          title="ScholarTrack"
          description="ScholarTrack is a C# desktop application that automates library attendance for scholars. It replaces unreliable paper logs with accurate time-in/time-out tracking, real-time monitoring, and clear reporting for staff and administrators."
          role="C# Developer, UI Designer"
          tags={["C#", ".NET WinForms", "Microsoft Access", "Crystal Reports"]}
          link="https://twinkycasidsid.github.io/scholartrack/"
        />

        <ProjectCard
          image="/codeygo.png"
          label="Hackathon Project"
          title="CodeyGo"
          description="CodeyGo is a gamified learning app that teaches coding and digital literacy through story-driven worlds, levels, and interactive minigames. It works offline for students with limited internet access, with optional AI features for adaptive difficulty and personalized feedback."
          role="UI/UX Designer, Product Designer"
          tags={[
            "Gamification",
            "Mobile App",
            "Educational Tech",
            "Offline-First",
            "AI-Enhanced Learning",
          ]}
          link=""
        />

        <ProjectCard
          image="/taskcove-logo.png"
          label="Personal Project"
          title="TaskCove"
          description="TaskCove is a productivity-focused mobile application designed to help users manage tasks, focus sessions, and daily goals in one place. It integrates a Pomodoro-based workflow, clean UI, and Supabase authentication, with plans for AI-assisted task insights and reminders."
          role="Mobile Developer, UI/UX Designer"
          tags={[
            "Productivity",
            "Mobile App",
            "React Native",
            "Expo",
            "Supabase",
            "Pomodoro Technique",
          ]}
          link=""
        />
      </div>
    </div>
  );
}

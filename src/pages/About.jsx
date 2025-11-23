import Navbar from "../components/Navbar";
import { useState } from "react";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      img: "/cert1.jpg",
      title:
        "TOP 3 BEST IN APPLICATIONS DEVELOPMENT & EMERGING TECHNOLOGY PROJECT",
      desc: "During my 2nd year in college, I won Top 3 Best Project in Application Development (APPSDEV) for creating ScholarTrack, a C# desktop app using MS Access for local storage. It automated scholar attendance by recording time-ins and time-outs, replacing manual logs. The project was praised for its practicality, reliability, and efficient design in improving academic record management.",
    },
    {
      img: "/cert2.jpg",
      title: "Ranked Among the Top 20 BSIT Dean’s Listers",
      desc: "Recognized as one of the Top 20 BSIT students for outstanding academic performance and excellence.",
    },
    {
      img: "/cert3.jpg",
      title: "Certificate of Appreciation – PSITS 2nd Year Representative",
      desc: "Recognized for active participation and dedication as the 2nd Year Representative of PSITS.",
    },
    {
      img: "/cert4.jpg",
      title:
        "Certificate of Participation – TECH Talk: Networking, UCLM College Days 2025",
      desc: "Attended a TECH Talk on Networking presented by Ms. Christine M. Gepiga, enhancing knowledge on network systems, configurations, and real-world applications.",
    },
    {
      img: "/cert5.jpg",
      title:
        "Certificate of Participation – TECH Talk: Database Programming, UCLM College Days 2025",
      desc: "Attended a technical talk on Database Programming conducted by Mr. Bienz Omandac, gaining insights into modern database concepts and best practices.",
    },
    {
      img: "/cert6.jpg",
      title:
        "Certificate of Participation – Networking Contest, UCLM College Days 2025",
      desc: "Participated in the Networking Contest during UCLM College Days 2025, demonstrating teamwork and applied networking skills.",
    },
    {
      img: "/pic1.jpg",
      title: "UC Days Networking Competition Champion",
      desc: "Won 1st place in the Networking Competition at UC Days 2024, showcasing exceptional skills in network design and implementation.",
    },
    {
      img: "/pic2.jpg",
      title: "3rd Place – Networking Competition, 11th UC ICT Congress 2025",
      desc: "Achieved 3rd place in the Networking Competition during the 11th UC ICT Congress 2025, showcasing strong technical and problem-solving skills in network configuration and troubleshooting.",
    },
    {
      img: "/pic3.jpg",
      title: "IBPAP Hackathon Challenge 2025 Participant",
      desc: "Participated in the IBPAP Hackathon Challenge 2025, collaborating with peers to develop innovative tech solutions under time constraints.",
    },
  ];

  const slideTo = (index) => {
    if (index < 0) index = certificates.length - 1;
    if (index >= certificates.length) index = 0;
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen w-full pt-32 pb-20 px-6 text-[#5e3b9c]">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-4xl font-extrabold mb-5">
          Get To Know Me
        </h1>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
          {/* Image */}
          <div className="flex justify-center w-full md:w-1/3">
            <img
              src="/twinky.png"
              className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-[#8860D0]"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-[14px] leading-relaxed opacity-90">
              Hello there! My name is Twinky Casidsid, but you can call me
              "winks". I am an aspiring software developer who enjoys building
              clean, intuitive, and meaningful digital experiences. I love
              working on web and mobile applications, blending design with
              technology, and continuously learning new tools and frameworks.
            </p>
          </div>
        </div>

        <div className="w-[100%] mx-auto mt-16 mb-50">
          <h2 className="text-3xl font-bold text-[#6f4bb3] mb-12 text-center">
            Educational Background
          </h2>
          <div className="w-[100%] mx-auto mt-16">
            {/* LINE */}
            <div className="relative w-full h-[3px] bg-[#6f4bb3] flex items-center justify-between">
              {/* ─────────── DOT 1 ─────────── */}
              <div className="relative flex flex-col items-center w-1/3">
                {/* Title Above */}
                <div className="absolute top-[-28px] text-[15px] font-bold text-[#6f4bb3] tracking-wide">
                  HIGH SCHOOL
                </div>

                {/* LOGO DOT */}
                <div
                  className="
          w-10 h-10 rounded-full 
          border-[1px] border-[#6f4bb3]
          shadow-[0_0_20px_8px_rgba(255,255,255,0.9)]
          bg-white 
          flex items-center justify-center
          overflow-hidden
        "
                >
                  <img
                    src="/uclm.png"
                    alt="UCLM Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* CARD BELOW */}
                <div
                  className="
          absolute top-[56px] 
          w-[275px] 
          bg-white/40 backdrop-blur-xl 
          rounded-xl 
          shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
          text-center 
          py-3 px-3
        "
                >
                  <p className="text-[13px] font-semibold text-[#6f4bb3]">
                    University of Cebu Lapu-Lapu & Mandaue
                  </p>
                  <p className="text-[13px] text-[#6f4bb3]">
                    9th grade - 10th grade
                  </p>

                  <p className="text-[12px] opacity-80">
                    Major in Computer Hardware Servicing
                  </p>

                  <p className="text-[12px] opacity-70">2014 – 2019</p>
                </div>
              </div>

              {/* ─────────── DOT 2 ─────────── */}
              <div className="relative flex flex-col items-center w-1/3">
                <div className="absolute top-[-28px] text-[15px] font-bold text-[#6f4bb3] tracking-wide">
                  SENIOR HIGH SCHOOL
                </div>

                {/* SAME LOGO DOT */}
                <div
                  className="
          w-10 h-10 rounded-full 
          border-[1px] border-[#6f4bb3]
          shadow-[0_0_20px_8px_rgba(255,255,255,0.9)]
          bg-white 
          flex items-center justify-center
          overflow-hidden
        "
                >
                  <img
                    src="/uclm.png"
                    alt="UCLM Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className="
          absolute top-[56px] 
          w-[275px] 
          bg-white/40 backdrop-blur-xl 
          rounded-xl 
          shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
          text-center 
          py-3 px-3
        "
                >
                  <p className="text-[13px] font-semibold text-[#6f4bb3]">
                    University of Cebu Lapu-Lapu & Mandaue
                  </p>
                  <p className="text-[13px] text-[#6f4bb3]">
                    Technical Vocational Strand – ICT
                  </p>

                  <p className="text-[12px] opacity-80">
                    Major in Computer Programming
                  </p>

                  <p className="text-[12px] opacity-70">2019 – 2021</p>
                </div>
              </div>

              {/* ─────────── DOT 3 ─────────── */}
              <div className="relative flex flex-col items-center w-1/3">
                <div className="absolute top-[-28px] text-[15px] font-bold text-[#6f4bb3] tracking-wide">
                  COLLEGE
                </div>

                {/* SAME LOGO DOT */}
                <div
                  className="
          w-10 h-10 rounded-full 
          border-[1px] border-[#6f4bb3]
          shadow-[0_0_20px_8px_rgba(255,255,255,0.9)]
          bg-white 
          flex items-center justify-center
          overflow-hidden
        "
                >
                  <img
                    src="/uclm.png"
                    alt="UCLM Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className="
          absolute top-[56px] 
          w-[275px] 
          bg-white/40 backdrop-blur-xl 
          rounded-xl 
          shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
          text-center 
          py-3 px-3
        "
                >
                  <p className="text-[13px] font-semibold text-[#6f4bb3]">
                    University of Cebu Lapu-Lapu & Mandaue
                  </p>
                  <p className="text-[13px] font- text-[#6f4bb3]">
                    Bachelor of Science in Information Technology
                  </p>

                  <p className="text-[12px] opacity-70">2021 – Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Certifications & Achievements */}
        <div className="w-full mx-auto mt-28">
          <h2 className="text-3xl font-bold text-[#6f4bb3] mb-12 text-center">
            Certifications & Achievements
          </h2>

          <div className="relative max-w-4xl mx-auto select-none z-[50]">
            <div className="group relative overflow-hidden rounded-3xl bg-white/25 backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              {/* LEFT ARROW */}
              <button
                onClick={() => slideTo(currentIndex - 1)}
                className="
          absolute left-4 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full
          bg-white/30 backdrop-blur-lg
          flex items-center justify-center
          transition-all duration-300
          text-[#6f4bb3] text-3xl font-light
          opacity-0 group-hover:opacity-100
          shadow-[0_4px_12px_rgba(0,0,0,0.2)]
          hover:bg-white/40 hover:scale-110
          z-[999]
        "
              >
                <span className="mt-[-2px]">❮</span>
              </button>

              {/* SLIDER CONTENT */}
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="min-w-full flex flex-col items-center px-8 py-8"
                  >
                    <img
                      src={cert.img}
                      className="w-full h-[460px] object-cover rounded-2xl border border-[#6f4bb3] shadow-xl"
                    />

                    <h3 className="mt-6 font-semibold text-[#6f4bb3] text-center text-[20px]">
                      {cert.title}
                    </h3>

                    <p className="text-[15px] opacity-80 text-center mt-2 max-w-2xl">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={() => slideTo(currentIndex + 1)}
                className="
          absolute right-4 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full
          bg-white/30 backdrop-blur-lg
          flex items-center justify-center
          transition-all duration-300
          text-[#6f4bb3] text-3xl font-light
          opacity-0 group-hover:opacity-100
          shadow-[0_4px_12px_rgba(0,0,0,0.2)]
          hover:bg-white/40 hover:scale-110
          z-[999]
        "
              >
                <span className="mt-[-2px]">❯</span>
              </button>
            </div>

            {/* DOT INDICATORS */}
            <div className="flex justify-center mt-6 gap-3">
              {certificates.map((_, i) => (
                <div
                  key={i}
                  onClick={() => slideTo(i)}
                  className={`
            w-3 h-3 rounded-full cursor-pointer transition-all
            ${currentIndex === i ? "bg-white scale-125 shadow" : "bg-white/40"}
          `}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

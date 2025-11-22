import Navbar from "../components/Navbar";

export default function About() {
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
              Hello there! My name is Twinky Casidsid, but you can call me "winks".
              I am an aspiring software developer who enjoys building clean, intuitive, and 
              meaningful digital experiences. 
              I love working on web and mobile applications, blending design with
              technology, and continuously learning new tools and frameworks.
            </p>
          </div>
        </div>

        <div className="w-[100%] mx-auto mt-16">
          <h2 className="text-2xl font-bold text-white">Educational Background</h2>
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
      </div>
    </div>
  );
}

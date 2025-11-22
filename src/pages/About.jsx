import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen w-full pt-32 pb-20 px-6 text-[#5e3b9c]">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-center text-4xl font-extrabold mb-10">
          Get To Know “Winx”
        </h1>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          {/* Image */}
          <div className="flex justify-center w-full md:w-1/3">
            <img
              src="/your-photo.jpg"
              className="w-48 h-48 rounded-full object-cover shadow-md border-4 border-[#8860D0]"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-[15px] leading-relaxed opacity-90">
              I am Twinky Casidsid, an aspiring software developer who enjoys
              building clean, intuitive, and meaningful digital experiences. I
              love working on web and mobile applications, blending design with
              technology, and continuously learning new tools and frameworks.
            </p>
          </div>
        </div>

        {/* Educational Background */}
        <h2 className="text-2xl font-bold mb-12 text-center">
          Educational Background
        </h2>

        <div className="relative w-full flex flex-col items-center">
          {/* TIMELINE WITH DOTS */}
          <div className="relative w-[85%]">
            {/* Horizontal Line */}
            <div className="w-full h-[4px] bg-[#6f4bb3] relative flex items-center justify-between">
              {/* Dot 1 */}
              <div
                className="w-7 h-7 rounded-full bg-white border-[4px] border-[#6f4bb3]
        shadow-[0_0_18px_6px_rgba(255,255,255,0.9)] absolute -translate-x-1/2"
                style={{ left: "0%" }}
              />

              {/* Dot 2 */}
              <div
                className="w-7 h-7 rounded-full bg-white border-[4px] border-[#6f4bb3]
        shadow-[0_0_18px_6px_rgba(255,255,255,0.9)] absolute -translate-x-1/2"
                style={{ left: "50%" }}
              />

              {/* Dot 3 */}
              <div
                className="w-7 h-7 rounded-full bg-white border-[4px] border-[#6f4bb3]
        shadow-[0_0_18px_6px_rgba(255,255,255,0.9)] absolute -translate-x-1/2"
                style={{ left: "100%" }}
              />
            </div>

            {/* TEXT BELOW THE DOTS */}
            <div className="flex justify-between mt-10 w-full">
              {/* CONTENT 1 */}
              <div className="flex flex-col items-center w-1/3 text-center">
                <p className="text-sm font-semibold">High School — UCLM</p>
                <p className="text-xs opacity-80">
                  Computer Hardware Servicing
                </p>
                <p className="text-xs opacity-70">2020 – 2020</p>
              </div>

              {/* CONTENT 2 */}
              <div className="flex flex-col items-center w-1/3 text-center">
                <p className="text-sm font-semibold">Senior High — STEM</p>
                <p className="text-xs opacity-80">High Honors</p>
                <p className="text-xs opacity-70">2021</p>
              </div>

              {/* CONTENT 3 */}
              <div className="flex flex-col items-center w-1/3 text-center">
                <p className="text-sm font-semibold">BSIT — UCLM</p>
                <p className="text-xs opacity-80">Dean’s Lister & Scholar</p>
                <p className="text-xs opacity-70">2021 – Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

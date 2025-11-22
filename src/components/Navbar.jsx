import winxLogo from "/winx.png";

export default function Navbar() {
  return (
    <div className="h-15 fixed top-5 left-0 right-0 z-50 flex justify-center">
      <nav
        className="flex items-center justify-center space-x-10
        px-24 py-4 rounded-full
        bg-[#6953a6]
        text-white font-semibold
        border border-white/20
        shadow-[0_3px_5px_rgba(0,0,0,0.15)]
        hover:shadow-[0_3px_20px_rgba(0,0,0,0.35)]
        transition-all duration-300 backdrop-blur-xl"
      >
        <a href="/projects" className="hover:opacity-80">
          Projects
        </a>

        <span className="block w-px h-8 bg-white/40 rounded-full"></span>

        <a href="/" className="hover:opacity-80">
          <img
            src={winxLogo}
            className="h-12 w-auto opacity-95 drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            alt="winx logo"
          />
        </a>

        <span className="block w-px h-8 bg-white/40 rounded-full"></span>

        <a href="/about" className="hover:opacity-80">
          About
        </a>
      </nav>
    </div>
  );
}

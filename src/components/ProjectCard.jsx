export default function ProjectCard({
  image,
  title,
  description,
  role,
  tags,
  link,
  label,
}) {
  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden max-w-xl mx-auto transition hover:scale-[1.02] hover:shadow-purple-500/40 duration-300 z-10">

      {/* Banner Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />

        {/* Top-right icon */}
        <div className="absolute top-3 right-3 p-2 bg-black/40 rounded-full backdrop-blur-md">
          <span className="text-white text-lg">⟳</span>
        </div>
      </div>

      <div className="p-6 text-left text-[#725a72]">
        {/* Category Label */}
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#6953a6] text-white mb-3">
          {label}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#6953a6]">{title}</h2>

        {/* Description */}
        <p className="mt-3 text-md leading-relaxed">
          {description}
        </p>

        {/* Role */}
        <p className="mt-4 text-[#6953a6] font-bold">{role}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-white/50 rounded-full border border-[#6953a6]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Project Link */}
        <a
          href={link}
          target="_blank"
          className="block mt-5 text-[#6953a6] font-bold hover:underline flex items-center gap-1"
        >
          Live Project <span>↗</span>
        </a>
      </div>
    </div>
  );
}

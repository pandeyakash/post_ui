const editorsPicks = [
  {
    title: "A Village That Time Forgot",
    tag: "Culture",
  },
  {
    title: "Walking Through Endless Fjords",
    tag: "Nature",
  },
  {
    title: "The Art of Living Slowly",
    tag: "Lifestyle",
  },
  {
    title: "Morning Rituals Around the World",
    tag: "People",
  },
];

const EditorsPicks = () => {
  return (
    <div
      className="
        relative overflow-hidden
        rounded-2xl
        p-6
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        shadow-[0_25px_50px_rgba(0,0,0,0.45)]
      "
    >
      {/* Ambient glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-400/20 blur-3xl pointer-events-none" />

      {/* Title */}
      <h3 className="text-sm uppercase tracking-widest text-rose-300 mb-6 flex items-center gap-3">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-rose-400 to-pink-500" />
        Editor’s Picks
      </h3>

      <ul className="space-y-4">
        {editorsPicks.map((item, index) => (
          <li
            key={index}
            className="
              group relative
              flex items-center gap-4
              p-4
              rounded-xl
              bg-white/5
              hover:bg-white/10
              transition-all duration-400
              cursor-pointer
            "
          >
            {/* Vertical accent bar */}
            <span
              className="
                absolute left-0 top-0 h-full w-1
                bg-gradient-to-b from-rose-400 to-pink-500
                opacity-0 group-hover:opacity-100
                transition-opacity
              "
            />

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm font-medium text-white/90 group-hover:text-white transition">
                {item.title}
              </p>
              <span className="text-xs text-white/50">
                {item.tag}
              </span>
            </div>

            {/* Arrow */}
            <span
              className="
                text-white/30
                group-hover:text-rose-400
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditorsPicks;

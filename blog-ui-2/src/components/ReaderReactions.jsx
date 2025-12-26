const reactions = [
  {
    user: "Ananya",
    reaction: "This story stayed with me all day.",
  },
  {
    user: "Kunal",
    reaction: "Beautifully written. Felt like I was there.",
  },
  {
    user: "Meera",
    reaction: "Loved the calm pace and visuals.",
  },
];

const ReaderReactions = () => {
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
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-teal-400/20 blur-3xl pointer-events-none" />

      {/* Title */}
      <h3 className="text-sm uppercase tracking-widest text-teal-300 mb-6 flex items-center gap-3">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-teal-400 to-cyan-500" />
        Reader Reactions
      </h3>

      <div className="space-y-4">
        {reactions.map((item, index) => (
          <div
            key={index}
            className="
              group relative
              p-4 rounded-xl
              bg-white/5
              hover:bg-white/10
              transition-all duration-400
            "
          >
            {/* Accent strip */}
            <span
              className="
                absolute left-0 top-0 h-full w-1
                bg-gradient-to-b from-teal-400 to-cyan-500
                opacity-0 group-hover:opacity-100
                transition-opacity
              "
            />

            {/* Content */}
            <p className="text-sm text-white/80 leading-relaxed">
              “{item.reaction}”
            </p>

            <div className="mt-2 text-xs text-white/50">
              — {item.user}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReaderReactions;

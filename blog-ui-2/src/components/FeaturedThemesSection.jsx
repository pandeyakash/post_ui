const topics = [
  {
    title: "Slow Living",
    description: "Stories about intentional, mindful lifestyles",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Nature & Silence",
    description: "Where landscapes speak louder than words",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Human Stories",
    description: "Moments shaped by people and culture",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Creative Rituals",
    description: "Daily practices that inspire focus and clarity",
    gradient: "from-orange-500 to-amber-500",
  },
];

const FeaturedThemesSection = () => {
  return (
    <div className="mb-10">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-teal-500 animate-pulse" />
        <h3 className="text-xl font-semibold text-white">
          Explore Topics
        </h3>
      </div>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={topic.title}
            style={{ animationDelay: `${index * 60}ms` }}
            className="
              group relative
              overflow-hidden
              rounded-2xl
              p-6
              bg-white/5
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              cursor-pointer
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-white/10
              animate-fade-in
            "
          >
            {/* Gradient glow */}
            <div
              className={`
                absolute -top-16 -right-16 w-48 h-48
                bg-gradient-to-br ${topic.gradient}
                opacity-20 blur-3xl
                transition-opacity duration-500
                group-hover:opacity-40
              `}
            />

            {/* Accent bar */}
            <div
              className={`
                w-14 h-[3px] mb-4
                bg-gradient-to-r ${topic.gradient}
                transition-all duration-500
                group-hover:w-24
              `}
            />

            {/* Content */}
            <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition">
              {topic.title}
            </h4>

            <p className="text-sm text-white/70 leading-relaxed">
              {topic.description}
            </p>

            {/* Hover arrow */}
            <div className="mt-5 flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedThemesSection;

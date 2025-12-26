const topics = [
  {
    name: "AI & Creativity",
    description: "How AI is shaping art and expression online",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    name: "Digital Wellbeing",
    description: "Mindful usage, balance, and mental health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Remote Work",
    description: "Life and productivity beyond offices",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    accent: "from-orange-500 to-amber-500",
  },
  {
    name: "Creator Economy",
    description: "Independent creators and platform careers",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    accent: "from-pink-500 to-rose-500",
  },
];

const TrendingTopicsRow = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        {topics.map((topic, index) => (
          <div
            key={topic.name}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              group
              flex items-start gap-5
              cursor-pointer
              transition-all duration-500
              hover:-translate-y-[2px]
              animate-fade-in
            "
          >
            {/* IMAGE */}
            <div className="relative shrink-0 mt-1">
              <div
                className={`
                  absolute inset-0
                  rounded-full
                  bg-gradient-to-br ${topic.accent}
                  blur-xl opacity-30
                  transition-opacity duration-500
                  group-hover:opacity-45
                `}
              />
              <img
                src={topic.image}
                alt={topic.name}
                className="
                  relative
                  w-14 h-14
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* TEXT */}
            <div className="space-y-1">
              <h4
                className="
                  text-base font-semibold
                  text-gray-900
                  transition-colors duration-300
                  group-hover:text-gray-950
                "
              >
                {topic.name}
              </h4>
              <p className="text-sm text-gray-600 leading-snug">
                {topic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopicsRow;

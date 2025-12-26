const momentumTopics = [
  { name: "AI & Creativity", growth: "+12%" },
  { name: "Digital Wellbeing", growth: "+9%" },
  { name: "Creator Economy", growth: "+7%" },
  { name: "Remote Work", growth: "+5%" },
];

const TopicMomentumStrip = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-10">
      <div className="flex justify-between gap-6">
        {momentumTopics.map((topic, index) => (
          <div
            key={topic.name}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              group flex-1
              flex items-center justify-between
              px-5 py-3
              bg-gray-50
              transition-all duration-500
              hover:bg-white
              hover:-translate-y-[1px]
              animate-fade-in
            "
          >
            <span className="text-sm font-medium text-gray-800">
              {topic.name}
            </span>

            <span className="text-sm font-semibold text-emerald-600">
              ↗ {topic.growth}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicMomentumStrip;

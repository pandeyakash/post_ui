const topics = [
  "React",
  "JavaScript",
  "UI/UX",
  "Tailwind CSS",
  "Redux Toolkit",
  "Web Performance",
];

const TopicsSection = () => {
  return (
    <div className="mb-8">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 animate-pulse" />
        <h3 className="text-lg font-semibold text-gray-900">
          Explore Topics
        </h3>
      </div>

      {/* Topics Rail */}
      <div className="flex gap-3 overflow-x-auto py-2 pl-2 pr-2 no-scrollbar">
        {topics.map((topic, index) => (
          <span
            key={topic}
            style={{ animationDelay: `${index * 40}ms` }}
            className="
              group shrink-0 px-5 py-3 rounded-xl
              bg-white
              border border-gray-200
              text-sm font-medium text-gray-800
              shadow-sm
              cursor-pointer
              transition-all duration-300 ease-out
              hover:shadow-[0_14px_30px_rgba(99,102,241,0.25)]
              hover:ring-1 hover:ring-indigo-400
              animate-fade-in
            "
          >
            {/* Text + underline accent */}
            <span className="relative">
              {topic}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-gradient-to-r from-indigo-500 to-pink-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;

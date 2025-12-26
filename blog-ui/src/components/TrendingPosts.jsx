const trendingPosts = [
  "React Performance Tips",
  "Tailwind Layout Patterns",
  "Redux Toolkit Mistakes",
];

const TrendingPosts = () => {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-50 via-white to-pink-50 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">

      {/* Title */}
      <h3 className="text-lg font-semibold mb-5 text-gray-900 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-orange-500 to-pink-500" />
        Trending Posts
      </h3>

      <ul className="space-y-3">
        {trendingPosts.map((title, index) => (
          <li
            key={index}
            className="group flex items-center gap-3 p-3 rounded-xl
              bg-white/70 hover:bg-white
              shadow-sm hover:shadow-[0_8px_20px_rgba(249,115,22,0.15)]
              transition-all duration-300 cursor-pointer"
          >
            {/* Index Badge */}
            <span
              className="flex items-center justify-center w-7 h-7 text-xs font-bold rounded-full
                bg-gradient-to-br from-orange-500 to-pink-500 text-white
                group-hover:scale-110 transition-transform"
            >
              {index + 1}
            </span>

            {/* Title */}
            <span className="text-sm text-gray-800 group-hover:text-orange-600 transition">
              {title}
            </span>

            {/* Arrow */}
            <span className="ml-auto text-gray-300 group-hover:text-orange-500 transition-transform group-hover:translate-x-1">
              →
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;

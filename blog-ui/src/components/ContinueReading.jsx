const readingProgress = [
  { id: 1, title: "Redux Toolkit Essentials", progress: 70 },
  { id: 2, title: "Advanced Tailwind Layouts", progress: 45 },
];

const ContinueReading = () => {
  return (
    <div className="mt-8 rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500 animate-pulse" />
        <h3 className="text-lg font-semibold text-gray-900">
          Continue Reading
        </h3>
      </div>

      <div className="space-y-5">
        {readingProgress.map((item, index) => (
          <div
            key={item.id}
            style={{ animationDelay: `${index * 60}ms` }}
            className="animate-fade-in"
          >
            {/* Title + Percentage */}
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="font-medium text-gray-800">
                {item.title}
              </span>
              <span className="text-gray-500">
                {item.progress}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2.5 rounded-full bg-gray-200 overflow-hidden">
              {/* Animated fill */}
              <div
                className="absolute left-0 top-0 h-full rounded-full
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  transition-all duration-700 ease-out"
                style={{ width: `${item.progress}%` }}
              />

              {/* Subtle shimmer */}
              <div
                className="absolute inset-0 opacity-30
                  bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.6),transparent)]
                  animate-progress-shimmer"
                style={{ width: `${item.progress}%` }}
              />
            </div>

            {/* Resume hint */}
            <div className="mt-2 text-xs text-gray-500">
              Resume where you left off →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueReading;

import { useState } from "react";

const insights = [
  {
    id: 1,
    title: "Life in Remote Landscapes",
    content:
      "Stories from places where isolation shapes culture, resilience, and everyday rituals.",
  },
  {
    id: 2,
    title: "Why Slow Travel Matters",
    content:
      "Moving slower creates deeper connections with people, places, and yourself.",
  },
  {
    id: 3,
    title: "The Power of Quiet Mornings",
    content:
      "How early hours influence creativity, focus, and emotional clarity.",
  },
];

const StoryInsightsAccordion = () => {
  const [open, setOpen] = useState(null);

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
      {/* Soft glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-400/20 blur-3xl pointer-events-none" />

      {/* Title */}
      <h3 className="text-sm uppercase tracking-widest text-cyan-300 mb-6 flex items-center gap-3">
        <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-teal-400 to-cyan-500" />
        Story Insights
      </h3>

      {insights.map((item) => {
        const isOpen = open === item.id;

        return (
          <div
            key={item.id}
            className={`
              mb-3 rounded-xl overflow-hidden
              transition-all duration-400
              ${
                isOpen
                  ? "bg-white/10 shadow-[0_15px_30px_rgba(56,189,248,0.25)]"
                  : "bg-white/5 hover:bg-white/10"
              }
            `}
          >
            {/* Header */}
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="
                w-full flex justify-between items-center
                px-5 py-4
                text-sm font-medium text-white/90
                group
              "
            >
              <span className="text-left leading-snug">
                {item.title}
              </span>

              {/* Icon */}
              <span
                className={`
                  text-lg
                  transition-all duration-300
                  ${
                    isOpen
                      ? "rotate-90 text-cyan-400"
                      : "rotate-0 text-white/40 group-hover:text-cyan-300"
                  }
                `}
              >
                →
              </span>
            </button>

            {/* Content */}
            <div
              className={`
                overflow-hidden transition-all duration-400
                ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-5 pb-5 text-sm text-white/70 space-y-3">
                <p>{item.content}</p>

                <span
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-cyan-300
                    hover:text-white
                    transition cursor-pointer
                  "
                >
                  Explore story
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryInsightsAccordion;

import { useState } from "react";

const quickReads = [
  {
    id: 1,
    title: "Why React Still Dominates",
    content:
      "React continues to lead due to its ecosystem and flexibility.",
  },
  {
    id: 2,
    title: "CSS vs Utility Classes",
    content:
      "Utility-first CSS improves speed and consistency.",
  },
];

const QuickReadsAccordion = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">

      {/* Title */}
      <h3 className="text-lg font-semibold mb-5 text-gray-900 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500" />
        Quick Reads
      </h3>

      {quickReads.map((item) => {
        const isOpen = open === item.id;

        return (
          <div
            key={item.id}
            className={`
              mb-3 rounded-xl overflow-hidden
              transition-all duration-300
              ${
                isOpen
                  ? "bg-white shadow-[0_10px_25px_rgba(99,102,241,0.15)]"
                  : "bg-white/70 hover:bg-white shadow-sm"
              }
            `}
          >
            {/* Header */}
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              className="w-full flex justify-between items-center px-5 py-4 text-sm font-medium text-gray-800 group"
            >
              <span className="text-left">
                {item.title}
              </span>

              {/* Animated Icon */}
              <span
                className={`
                  text-xl font-light
                  transition-transform duration-300
                  ${
                    isOpen
                      ? "rotate-45 text-indigo-600"
                      : "rotate-0 text-gray-400 group-hover:text-indigo-500"
                  }
                `}
              >
                +
              </span>
            </button>

            {/* Content */}
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-5 pb-5 text-sm text-gray-600">
                <p>{item.content}</p>

                <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-pink-600 transition">
                  Read full post
                  <span className="transition-transform hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuickReadsAccordion;

import { useEffect, useState } from "react";

const slides = [
  {
    title: "Discover Insightful Posts",
    description:
      "Deep dives, practical guides, and real-world insights on modern development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tag: "Editor's Pick",
    stats: "120+ New Posts",
    cta: "Explore Posts",
    accent: "from-indigo-500 to-purple-500",
  },
  {
    title: "Trending Topics",
    description:
      "What developers are reading, sharing, and discussing right now.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
    tag: "🔥 Trending",
    stats: "Top Reads Today",
    cta: "View Trending",
    accent: "from-pink-500 to-rose-500",
  },
  {
    title: "Learn. Build. Improve.",
    description:
      "Curated content to help you grow faster and smarter.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    tag: "For Developers",
    stats: "Weekly Updates",
    cta: "Start Learning",
    accent: "from-emerald-500 to-teal-500",
  },
];

const CarouselBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[26vh] min-h-[240px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background */}
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Color Overlays */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-85`}
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6">

            {/* LEFT */}
            <div className="text-white space-y-3 animate-fade-in-up">
              {/* Tag */}
              <span className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-white/20 backdrop-blur">
                {slide.tag}
              </span>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm text-white/90 max-w-md">
                {slide.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-white/80">
                <span>{slide.stats}</span>
                <span className="w-1 h-1 rounded-full bg-white/60" />
                <span>Updated Daily</span>
              </div>

              {/* CTA */}
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
                {slide.cta}
                <span className="text-base">→</span>
              </button>
            </div>

            {/* RIGHT DECORATIVE */}
            <div className="hidden md:flex justify-center relative">
              <div className="absolute w-32 h-32 rounded-full bg-white/20 blur-2xl animate-pulse" />
              <div className="w-40 h-40 rounded-2xl border border-white/30 backdrop-blur bg-white/10 rotate-12 hover:rotate-6 transition-transform duration-700" />
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-[6000ms]"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default CarouselBanner;

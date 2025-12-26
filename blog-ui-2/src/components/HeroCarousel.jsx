import { useEffect, useState } from "react";

const slides = [
  {
    title: "Stories Beyond Destinations",
    subtitle: "Journeys shaped by people, culture, and quiet moments",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    accent: "from-teal-400 to-cyan-500",
  },
  {
    title: "Where Nature Slows You Down",
    subtitle: "Wild landscapes that reshape perspective",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "The Beauty of Everyday Life",
    subtitle: "Small rituals, deep stories, human connections",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    accent: "from-rose-400 to-pink-500",
  },
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[28vh] min-h-[260px] overflow-hidden">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            transition-opacity duration-1000
            ${active === index ? "opacity-100 z-20" : "opacity-0 z-10"}
          `}
        >
          {/* Image layer – slow cinematic drift */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform:
                active === index
                  ? "scale(1.05) translateY(0)"
                  : "scale(1.12) translateY(12px)",
              transition: "transform 9000ms ease-out",
            }}
          />

          {/* Depth overlays */}
          <div className="absolute inset-0 bg-black/55" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-25`}
          />

          {/* Animated light sweep */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/3 top-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div
                className={`
                  max-w-xl
                  transition-all duration-700 delay-200
                  ${active === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"}
                `}
              >
                {/* Accent bar */}
                <div
                  className={`w-14 h-[3px] mb-4 bg-gradient-to-r ${slide.accent}`}
                />

                {/* Title */}
                <h1
                  className={`
                    text-2xl md:text-3xl font-bold text-white leading-tight
                    transition-all duration-700 delay-300
                    ${active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"}
                  `}
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className={`
                    mt-3 text-sm md:text-base text-white/80
                    transition-all duration-700 delay-500
                    ${active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"}
                  `}
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`
              h-1 rounded-full cursor-pointer overflow-hidden
              ${active === index ? "w-10 bg-white/40" : "w-4 bg-white/20"}
              transition-all duration-300
            `}
          >
            {active === index && (
              <div className="h-full bg-white animate-progress-fill" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Posts That Shape Conversations",
    subtitle: "Trending thoughts, opinions, and moments from across social media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    tag: "Trending Now",
  },
  {
    id: 2,
    title: "What People Are Talking About",
    subtitle: "Viral posts, cultural moments, and digital reactions in one place",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tag: "Most Shared",
  },
  {
    id: 3,
    title: "Voices. Opinions. Moments.",
    subtitle: "A curated stream of social posts worth your attention",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tag: "Editor’s Choice",
  },
];


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Soft background accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* MAGAZINE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* LEFT — TEXT / MAGAZINE COPY */}
          <div className="space-y-8 animate-fade-in">

            <span className="inline-block text-xs tracking-widest uppercase text-gray-500">
              {slides[current].tag}
            </span>

            <h1
              className="
                text-4xl md:text-5xl lg:text-6xl
                font-semibold
                text-gray-900
                leading-tight
                transition-all duration-700
              "
            >
              {slides[current].title}
            </h1>

            <p className="text-lg text-gray-600 max-w-xl transition-opacity duration-700">
              {slides[current].subtitle}
            </p>

            {/* Magazine meta */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Curated stories</span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span>Weekly highlights</span>
            </div>
          </div>

          {/* RIGHT — IMAGE CAROUSEL */}
          <div className="relative h-[420px]">

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`
                  absolute inset-0
                  transition-all duration-1000 ease-in-out
                  ${
                    index === current
                      ? "opacity-100 scale-100 z-20"
                      : "opacity-0 scale-105 z-10"
                  }
                `}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="
                    w-full h-full object-cover
                    rounded-none
                  "
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              </div>
            ))}

            {/* Floating indicator */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-30">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`
                    w-2.5 h-2.5 rounded-full cursor-pointer
                    transition-all duration-300
                    ${
                      index === current
                        ? "bg-white shadow"
                        : "bg-white/50"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

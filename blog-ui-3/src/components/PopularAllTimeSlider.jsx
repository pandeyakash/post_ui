import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const popularPosts = [
  {
    id: 301,
    title: "The Post That Changed How People Think Online",
    excerpt:
      "A single moment that reshaped conversations across social platforms.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    id: 302,
    title: "Why This Opinion Still Resonates Years Later",
    excerpt:
      "Timeless thoughts that continue to spark discussion and reflection.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 303,
    title: "A Viral Post That Refused to Fade Away",
    excerpt:
      "Even today, people reference this post when talking about digital culture.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

const PopularAllTimeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % popularPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const post = popularPosts[current];

  return (
    <aside className="space-y-6">

      {/* HEADING */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Most Loved
        </p>
        <h3 className="text-lg font-semibold text-gray-900">
          Popular • All Time
        </h3>
      </div>

      {/* SLIDER */}
      <Link
        to={`/post/${post.id}`}
        key={post.id}
        className="
          group block
          transition-all duration-700
          animate-fade-in
        "
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="
              w-full h-48 object-cover
              transition-transform duration-[1200ms]
              group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Indicator */}
          <div className="absolute bottom-3 right-3 flex gap-1">
            {popularPosts.map((_, index) => (
              <span
                key={index}
                className={`
                  w-2 h-2 rounded-full
                  transition-all duration-300
                  ${
                    index === current
                      ? "bg-white"
                      : "bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-4 space-y-2">
          <h4
            className="
              text-base font-semibold
              text-gray-900
              leading-snug
              transition-colors duration-300
              group-hover:text-gray-950
            "
          >
            {post.title}
          </h4>

          <p className="text-sm text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>

          <span className="inline-block text-xs text-gray-400">
            Read post →
          </span>
        </div>
      </Link>
    </aside>
  );
};

export default PopularAllTimeSlider;

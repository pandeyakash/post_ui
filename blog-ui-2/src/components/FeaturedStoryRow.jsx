import { Link } from "react-router-dom";

const featuredStory = {
  id: 101,
  title: "A Winter Morning in the Faroe Islands",
  excerpt:
    "Wrapped in mist and silence, the Faroe Islands reveal a rhythm of life shaped by wind, water, and resilience. This story explores quiet mornings, local traditions, and the beauty of isolation.",
  image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  category: "Slow Travel",
  author: "Akash Pandey",
  readTime: "7 min read",
};

const FeaturedStoryRow = () => {
  return (
    <Link
      to={`/stories/${featuredStory.id}`}
      className="
        group block
        relative
        bg-[#0b2230]
        shadow-[0_30px_60px_rgba(0,0,0,0.45)]
        overflow-hidden
        transition-transform duration-700
        hover:-translate-y-1
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={featuredStory.image}
            alt={featuredStory.title}
            className="
              w-full h-full object-cover
              transition-transform duration-[9000ms]
              group-hover:scale-110
            "
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Floating glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
        </div>

        {/* CONTENT */}
        <div className="relative p-8 md:p-10 flex flex-col justify-center space-y-5">

          {/* Category */}
          <span className="text-xs uppercase tracking-widest text-cyan-300">
            {featuredStory.category}
          </span>

          {/* Title */}
          <h2
            className="
              text-2xl md:text-3xl font-semibold text-white leading-tight
              transition-colors duration-300
              group-hover:text-cyan-300
            "
          >
            {featuredStory.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/75 leading-relaxed max-w-xl">
            {featuredStory.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-white/50 pt-4">
            <span>{featuredStory.author}</span>
            <span>•</span>
            <span>{featuredStory.readTime}</span>
          </div>

          {/* Accent line */}
          <div className="pt-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-teal-400 to-cyan-500 transition-all duration-500 group-hover:w-28" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedStoryRow;

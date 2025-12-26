import { Link } from "react-router-dom";

const stories = [
  {
    id: 12,
    title: "Walking Through Endless Lavender Fields",
    excerpt:
      "A sensory journey through the colors, scents, and stillness of rural landscapes untouched by urgency.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    author: "Akash Pandey",
    date: "Aug 29, 2025",
    category: "Nature",
  },
  {
    id: 13,
    title: "Stories Told Over Shared Meals",
    excerpt:
      "Food has always been more than nourishment — it is memory, culture, and a language spoken across generations.",
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83",
    author: "Akash Pandey",
    date: "Aug 24, 2025",
    category: "Culture",
  },
];

const StoryFeed = () => {
  return (
    <div className="space-y-10">
      {stories.map((story, index) => (
        <Link
          key={story.id}
          to={`/post/${story.id}`}
          className="
            group block
            relative
            bg-white/5
            overflow-hidden
            shadow-[0_25px_50px_rgba(0,0,0,0.35)]
            transition-all duration-500
            hover:-translate-y-1
            hover:bg-white/10
            animate-fade-in
          "
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[38%_62%]">

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={story.image}
                alt={story.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-[8000ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

              <span
                className="
                  absolute top-4 left-4
                  px-3 py-1 text-xs uppercase tracking-wide
                  bg-black/50 text-white backdrop-blur
                "
              >
                {story.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="relative p-7 flex flex-col justify-between">
              <div className="space-y-3">
                <h3
                  className="
                    text-xl md:text-2xl font-semibold text-white
                    leading-snug
                    transition-colors duration-300
                    group-hover:text-cyan-300
                  "
                >
                  {story.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {story.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 text-xs text-white/50">
                <span>
                  {story.author} • {story.date}
                </span>

                <span className="flex items-center gap-2 text-cyan-300 group-hover:text-white transition">
                  Read story
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>

              <div
                className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-gradient-to-r from-cyan-400 to-teal-500
                  transition-all duration-500
                  group-hover:w-full
                "
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StoryFeed;

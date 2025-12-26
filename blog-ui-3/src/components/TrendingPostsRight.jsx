import { Link } from "react-router-dom";

const trendingPosts = [
  {
    id: 201,
    title: "This One Post Sparked a Viral Debate",
    metric: "18.4K reactions",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    id: 202,
    title: "An Opinion Everyone Is Talking About Today",
    metric: "12.7K reactions",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    id: 203,
    title: "A Single Thread That Changed the Narrative",
    metric: "9.9K reactions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 204,
    title: "The Post People Can’t Stop Sharing",
    metric: "7.3K reactions",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
];

const TrendingPostsRight = () => {
  return (
    <aside className="space-y-10">

      {/* HEADING — DISTINCT STYLE */}
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Popular right now
        </p>
        <h3 className="text-xl font-semibold text-gray-900">
          Trending Posts
        </h3>
      </div>

      {/* LIST */}
      <div className="space-y-6">
        {trendingPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              group flex items-start gap-4
              transition-all duration-500
              hover:-translate-y-[2px]
              animate-fade-in
            "
          >
            {/* IMAGE */}
            <div className="relative shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="
                  w-12 h-12
                  rounded-full
                  object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* soft glow */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-black/5
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-1">
              <h4
                className="
                  text-sm font-medium
                  text-gray-800
                  leading-snug
                  transition-colors duration-300
                  group-hover:text-gray-950
                "
              >
                {post.title}
              </h4>

              <span className="text-xs text-gray-500">
                {post.metric}
              </span>
            </div>

            {/* RANK (SUBTLE) */}
            <span
              className="
                text-xs text-gray-300
                font-medium
                transition-colors duration-300
                group-hover:text-gray-400
              "
            >
              #{index + 1}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default TrendingPostsRight;

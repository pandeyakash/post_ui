import { Link } from "react-router-dom";

const latestPosts = [
  {
    id: 1,
    title: "Why Short Posts Are Winning Attention",
    excerpt:
      "In a fast-moving digital world, concise social posts are shaping how ideas spread and conversations begin.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "Aurum Editorial",
    date: "Sep 04, 2025",
  },
  {
    id: 2,
    title: "The Rise of Authentic Voices Online",
    excerpt:
      "Audiences are shifting toward creators who value honesty, nuance, and real experience over polish.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    author: "Aurum Editorial",
    date: "Sep 02, 2025",
  },
  {
    id: 3,
    title: "How Trends Are Born on Social Platforms",
    excerpt:
      "From a single post to global reach — the lifecycle of digital trends explained.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    author: "Aurum Editorial",
    date: "Aug 30, 2025",
  },
];

const LatestPosts = () => {
  return (
    <section className="space-y-10">

      {/* HEADING */}
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Latest Posts
        </h2>
        <span className="text-sm text-gray-400">
          Updated daily
        </span>
      </div>

      {/* POSTS */}
      <div className="space-y-8">
        {latestPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            style={{ animationDelay: `${index * 120}ms` }}
            className="
              group block
              transition-all duration-500
              hover:-translate-y-[2px]
              animate-fade-in
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start">

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    w-full h-36 object-cover
                    transition-transform duration-[700ms]
                    group-hover:scale-105
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-3">
                <h3
                  className="
                    text-lg md:text-xl font-semibold
                    text-gray-900
                    leading-snug
                    transition-colors duration-300
                    group-hover:text-gray-950
                  "
                >
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;

const featuredPost = {
  title: "Building Scalable React Applications",
  excerpt:
    "Learn modern patterns, performance optimizations, and architectural decisions for large React apps. This guide covers component architecture, state management strategies, performance tuning techniques, and best practices used in production-grade React applications to ensure scalability and maintainability.",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
  author: "Akash Pandey",
  date: "Aug 22, 2025",
};

const FeaturedPost = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)] mb-8 group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="
            w-full h-72 object-cover
            transition-transform duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Badge */}
        <span
          className="
            absolute top-4 left-4
            px-4 py-1.5
            text-xs font-semibold
            rounded-full
            bg-gradient-to-r from-indigo-600 to-pink-600
            text-white
            shadow-lg
          "
        >
          Featured Post
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <h2
          className="
            text-2xl font-bold text-gray-900
            transition-colors
            group-hover:text-indigo-600
            cursor-pointer
          "
        >
          {featuredPost.title}
        </h2>

        {/* Full Content */}
        <p className="text-gray-600 leading-relaxed">
          {featuredPost.excerpt}
        </p>

        {/* Meta */}
        <div className="text-sm text-gray-500 pt-2 border-t border-gray-100">
          {featuredPost.author} • {featuredPost.date}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;

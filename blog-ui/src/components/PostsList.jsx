import { Link } from "react-router-dom";


const posts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "Hooks simplify state and lifecycle management in functional components.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    author: "Akash Pandey",
    date: "Aug 20, 2025",
  },
  {
    id: 2,
    title: "Tailwind CSS Best Practices",
    excerpt:
      "Write clean, maintainable UI faster using Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Akash Pandey",
    date: "Aug 18, 2025",
  },
];

const PostsList = () => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm hover:shadow-md transition"
        >
          <img
            src={post.image}
            alt={post.title}
            className="md:w-1/3 h-48 object-cover rounded-l-xl"
          />

          <div className="p-6 flex flex-col justify-between">
            <div>
              <Link
                to={`/post/${post.id}`}
                className="text-xl font-semibold hover:text-indigo-600"
              >
                {post.title}
              </Link>

              <p className="text-gray-600 text-sm mt-2">
                {post.excerpt}
              </p>
            </div>

            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <span>
                {post.author} • {post.date}
              </span>
              <Link
                to={`/post/${post.id}`}
                className="text-indigo-600 hover:underline"
              >
                Read post
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;

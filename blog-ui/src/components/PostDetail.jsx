import { useParams } from "react-router-dom";
import { applySEO } from "../utils/seo";
import { useEffect } from "react";

const posts = [
  {
    id: "1",
    title: "Understanding React Hooks",
    content:
      "React Hooks allow you to use state and other React features without writing a class. They simplify component logic and improve reuse...",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    author: "Akash Pandey",
    date: "Aug 20, 2025",
    readTime: "6 min read",
  },
  {
    id: "2",
    title: "Tailwind CSS Best Practices",
    content:
      "Tailwind CSS is a utility-first framework that helps you build modern UI faster while keeping styles consistent...",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    author: "Akash Pandey",
    date: "Aug 18, 2025",
    readTime: "5 min read",
  },
];

const PostDetail = () => {
  const { postId } = useParams();

  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">Post not found</h2>
      </div>
    );
  }

  useEffect(() => {
    applySEO({
      title: post.title,
      description: post.content,
      image: post.image,
      url: `https://postify.com/post/${post.id}`,
      type: "article",
    });
  }, [post]);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Cover */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-xl mb-8"
        />

        {/* Meta */}
        <div className="text-sm text-gray-500 mb-3">
          {post.author} • {post.date} • {post.readTime}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>{post.content}</p>
          <p>
            This is where the full post content will go. Later, this can be
            fetched dynamically from an API using the post ID.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;

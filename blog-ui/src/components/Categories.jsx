const categories = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "UI/UX",
  "Node.js",
  "Redux",
  "Web Performance",
];

const Categories = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Categories
      </h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;

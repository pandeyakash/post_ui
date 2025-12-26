const comments = [
  { user: "Rohit", text: "Very clear explanation!" },
  { user: "Priya", text: "This helped a lot, thanks." },
];

const LatestComments = () => {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">

      {/* Title */}
      <h3 className="text-lg font-semibold mb-5 text-gray-900 flex items-center gap-2">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
        Latest Comments
      </h3>

      <div className="space-y-3">
        {comments.map((c, i) => (
          <div
            key={i}
            className="group flex items-start gap-3 p-3 rounded-xl
              bg-white/70 hover:bg-white
              shadow-sm hover:shadow-[0_8px_20px_rgba(16,185,129,0.15)]
              transition-all duration-300"
          >
            {/* Avatar */}
            <div
              className="flex items-center justify-center w-8 h-8 rounded-full
                bg-gradient-to-br from-emerald-500 to-teal-500 text-white
                text-xs font-bold shrink-0
                group-hover:scale-105 transition-transform"
            >
              {c.user.charAt(0)}
            </div>

            {/* Text */}
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-medium text-gray-900">
                {c.user}
              </span>{" "}
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestComments;

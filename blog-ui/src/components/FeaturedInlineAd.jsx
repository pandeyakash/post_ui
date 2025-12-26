const FeaturedInlineAd = () => {
  return (
    <div className="mb-8 rounded-2xl p-6 bg-gradient-to-r from-indigo-50 via-white to-purple-50 border border-gray-200 shadow-sm">

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-gray-400">
          Sponsored
        </span>
        <span className="text-xs text-gray-400">
          Recommended
        </span>
      </div>

      <div className="rounded-xl bg-white border border-gray-200 h-[180px] flex items-center justify-center text-sm text-gray-400">
        Responsive Ad Space
      </div>

    </div>
  );
};

export default FeaturedInlineAd;


const InlineContentAd = () => {
  return (
    <div
      className="
        my-24
        px-10 py-12
        bg-gradient-to-br from-gray-50 via-white to-gray-50
        transition-all duration-500
        hover:-translate-y-[2px]
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 items-center">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Ad"
            className="
              w-full h-40 object-cover
              transition-transform duration-[900ms]
              hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-gray-400">
            Sponsored Insight
          </span>

          <h3 className="text-xl font-semibold text-gray-900 leading-snug">
            Build trust, not just reach
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
            Platforms that help creators connect meaningfully — without
            overwhelming their audience.
          </p>

          <span
            className="
              inline-flex items-center gap-1
              text-sm font-medium text-gray-900
              transition-all duration-300
              hover:gap-2
            "
          >
            Discover how →
          </span>
        </div>

      </div>
    </div>
  );
};

export default InlineContentAd;

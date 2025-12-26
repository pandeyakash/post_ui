const SidebarAd = () => {
  return (
    <div
      className="
        relative
        px-5 py-6
        bg-gradient-to-b from-gray-50 to-white
        transition-all duration-500
        hover:-translate-y-[2px]
      "
    >
      {/* Label */}
      <span className="text-[10px] uppercase tracking-widest text-gray-400">
        Sponsored
      </span>

      {/* Image */}
      <div className="mt-4 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
          alt="Ad"
          className="
            w-full h-36 object-cover
            transition-transform duration-[900ms]
            hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <h4 className="text-sm font-semibold text-gray-900 leading-snug">
          Tools creators actually use
        </h4>

        <p className="text-xs text-gray-600 leading-relaxed">
          Build, publish, and grow without noisy dashboards or gimmicks.
        </p>

        <span
          className="
            inline-flex items-center gap-1
            text-xs font-medium text-gray-900
            transition-all duration-300
            hover:gap-2
          "
        >
          Learn more →
        </span>
      </div>
    </div>
  );
};

export default SidebarAd;

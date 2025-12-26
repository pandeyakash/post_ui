const PreFooterAd = () => {
  return (
    <section className="mt-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center space-y-6">

        <p className="text-xs uppercase tracking-widest text-gray-400">
          Sponsored
        </p>

        <h2 className="text-3xl font-semibold">
          Turn attention into impact
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          The tools trusted by creators and brands to turn meaningful content
          into measurable growth.
        </p>

        <button
          className="
            mt-4
            px-8 py-3
            bg-white
            text-gray-900
            text-sm font-medium
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:shadow-[0_14px_30px_rgba(0,0,0,0.3)]
          "
        >
          Get started
        </button>

      </div>
    </section>
  );
};

export default PreFooterAd;

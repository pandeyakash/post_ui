const MiniAnalyticsCard = () => {
  return (
    <div
      className="
        p-6
        bg-gray-50
        transition-all duration-500
        hover:bg-white
        animate-fade-in
      "
    >
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
        Platform Snapshot
      </p>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Posts today</span>
          <span className="font-semibold text-gray-900">124</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Active discussions</span>
          <span className="font-semibold text-gray-900">38</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Fastest rising topic</span>
          <span className="font-semibold text-emerald-600">
            AI & Creativity
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniAnalyticsCard;

import { Link } from "react-router-dom";

const TOPICS = [
  "Destinations",
  "Local Cultures",
  "Nature & Wildlife",
  "Food Journeys",
  "Slow Living",
  "Photography",
  "Personal Stories",
];

const Header = () => {
  return (
    <header className="relative z-50">
      {/* Header Bar */}
      <div className="relative bg-[#081a1f]">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-rose-500/20 animate-gradient-x" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">

            {/* Brand */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-lg opacity-60 group-hover:opacity-100 transition" />
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-[#081a1f] font-extrabold shadow-xl group-hover:scale-105 transition">
                  W
                </div>
              </div>
              <span className="text-xl font-semibold tracking-wide text-white group-hover:text-cyan-300 transition">
                Wanderly
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-12 text-sm font-medium text-white/80">

              <span className="cursor-pointer hover:text-cyan-300 transition">
                Stories
              </span>

              {/* ===== EXPLORE WITH HOVER BRIDGE ===== */}
              <div className="relative group">
                {/* Trigger */}
                <span className="cursor-pointer hover:text-cyan-300 transition">
                  Explore
                </span>

                {/* Dropdown Wrapper */}
                <div
                  className="
                    absolute left-1/2 -translate-x-[60%] top-full
                    w-[min(760px,calc(100vw-3rem))]
                    opacity-0 pointer-events-none
                    group-hover:opacity-100 group-hover:pointer-events-auto
                    transition-opacity duration-300
                    z-50
                  "
                >
                  {/* 🔑 HOVER BRIDGE (INVISIBLE) */}
                  <div className="h-6" />

                  {/* Dropdown */}
                  <div
                    className="
                      relative rounded-3xl bg-white
                      shadow-[0_40px_80px_rgba(0,0,0,0.45)]
                      transform translate-y-4 scale-[0.98]
                      transition-all duration-500
                      group-hover:translate-y-0 group-hover:scale-100
                    "
                  >
                    {/* Soft color mist */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-100/60 via-white to-rose-100/50" />

                    {/* Content */}
                    <div className="relative p-10 grid grid-cols-3 gap-8">
                      {TOPICS.map((topic, index) => (
                        <div
                          key={topic}
                          style={{ animationDelay: `${index * 40}ms` }}
                          className="group/item cursor-pointer animate-fade-in"
                        >
                          <div className="text-base font-semibold text-gray-900 group-hover/item:text-teal-600 transition">
                            {topic}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Stories & experiences from around the world
                          </p>
                          <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover/item:w-10 transition-all duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== END ===== */}

              <span className="cursor-pointer hover:text-cyan-300 transition">
                Journals
              </span>

              <span className="cursor-pointer hover:text-cyan-300 transition">
                About
              </span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

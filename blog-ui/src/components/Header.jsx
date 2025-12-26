import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  const getData = async () => {
    try {
      const response = await api.get("/categories");
      if (response.status === 200) {
        setTopics([...response.data]);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Group categories by type
  const groupedTopics = topics.reduce((acc, curr) => {
    if (!acc[curr.type]) acc[curr.type] = [];
    acc[curr.type].push(curr);
    return acc;
  }, {});

  return (
    <header className="sticky top-0 z-50">
      {/* ================= TOP HEADER ================= */}
      <div className="relative bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x" />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-indigo-100/60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.05]"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  P
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Postify
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold">
              {["Posts", "Trending", "Topics"].map((item) => (
                <span
                  key={item}
                  className="relative cursor-pointer text-gray-700 hover:text-indigo-600 transition"
                >
                  {item}
                </span>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-700 hover:rotate-90 transition-transform duration-300"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    open
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ================= BLEND BRIDGE ================= */}
      <div className="relative h-4 bg-indigo-100 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-purple-200 to-transparent" />
      </div>

      {/* ================= BOTTOM HEADER ================= */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-indigo-500/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center h-14 overflow-visible no-scrollbar gap-1">
            {Object.entries(groupedTopics).map(([type, items], index) => (
              <div
                key={type}
                style={{ animationDelay: `${index * 40}ms` }}
                className="relative group px-5 h-9 flex items-center
                  text-sm font-semibold text-white/90
                  cursor-pointer transition-all duration-300
                  animate-fade-in"
              >
                {/* Accent bar */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-white rounded-full transition-all duration-300 group-hover:h-6" />

                {/* Hover background */}
                <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/15 transition-all duration-300" />

                {/* TYPE */}
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  {type}
                </span>

                {/* ================= DROPDOWN ================= */}
                <div
                  className="
                    absolute top-full left-0 mt-4 w-64
                    opacity-0 invisible
                    translate-y-2 scale-95
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:scale-100
                    transition-all duration-300 ease-out
                    z-50
                  "
                >
                  {/* Glow */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 blur-xl opacity-70" />

                  <div
                    className="
                      relative rounded-2xl
                      bg-white/90 backdrop-blur-xl
                      shadow-[0_30px_60px_rgba(0,0,0,0.2)]
                      p-4
                    "
                  >
                    {/* Header */}
                    <div className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">
                      {type}
                    </div>

                    {/* Items */}
                    <div className="space-y-1">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="
                            group/item relative px-4 py-2 rounded-xl
                            text-sm font-medium text-gray-800
                            cursor-pointer overflow-hidden
                          "
                        >
                          {/* Hover gradient */}
                          <span className="
                            absolute inset-0
                            bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
                            opacity-0 group-hover/item:opacity-100
                            transition
                          " />

                          <span className="relative z-10 flex items-center justify-between">
                            {item.name}
                            <span className="opacity-0 group-hover/item:opacity-100 transition text-indigo-500">
                              →
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-indigo-600 to-pink-600 px-4 py-6">
          <nav className="flex flex-col gap-5 text-white font-semibold">
            <span>Posts</span>
            <span>Trending</span>
            <span>Topics</span>

            <div className="pt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic.id}
                  className="px-3 py-1 text-xs rounded-full bg-white/90 text-gray-900"
                >
                  {topic.name}
                </span>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

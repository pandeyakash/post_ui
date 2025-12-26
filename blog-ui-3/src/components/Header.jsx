import { Link } from "react-router-dom";

const navItems = [
  { label: "Latest", path: "/" },
  { label: "Trending", path: "/trending" },
  { label: "Topics", path: "/topics" },
  { label: "Collections", path: "/collections" },
  { label: "About", path: "/about" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* BRAND */}
          <Link
            to="/"
            className="
              group flex items-center gap-2
              transition-transform duration-300
              hover:-translate-y-[1px]
            "
          >
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Aurum
            </span>
            <span className="text-gray-400 text-sm font-light">
              Posts
            </span>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="
                  relative group
                  text-sm font-medium
                  text-gray-600
                  transition-colors duration-300
                  hover:text-gray-900
                "
              >
                {item.label}

                {/* Underline reveal */}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-[1.5px] w-0
                    bg-gray-900
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            ))}
          </nav>

          {/* RIGHT ACTION (SUBTLE) */}
          <div className="flex items-center gap-4">
            <button
              className="
                text-sm font-medium
                text-gray-500
                hover:text-gray-900
                transition
              "
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;

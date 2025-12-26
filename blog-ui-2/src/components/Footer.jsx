import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#081a1f] text-white">

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-rose-500/20 animate-gradient-x" />

      {/* Glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-lg opacity-60" />
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-[#081a1f] font-extrabold shadow-xl">
                  W
                </div>
              </div>
              <span className="text-xl font-semibold tracking-wide">
                Wanderly
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Wanderly is a modern space for immersive stories, travel journals,
              cultures, and experiences from around the world.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-cyan-300">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {["Stories", "Destinations", "Cultures", "Journals"].map((item) => (
                <li
                  key={item}
                  className="group cursor-pointer hover:text-white transition"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-cyan-300">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {["About Us", "Contact", "Privacy Policy", "Terms"].map((item) => (
                <li
                  key={item}
                  className="group cursor-pointer hover:text-white transition"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-rose-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-cyan-300">
              Stay Inspired
            </h4>
            <p className="text-sm text-white/70">
              Get curated stories and insights delivered occasionally.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                className="absolute right-1 top-1 bottom-1 px-5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-[#081a1f] text-sm font-semibold hover:opacity-90 transition"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">

          <span>
            © {new Date().getFullYear()} Wanderly. All rights reserved.
          </span>

          <div className="flex gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <span
                key={social}
                className="cursor-pointer hover:text-white transition"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

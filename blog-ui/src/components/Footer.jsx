const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 py-14">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition" />
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold shadow-lg">
                    P
                  </div>
                </div>
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Postify
                </span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                A modern platform to discover, read, and explore high-quality posts
                across technology, design, and development.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500" />
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                {["Posts", "Trending", "Topics"].map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-2 text-gray-600 hover:text-indigo-600 cursor-pointer transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500" />
                Contact
              </h4>
              <p className="text-sm text-gray-600">contact@postify.com</p>
              <p className="text-sm text-gray-600 mt-1">India</p>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500" />
                Follow
              </h4>

              <div className="flex items-center gap-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <span
                    key={social}
                    className="px-3 py-1.5 text-sm rounded-full
                      bg-white/70 hover:bg-indigo-600
                      text-gray-700 hover:text-white
                      shadow-sm hover:shadow-[0_8px_20px_rgba(99,102,241,0.25)]
                      transition-all cursor-pointer"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-6 border-t border-gray-200/60 text-center text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700">Postify</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

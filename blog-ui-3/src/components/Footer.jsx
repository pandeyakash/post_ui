import { Link } from "react-router-dom";

const footerLinks = {
  Explore: ["Latest", "Trending", "Topics", "Collections"],
  About: ["Our Story", "Editorial Policy", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use"],
};

const Footer = () => {
  return (
    <footer className="bg-white mt-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Aurum
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              A curated space for thoughtful writing, slow stories,
              and meaningful perspectives worth your time.
            </p>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-sm font-medium text-gray-900 mb-5">
                {section}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="
                        group inline-block
                        text-sm text-gray-500
                        transition-colors duration-300
                        hover:text-gray-900
                      "
                    >
                      {item}
                      <span
                        className="
                          block h-[1px] w-0
                          bg-gray-900
                          transition-all duration-300
                          group-hover:w-full
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="pb-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Aurum. All rights reserved.
          </p>

          {/* SOCIAL / MICRO INTERACTION */}
          <div className="flex items-center gap-6">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="
                  text-sm text-gray-400
                  transition-all duration-300
                  hover:text-gray-900
                  hover:-translate-y-[1px]
                "
              >
                {social}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

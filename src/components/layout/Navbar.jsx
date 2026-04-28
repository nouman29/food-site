import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import habibiLogo from "../../assets/habibi-logo.jpg";

const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled && !mobileOpen
          ? "mx-6 sm:mx-12 md:mx-20 lg:mx-28 mt-3 sm:mt-4 rounded-full bg-white/20 backdrop-blur-3xl shadow-2xl border border-white/25"
          : mobileOpen
            ? "bg-white shadow-md rounded-none"
            : "bg-white shadow-md"
      }`}
    >
      {/* Frosted glass inner glow */}
      {scrolled && !mobileOpen && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 to-white/10 pointer-events-none" />
      )}

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-orange-200 shadow-lg"
            >
              <img
                src={habibiLogo}
                alt="Habibi Restaurant Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold font-display bg-gradient-to-r from-yellow-600 to-orange-600 text-transparent bg-clip-text"
            >
              Habibi
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                      : scrolled
                        ? "text-gray-800 hover:bg-white/60 hover:text-orange-600"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-orange-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden pb-6 border-t border-orange-100"
            >
              <div className="space-y-1 pt-3">
                {mainNavItems.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-full text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
                          : "text-gray-700 hover:bg-orange-50"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

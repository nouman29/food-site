import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import habibiLogo from "../../assets/habibi-logo.jpg";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const discoverLinks = [
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
];

const socialLinks = [
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    href: "https://www.facebook.com/habibirestaurantajk/",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
      </svg>
    ),
    label: "Instagram",
    href: "https://www.instagram.com/habibirestaurantajk/",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 4.441c2.076 0 2.322.008 3.141.045 3.79.173 5.336 1.77 5.509 5.559.018.401.025.698.025 1.955s-.007 1.554-.025 1.955c-.173 3.782-1.713 5.383-5.509 5.559-.819.037-1.065.045-3.141.045s-2.322-.008-3.141-.045c-3.796-.176-5.336-1.777-5.509-5.559-.018-.401-.025-.698-.025-1.955s.007-1.554.025-1.955c.173-3.789 1.719-5.386 5.509-5.559.819-.037 1.065-.045 3.141-.045zm0-2.255c-2.112 0-2.376.009-3.206.047-4.169.191-6.168 2.199-6.359 6.365-.019.386-.033.763-.033 1.402s.014 1.016.033 1.402c.191 4.163 2.187 6.175 6.359 6.365.83.038 1.094.047 3.206.047s2.376-.009 3.206-.047c4.173-.19 6.168-2.202 6.359-6.365.019-.386.033-.763.033-1.402s-.014-1.016-.033-1.402c-.191-4.166-2.19-6.174-6.359-6.365-.83-.038-1.094-.047-3.206-.047zm0 3.527c-2.447 0-4.431 1.984-4.431 4.431s1.984 4.431 4.431 4.431 4.431-1.984 4.431-4.431-1.984-4.431-4.431-4.431zm0 7.307c-1.588 0-2.876-1.287-2.876-2.876s1.288-2.876 2.876-2.876 2.876 1.287 2.876 2.876-1.288 2.876-2.876 2.876zm5.642-7.484c-.571 0-1.034.463-1.034 1.034s.463 1.034 1.034 1.034 1.034-.463 1.034-1.034-.463-1.034-1.034-1.034z" />
      </svg>
    ),
    label: "Threads",
    href: "https://www.threads.net/@habibirestaurantajk",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Subtle top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white">
                <img
                  src={habibiLogo}
                  alt="Habibi"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                Habibi
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Authentic fast food in Muzaffarabad, Azad Kashmir. Two locations
              serving the finest flavors.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Discover
            </h4>
            <ul className="space-y-3">
              {discoverLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-white text-xs font-medium mb-1">Habibi 1</p>
                <p>Neelum Road, Muzaffarabad</p>
                <p className="text-yellow-500/80 text-xs mt-0.5">
                  ★ 4.2 · 89+ reviews
                </p>
              </div>
              <div>
                <p className="text-white text-xs font-medium mb-1">Habibi 2</p>
                <p>Western Bypass, Sama Bandi</p>
                <p className="text-yellow-500/80 text-xs mt-0.5">
                  ★ 4.1 · 40+ reviews
                </p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <p>+92 309 0914960</p>
                <p className="text-yellow-500/80 text-xs mt-1">
                  Open Daily 11AM - 3AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} Habibi Restaurant. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Crafted by <span className="text-red-500">A Azad </span> in Kashmir
          </span>
        </div>
      </div>
    </footer>
  );
}

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
  { to: "/team", label: "Our Team" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
];

const socialLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "Facebook",
    href: "https://www.facebook.com/habibirestaurantajk/",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    href: "https://www.instagram.com/habibirestaurantajk/",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.186 4.441c2.076 0 2.322.008 3.141.045 3.79.173 5.336 1.77 5.509 5.559.018.401.025.698.025 1.955s-.007 1.554-.025 1.955c-.173 3.782-1.713 5.383-5.509 5.559-.819.037-1.065.045-3.141.045s-2.322-.008-3.141-.045c-3.796-.176-5.336-1.777-5.509-5.559-.018-.401-.025-.698-.025-1.955s.007-1.554.025-1.955c.173-3.789 1.719-5.386 5.509-5.559.819-.037 1.065-.045 3.141-.045zm0-2.255c-2.112 0-2.376.009-3.206.047-4.169.191-6.168 2.199-6.359 6.365-.019.386-.033.763-.033 1.402s.014 1.016.033 1.402c.191 4.163 2.187 6.175 6.359 6.365.83.038 1.094.047 3.206.047s2.376-.009 3.206-.047c4.173-.19 6.168-2.202 6.359-6.365.019-.386.033-.763.033-1.402s-.014-1.016-.033-1.402c-.191-4.166-2.19-6.174-6.359-6.365-.83-.038-1.094-.047-3.206-.047zm0 3.527c-2.447 0-4.431 1.984-4.431 4.431s1.984 4.431 4.431 4.431 4.431-1.984 4.431-4.431-1.984-4.431-4.431-4.431zm0 7.307c-1.588 0-2.876-1.287-2.876-2.876s1.288-2.876 2.876-2.876 2.876 1.287 2.876 2.876-1.288 2.876-2.876 2.876zm5.642-7.484c-.571 0-1.034.463-1.034 1.034s.463 1.034 1.034 1.034 1.034-.463 1.034-1.034-.463-1.034-1.034-1.034z" />
      </svg>
    ),
    label: "Threads",
    href: "https://www.threads.net/@habibirestaurantajk",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%]"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand - 5 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-xl rounded-full"
                  />
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-yellow-400/50 shadow-2xl bg-white">
                    <img
                      src={habibiLogo}
                      alt="Habibi Restaurant Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
                <div>
                  <h2 className="text-3xl font-bold font-display">
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text">
                      Habibi
                    </span>
                  </h2>
                  <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mt-1">
                    Restaurant • Muzaffarabad
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                Serving authentic flavors in the heart of Muzaffarabad, Azad
                Kashmir. Two locations offering premium BBQ and family dining
                experiences with scenic views of the Kashmir valley.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { number: "130+", label: "Reviews" },
                  { number: "2", label: "Locations" },
                  { number: "4.2★", label: "Rating" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-yellow-500/30 transition-all duration-300 group"
                  >
                    <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-[10px] mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links - 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500 mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
                Menu
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="text-yellow-500/50 group-hover:text-yellow-500 text-xs transition-colors"
                      >
                        •
                      </motion.span>
                      <motion.span whileHover={{ x: 3 }} className="text-sm">
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Discover - 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500 mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
                Discover
              </h3>
              <ul className="space-y-3">
                {discoverLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-300"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2 }}
                        className="text-yellow-500/50 group-hover:text-yellow-500 text-xs transition-colors"
                      >
                        •
                      </motion.span>
                      <motion.span whileHover={{ x: 3 }} className="text-sm">
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact - 3 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-500 mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-gradient-to-r from-yellow-500 to-transparent" />
                Locations
              </h3>

              <div className="space-y-3">
                {/* Location 1 */}
                <motion.div
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] hover:border-yellow-500/20 transition-all duration-300 cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 text-sm group-hover:scale-110 transition-transform">
                    🍖
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-medium truncate">
                      Habibi 1 - BBQ
                    </p>
                    <p className="text-gray-500 text-[10px] leading-relaxed">
                      Neelum Road, Muzaffarabad
                    </p>
                    <p className="text-yellow-500/70 text-[10px]">
                      ★ 4.2 · 89+ reviews
                    </p>
                  </div>
                </motion.div>

                {/* Location 2 */}
                <motion.div
                  whileHover={{
                    x: 3,
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] hover:border-yellow-500/20 transition-all duration-300 cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 text-sm group-hover:scale-110 transition-transform">
                    🍽️
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-medium truncate">
                      Habibi 2 - Family
                    </p>
                    <p className="text-gray-500 text-[10px] leading-relaxed">
                      Western Bypass, Sama Bandi
                    </p>
                    <p className="text-yellow-500/70 text-[10px]">
                      ★ 4.1 · 40+ reviews
                    </p>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/[0.03] to-orange-500/[0.03] border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center flex-shrink-0 text-sm">
                    📞
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-xs font-medium">Contact</p>
                    <p className="text-gray-400 text-[10px]">+92 58224 42714</p>
                    <p className="text-yellow-400/70 text-[10px] mt-0.5">
                      Open Daily 12PM - 11PM
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-6 border-t border-white/[0.04] relative"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Copyright */}
            <div className="flex items-center gap-3 text-[10px] text-gray-600">
              <span>© {new Date().getFullYear()} Habibi Restaurant</span>
              <span className="text-gray-800">•</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Privacy
              </a>
              <span className="text-gray-800">•</span>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Terms
              </a>
            </div>

            {/* Social Icons - WITH REAL LINKS */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-500 hover:to-orange-600 hover:border-transparent transition-all duration-300 text-gray-500 hover:text-white group shadow-lg hover:shadow-orange-500/20"
                  title={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Credits */}
            <div className="flex items-center gap-1.5 text-[10px] text-gray-600">
              <span>Crafted by</span>
              <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                A Azad
              </span>
              <span>in</span>
              <span className="font-medium text-gray-500">Kashmir</span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500 text-xs ml-0.5"
              >
                ❤️
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

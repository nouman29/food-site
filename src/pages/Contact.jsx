import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import contact1 from "../assets/contact-1.jpg";
import contact2 from "../assets/contact-2.jpg";
import contact3 from "../assets/contact-3.jpg";

const locations = [
  {
    icon: "🍔",
    title: "Habibi Restaurant 1",
    subtitle: "Fast Food",
    address: "Neelum Road, Muzaffarabad",
    city: "Azad Jammu & Kashmir 13100",
    rating: "4.2-4.3 ★",
    reviews: "89+ reviews",
    type: "Fast Food",
    tagline: "Home of the finest fast food in town",
    image: contact2,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8530820085015!2d73.4681878!3d34.3636787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e11b9c0a1e7e3b%3A0x2c101e0a52e3cab1!2sNeelum%20Road%2C%20Muzaffarabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  },
  {
    icon: "🍟",
    title: "Habibi Restaurant 2",
    subtitle: "Fast Food",
    address: "Western Bypass, Sama Bandi",
    city: "Muzaffarabad, AJK 13100",
    rating: "4.1 ★",
    reviews: "40-55+ reviews",
    type: "Fast Food",
    tagline: "A warm space for family gatherings",
    image: contact3,
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.123456789!2d73.4639811!3d34.3719847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e11b9c0a1e7e3b%3A0x2c101e0a52e3cab2!2sWestern%20Bypass%2C%20Muzaffarabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s",
  },
];

const contactDetails = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Call Us",
    lines: ["+92 309 0914960"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Us",
    lines: ["habibirestaurantajk@gmail.com"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Opening Hours",
    lines: ["Mon - Sun", "11:00 AM - 3:00 AM"],
    color: "from-yellow-500 to-orange-600",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "https://www.facebook.com/habibirestaurantajk/",
    gradient: "from-blue-600 to-blue-800",
    handle: "@habibirestaurantajk",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
      </svg>
    ),
    href: "https://www.instagram.com/habibirestaurantajk/",
    gradient: "from-purple-600 via-pink-600 to-orange-600",
    handle: "@habibirestaurantajk",
  },
  {
    name: "Threads",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.252 1.427H4.748A3.321 3.321 0 001.427 4.748v14.504a3.321 3.321 0 003.321 3.321h14.504a3.321 3.321 0 003.321-3.321V4.748a3.321 3.321 0 00-3.321-3.321zm-7.252 18.14c-4.1 0-7.433-3.333-7.433-7.433s3.333-7.433 7.433-7.433 7.433 3.333 7.433 7.433-3.333 7.433-7.433 7.433zm4.218-7.433c0 2.333-1.885 4.218-4.218 4.218s-4.218-1.885-4.218-4.218 1.885-4.218 4.218-4.218 4.218 1.885 4.218 4.218zm1.09-4.387a1.054 1.054 0 110-2.108 1.054 1.054 0 010 2.108z" />
      </svg>
    ),
    href: "https://www.threads.com/@habibirestaurantajk",
    gradient: "from-gray-800 to-black",
    handle: "@habibirestaurantajk",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contact1}
            alt="Muzaffarabad Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm mb-6 border border-white/20"
            >
              📍 Muzaffarabad, Azad Kashmir
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white font-display mb-4"
            >
              Visit Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-white/80 max-w-xl mx-auto"
            >
              Two locations nestled in the scenic Kashmir valley, ready to
              welcome you
            </motion.p>
          </div>
        </div>
      </section>

      {/* Two Location Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-10 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md bg-yellow-500/90 text-white">
                    {location.subtitle}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-white font-bold text-lg">
                    {location.rating}
                  </span>
                  <span className="text-white/70 text-sm">
                    · {location.reviews}
                  </span>
                </div>
              </div>

              <div className="p-8 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 1.5,
                  }}
                  className="text-4xl mb-3 inline-block"
                >
                  {location.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 font-display mb-1">
                  {location.title}
                </h3>
                <p className="text-orange-600 text-sm font-medium mb-3">
                  {location.tagline}
                </p>

                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm">{location.address}</p>
                    <p className="text-sm text-gray-400">{location.city}</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-56 shadow-md">
                  <iframe
                    title={location.title}
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 bg-[#0d0814]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Reach Out to Us" light={true} />

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-5 border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${detail.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {detail.title}
                    </h4>
                    {detail.lines.map((line) => (
                      <p key={line} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-5 group cursor-pointer border border-gray-100"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {social.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{social.handle}</p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center text-white px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Experience Habibi?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Visit either of our two Muzaffarabad locations and discover why
            we're rated 4.2★ by over 130 guests
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://wa.me/923097863070"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:bg-[#20bd5a] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

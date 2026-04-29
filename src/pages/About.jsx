import { motion } from "framer-motion";
import ChromaGrid from "../components/ui/ChromaGrid";
import aboutImg from "../assets/about.jpg";
import contact2 from "../assets/contact-2.jpg";
import contact3 from "../assets/contact-3.jpg";

const stats = [
  { number: "130+", label: "Reviews Across Locations" },
  { number: "2", label: "Locations in Muzaffarabad" },
  { number: "4.2★", label: "Average Rating" },
];

const locationItems = [
  {
    image: contact2,
    title: "Habibi 1",
    subtitle: "Fast Food",
    handle: "★ 4.2-4.3 · 89+ reviews",
    location: "Neelum Road, Muzaffarabad",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #047481)",
    url: "https://maps.google.com/?q=Neelum+Road+Muzaffarabad",
  },
  {
    image: contact3,
    title: "Habibi 2",
    subtitle: "Fast Food",
    handle: "★ 4.1 · 40-55+ reviews",
    location: "Western Bypass, Sama Bandi",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #047481)",
    url: "https://maps.google.com/?q=Western+Bypass+Sama+Bandi+Muzaffarabad",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0d0814] via-[#1a1025] to-[#0d0814] py-24 md:py-32 overflow-visible">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-purple-300 text-sm mb-6"
          >
            Our Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white font-display mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Serving authentic fast food to the people of Muzaffarabad, Azad
            Kashmir
          </motion.p>
        </div>

        {/* Stats Cards - Half in hero, half out */}
        <div className="absolute -bottom-12 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-shadow"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text font-display mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-[#f3eff7] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={aboutImg}
                    alt="Muzaffarabad valley view"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white font-bold text-lg">
                      Nestled in the Kashmir Valley
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  Since 2015
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mt-2 mb-6">
                  Two Locations,
                  <br />
                  One Passion
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Habibi Restaurant began with a simple mission: to bring
                  delicious fast food to the beautiful city of Muzaffarabad,
                  Azad Kashmir. What started at our Neelum Road location quickly
                  grew into a beloved brand, leading to our second restaurant
                  near the Western Bypass in Sama Bandi.
                </p>
                <p>
                  Today, we serve both locals and visitors exploring the scenic
                  Kashmir valley. Both our locations specialize in
                  mouth-watering fast food - from crispy burgers and loaded
                  fries to hand-tossed pizzas and signature sides.
                </p>
                <p>
                  Every dish we serve reflects the warmth of Kashmiri
                  hospitality and our commitment to using the freshest
                  ingredients. Whether you're a local regular or a traveler
                  discovering Muzaffarabad, you'll find a welcoming table and
                  satisfying meal at Habibi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-24 md:py-32 bg-[#0d0814] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mt-2 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Two convenient locations in Muzaffarabad, ready to serve you the
              best fast food in town
            </p>
          </div>

          <div className="flex justify-center items-center min-h-[450px]">
            <ChromaGrid
              items={locationItems}
              radius={350}
              damping={0.4}
              fadeOut={0.5}
              ease="power3.out"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Ready to Visit Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Find us on Google Maps or give us a call. We're open daily from 11AM
            to 3AM.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Neelum+Road+Muzaffarabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import aboutImg from "../assets/about.jpg";

const stats = [
  { number: "130+", label: "Reviews Across Locations" },
  { number: "2", label: "Locations in Muzaffarabad" },
  { number: "4.2★", label: "Average Rating" },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24 bg-gradient-to-b from-[#f3eff7] via-[#ede4f5] to-[#f3eff7]"
    >
      <SectionTitle
        title="Our Story"
        subtitle="Serving authentic fast food to the people of Muzaffarabad, Azad Kashmir"
      />

      <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl w-3/4 md:w-full max-h-[600px]"
          >
            <img
              src={aboutImg}
              alt="Muzaffarabad valley view with restaurant ambiance"
              className="w-full h-[600px] object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6"
            >
              <p className="text-white font-bold text-lg">
                Nestled in the Kashmir Valley
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 font-display">
              Two Locations, One Passion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Habibi Restaurant began with a simple mission: to bring delicious
              fast food to the beautiful city of Muzaffarabad, Azad Kashmir.
              What started at our Neelum Road location quickly grew into a
              beloved brand, leading to our second restaurant near the Western
              Bypass in Sama Bandi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve both locals and visitors exploring the scenic
              Kashmir valley. Both our locations specialize in mouth-watering
              fast food - from crispy burgers and loaded fries to hand-tossed
              pizzas and signature sides. Whether you're grabbing a quick bite
              or dining with family, we have something for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every dish we serve reflects the warmth of Kashmiri hospitality
              and our commitment to using the freshest ingredients. Whether
              you're a local regular or a traveler discovering Muzaffarabad,
              you'll find a welcoming table and satisfying meal at Habibi.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 font-display"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Location Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="grid md:grid-cols-2 gap-8 mt-20"
      >
        {[
          {
            icon: "🍔",
            name: "Habibi Restaurant 1",
            location: "Neelum Road, Muzaffarabad",
            type: "Fast Food",
            description:
              "Our original location famous for mouth-watering burgers, crispy fries, hand-tossed pizzas, and signature chicken bread. A favorite spot for quick bites and casual dining in the heart of the city.",
            rating: "4.2-4.3 ★",
            reviews: "89+ reviews",
          },
          {
            icon: "🍟",
            name: "Habibi Restaurant 2",
            location: "Western Bypass, Sama Bandi",
            type: "Fast Food",
            description:
              "Our second location offering the same beloved fast food menu in a comfortable setting. Perfect for family meals, group hangouts, and satisfying your cravings any time of the day.",
            rating: "4.1 ★",
            reviews: "40-55+ reviews",
          },
        ].map((location, i) => (
          <motion.div
            key={location.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl">
                {location.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-display">
                  {location.name}
                </h3>
                <p className="text-orange-600 text-sm font-medium">
                  {location.type}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {location.location}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-600 font-semibold text-sm">
                    {location.rating}
                  </span>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-500 text-xs">
                    {location.reviews}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {location.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

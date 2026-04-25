import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const services = [
  {
    icon: "🍽️",
    title: "Dine-In",
    desc: "Premium ambiance for family and friends. Enjoy our cozy and elegant seating.",
    features: ["Air-conditioned hall", "Family seating", "Background music"],
  },
  {
    icon: "🛵",
    title: "Delivery",
    desc: "Hot meals delivered to your doorstep. Fast and reliable service.",
    features: ["30-min delivery", "Contactless option", "Live tracking"],
  },
  {
    icon: "🎉",
    title: "Events",
    desc: "Birthdays, parties, and corporate events made special with our catering.",
    features: ["Custom menus", "Decoration", "Dedicated staff"],
  },
  {
    icon: "📦",
    title: "Takeaway",
    desc: "Quick pickup for on-the-go meals. Order ahead and skip the wait.",
    features: ["Online ordering", "Express pickup", "Secure packaging"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Services"
        subtitle="Everything we offer to make your experience special"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.span
              className="text-6xl block mb-6 text-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.span>
            <h3 className="text-xl font-bold mb-3 text-center font-display text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
              {service.desc}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center text-sm text-gray-500"
                >
                  <span className="text-orange-500 mr-2">✓</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

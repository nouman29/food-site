import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`max-w-2xl mx-auto text-lg ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 mt-6 rounded-full ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

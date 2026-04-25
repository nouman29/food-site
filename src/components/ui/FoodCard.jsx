import { motion } from "framer-motion";

export default function FoodCard({ image, name, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 group cursor-pointer"
    >
      <div className="relative overflow-hidden h-56">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-6"
        >
          <motion.span
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            className="text-white font-semibold px-4 py-2 border-2 border-white rounded-full text-sm"
          >
            View Details
          </motion.span>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

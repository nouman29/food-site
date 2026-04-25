import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    title: "Classic Burger",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    title: "Margherita Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    title: "Loaded Fries",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800",
    title: "Cheese Burger",
  },
  {
    src: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=800",
    title: "Chicken Wings",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    title: "Our Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    title: "Pepperoni Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800",
    title: "Zinger Burger",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    title: "Double Patty",
  },
  {
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800",
    title: "Fresh Drinks",
  },
  {
    src: "https://images.unsplash.com/photo-1573821663912-6df455f9a45d?w=800",
    title: "BBQ Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800",
    title: "Onion Rings",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Gallery"
        subtitle="A visual journey through our delicious creations"
      />

      {/* Filter Pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-3 mb-12 flex-wrap"
      >
        {["All", "Burgers", "Pizza", "Sides", "Drinks"].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === "All"
                ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-orange-50 shadow-md"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.03, zIndex: 10 }}
            onClick={() => setSelectedImage(img)}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
              i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            } ${i % 7 === 0 ? "lg:col-span-2" : ""}`}
          >
            <motion.img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4"
            >
              <div>
                <p className="text-white font-semibold text-sm">{img.title}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-yellow-400 text-xs mt-1"
                >
                  View Full Size ↗
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl z-10"
              >
                ✕
              </motion.button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white text-center mt-4 text-lg font-display">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

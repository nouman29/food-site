import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import foodCard1 from "../assets/food-card-1.jpg";
import foodCard2 from "../assets/food-card-2.jpg";
import foodCard3 from "../assets/food-card-3.jpg";
import contact1 from "../assets/contact-1.jpg";
import contact2 from "../assets/contact-2.jpg";
import contact3 from "../assets/contact-3.jpg";
import aboutImg from "../assets/about.jpg";
import premiumQuality from "../assets/premium-quality.jpg";
import expertChefs from "../assets/expert-chefs.jpg";
import artisticRepresentation from "../assets/artistic-representation.jpg";
import exceptionalService from "../assets/exceptional-service.jpg";
import signatureCreations from "../assets/signature-creations.jpg";

const galleryImages = [
  { src: foodCard1, title: "Chicken Burger", category: "Food" },
  { src: foodCard2, title: "Chicken Roll", category: "Food" },
  { src: foodCard3, title: "Chicken Pizza", category: "Food" },
  { src: contact1, title: "Restaurant View", category: "Restaurant" },
  { src: contact2, title: "Enjoying Bazinga", category: "Restaurant" },
  { src: contact3, title: "Cheese Pizza", category: "Food" },
  { src: aboutImg, title: "Chocolate Shake", category: "Food" },
  { src: premiumQuality, title: "Premium Ingredients", category: "Restaurant" },
  {
    src: expertChefs,
    title: "Our Expert Chefs",
    category: "Behind the Scenes",
  },
  {
    src: artisticRepresentation,
    title: "Artistic Presentation",
    category: "Restaurant",
  },
  {
    src: exceptionalService,
    title: "Exceptional Service",
    category: "Behind the Scenes",
  },
  {
    src: signatureCreations,
    title: "Signature Creations",
    category: "Restaurant",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Food", "Restaurant", "Behind the Scenes"];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

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
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-orange-50 shadow-md"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredImages.map((img, i) => (
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
            <img
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

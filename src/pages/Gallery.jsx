import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Masonry from "../components/sections/Masonry";
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
  {
    id: "1",
    img: foodCard1,
    title: "Chicken Burger",
    category: "Food",
    height: 350,
  },
  {
    id: "2",
    img: foodCard2,
    title: "Chicken Roll",
    category: "Food",
    height: 280,
  },
  {
    id: "3",
    img: foodCard3,
    title: "Chicken Pizza",
    category: "Food",
    height: 400,
  },
  {
    id: "4",
    img: contact1,
    title: "Restaurant View",
    category: "Restaurant",
    height: 320,
  },
  {
    id: "5",
    img: contact2,
    title: "Enjoying Bazinga",
    category: "Restaurant",
    height: 380,
  },
  {
    id: "6",
    img: contact3,
    title: "Cheese Pizza",
    category: "Food",
    height: 300,
  },
  {
    id: "7",
    img: aboutImg,
    title: "Chocolate Shake",
    category: "Food",
    height: 450,
  },
  {
    id: "8",
    img: premiumQuality,
    title: "Premium Ingredients",
    category: "Restaurant",
    height: 260,
  },
  {
    id: "9",
    img: expertChefs,
    title: "Our Expert Chefs",
    category: "Behind the Scenes",
    height: 360,
  },
  {
    id: "10",
    img: artisticRepresentation,
    title: "Artistic Presentation",
    category: "Restaurant",
    height: 340,
  },
  {
    id: "11",
    img: exceptionalService,
    title: "Exceptional Service",
    category: "Behind the Scenes",
    height: 300,
  },
  {
    id: "12",
    img: signatureCreations,
    title: "Signature Creations",
    category: "Restaurant",
    height: 420,
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

      {/* Masonry Gallery */}
      <Masonry
        items={filteredImages}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
        onClick={(item) => setSelectedImage(item)}
      />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-white/70 hover:text-white text-3xl z-10"
              >
                ✕
              </motion.button>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <p className="text-white text-center mt-4 text-xl font-display font-bold">
                {selectedImage.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

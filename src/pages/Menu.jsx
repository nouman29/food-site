import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import FlyingPosters from "../components/sections/FlyingPosters";
import burgers from "../assets/burgers.jpg";
import pizza from "../assets/pizzas.jpg";
import steaks from "../assets/steaks.jpg";
import sides from "../assets/sides.jpg";
import kidsMeals from "../assets/kids-meals.jpg";
import platters from "../assets/platters.jpg";

const menuItems = [
  { title: "Burgers", image: burgers },
  { title: "Pizzas", image: pizza },
  { title: "Steaks", image: steaks },
  { title: "Sides", image: sides },
  { title: "Kids Meals", image: kidsMeals },
  { title: "Platters", image: platters },
];

const posterImages = [burgers, pizza, steaks, sides, kidsMeals, platters];

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Menu"
        subtitle="Explore our complete range of delicious offerings"
      />

      {/* Menu Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.title}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(item)}
            className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg border border-gray-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
          >
            {item.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Flying Posters Animation */}
      <div style={{ height: "1600px", position: "relative" }}>
        <FlyingPosters
          items={posterImages}
          planeWidth={600}
          planeHeight={900}
          distortion={3}
          scrollEase={0.01}
          cameraFov={45}
          cameraZ={20}
        />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-white/70 hover:text-white text-3xl transition-colors z-10"
              >
                ✕
              </motion.button>

              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white text-center mt-6 text-2xl font-display font-bold"
              >
                {selectedImage.title}
              </motion.p>

              {/* Navigation arrows */}
              <div className="flex justify-center gap-4 mt-6">
                {menuItems.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(item);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedImage.title === item.title
                        ? "bg-orange-500 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

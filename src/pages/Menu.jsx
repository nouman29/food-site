import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import BorderGlow from "../components/ui/BorderGlow";
import burgers from "../assets/burgers.jpg";
import pizza from "../assets/pizzas.jpg";
import steaks from "../assets/steaks.jpg";
import sides from "../assets/sides.jpg";
import kidsMeals from "../assets/kids-meals.jpg";
import platters from "../assets/platters.jpg";

const menuItems = [
  {
    title: "Burgers",
    image: burgers,
    colors: ["#f59e0b", "#f97316", "#ef4444"],
  },
  { title: "Pizzas", image: pizza, colors: ["#ef4444", "#f97316", "#f59e0b"] },
  { title: "Steaks", image: steaks, colors: ["#10b981", "#34d399", "#6ee7b7"] },
  { title: "Sides", image: sides, colors: ["#f97316", "#fb923c", "#fbbf24"] },
  {
    title: "Kids Meals",
    image: kidsMeals,
    colors: ["#8b5cf6", "#a78bfa", "#c4b5fd"],
  },
  {
    title: "Platters",
    image: platters,
    colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
  },
];

// Layout pattern: 2-1-2-1
const layoutPattern = [2, 1, 2, 1];

export default function Menu() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Split items into rows based on pattern
  const rows = [];
  let itemIndex = 0;
  for (const count of layoutPattern) {
    if (itemIndex >= menuItems.length) break;
    rows.push(menuItems.slice(itemIndex, itemIndex + count));
    itemIndex += count;
  }

  return (
    <div className="bg-[#0d0814] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Our Menu"
          subtitle="Explore our complete range of delicious offerings"
          light={true}
        />

        {/* Menu Grid - 2-1-2-1 pattern */}
        <div className="mt-12 space-y-8">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: rowIndex * 0.15 }}
              className={`grid gap-8 ${
                row.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              } ${row.length === 1 ? "max-w-2xl mx-auto" : ""}`}
            >
              {row.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedImage(item)}
                  className="cursor-pointer"
                >
                  <BorderGlow
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#12081c"
                    borderRadius={16}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={item.colors}
                  >
                    <div className="p-4">
                      {/* Full Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

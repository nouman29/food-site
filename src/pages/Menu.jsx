import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import FoodCard from "../components/ui/FoodCard";

const menuItems = [
  {
    category: "Signature Burgers",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        name: "Classic Burger",
        description:
          "Premium beef patty with fresh lettuce, tomato, and signature sauce crafted by our head chef",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600",
        name: "Cheese Lover",
        description:
          "Double cheese, caramelized onions, and our secret blend of spices",
      },
      {
        image:
          "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600",
        name: "Crispy Chicken",
        description:
          "Golden crispy chicken fillet with tangy coleslaw and spicy mayo",
      },
    ],
  },
  {
    category: "Artisan Pizzas",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
        name: "Margherita Classic",
        description:
          "Fresh mozzarella, garden basil, and San Marzano tomatoes on stone-baked crust",
      },
      {
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
        name: "Pepperoni Supreme",
        description:
          "Loaded with premium pepperoni and a blend of Italian cheeses",
      },
      {
        image:
          "https://images.unsplash.com/photo-1573821663912-6df455f9a45d?w=600",
        name: "BBQ Chicken",
        description: "Grilled chicken, smoky BBQ sauce, and caramelized onions",
      },
    ],
  },
  {
    category: "Sides & Starters",
    items: [
      {
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
        name: "French Fries",
        description: "Hand-cut potatoes fried to golden perfection",
      },
      {
        image:
          "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600",
        name: "Chicken Wings",
        description: "Crispy wings glazed with our house-made BBQ sauce",
      },
      {
        image:
          "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600",
        name: "Onion Rings",
        description: "Thick-cut onions in crispy seasoned batter",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Signature Burgers");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Portfolio"
        subtitle="A curated selection of our finest culinary creations"
      />

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center gap-4 mb-16 flex-wrap"
      >
        {menuItems.map((cat) => (
          <motion.button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === cat.category
                ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-orange-50 shadow-md"
            }`}
          >
            {cat.category}
          </motion.button>
        ))}
      </motion.div>

      {/* Portfolio Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems
            .find((cat) => cat.category === activeCategory)
            ?.items.map((item, i) => (
              <FoodCard key={item.name} {...item} delay={i * 0.1} />
            ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

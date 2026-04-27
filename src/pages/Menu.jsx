import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import burgers from "../assets/burgers.jpg";
import pizza from "../assets/pizzas.jpg";
import steaks from "../assets/steaks.jpg";
import sides from "../assets/sides.jpg";
import kidsMeals from "../assets/kids-meals.jpg";
import platters from "../assets/platters.jpg";

const menuCards = [
  { title: "Pizzas", image: pizza, side: "left" },
  { title: "Burgers", image: burgers, side: "right" },
  { title: "Steaks", image: steaks, side: "left" },
  { title: "Sides", image: sides, side: "right" },
  { title: "Kids Meals", image: kidsMeals, side: "left" },
  { title: "Platters", image: platters, side: "right" },
];

// 🔥 Parent container for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// 🎯 Card animation
const cardVariants = {
  hidden: (side) => ({
    x: side === "left" ? -80 : 80,
    opacity: 0,
    scale: 0.95,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Menu"
        subtitle="Explore our complete range of delicious offerings"
      />

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {menuCards.map((item, index) => {
          const isLastAndOdd =
            index === menuCards.length - 1 && menuCards.length % 2 !== 0;

          return (
            <motion.div
              key={item.title}
              custom={item.side}
              variants={cardVariants}
              className={`group cursor-pointer ${
                isLastAndOdd ? "col-span-2 max-w-[50%] mx-auto" : ""
              }`}
            >
              {/* Image with hover */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden shadow-md rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500"
                />
              </motion.div>

              {/* Title */}
              <div className="py-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 font-display">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

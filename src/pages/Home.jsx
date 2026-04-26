import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import FoodCard from "../components/ui/FoodCard";
import HeroSection from "../components/sections/HeroSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section Component */}
      <HeroSection />

      {/* Featured Portfolio Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Signature Creations"
            subtitle="A glimpse into our portfolio of meticulously crafted dishes"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FoodCard
              image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
              name="Classic Burger"
              description="Juicy beef patty with fresh lettuce, tomatoes, and house-made sauce - a testament to quality ingredients"
              delay={0}
            />
            <FoodCard
              image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
              name="Margherita Pizza"
              description="Stone-baked perfection with fresh mozzarella, basil, and San Marzano tomatoes"
              delay={0.2}
            />
            <FoodCard
              image="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop"
              name="Loaded Fries"
              description="Crispy golden fries topped with premium cheese and fresh jalapeños"
              delay={0.4}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button to="/menu">
              <span className="flex items-center gap-2">
                View Full Portfolio
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Features */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Sets Us Apart"
            subtitle="Our commitment to excellence in every aspect"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🍔",
                title: "Premium Quality",
                desc: "Only the finest ingredients sourced locally and globally",
              },
              {
                icon: "👨‍🍳",
                title: "Expert Chefs",
                desc: "Years of culinary mastery and creative expertise",
              },
              {
                icon: "📸",
                title: "Artistic Presentation",
                desc: "Every dish is a visual masterpiece",
              },
              {
                icon: "🌟",
                title: "Exceptional Service",
                desc: "Dedicated team ensuring memorable experiences",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 rounded-2xl hover:bg-orange-50 transition-colors duration-300 bg-white shadow-md hover:shadow-xl"
              >
                <motion.span
                  className="text-5xl mb-4 block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio CTA - About Us */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=600&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Discover Our Story
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Learn about our journey, our passion for food, and the team behind
            these culinary creations.
          </p>
          <Button to="/about" variant="secondary">
            About Us
          </Button>
        </motion.div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import FoodCard from "../components/ui/FoodCard";

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
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          {/* Multiple overlay layers for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-yellow-900/20" />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 z-[1] opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-36 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium mb-6 border border-white/20"
            >
              🍽️ Premium Food Portfolio
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display text-white"
            >
              Crafting Culinary
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Excellence
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 mb-10 max-w-xl leading-relaxed"
            >
              A showcase of our passion for food, quality ingredients, and
              exceptional service. Browse our portfolio of signature dishes and
              culinary creations.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button to="/menu">
                <span className="flex items-center gap-2">
                  Explore Our Menu
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
              <Button to="/gallery" variant="outline">
                <span className="flex items-center gap-2">
                  View Gallery
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating decorative food images */}
          <motion.div
            initial={{ x: 200, opacity: 0, rotate: 20 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block z-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop"
                alt="Premium Burger"
                className="relative w-56 h-56 object-cover rounded-full border-4 border-white/30 shadow-2xl backdrop-blur-sm"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0, rotate: -20 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            className="absolute right-44 top-1/4 hidden lg:block z-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-3xl rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop"
                alt="Artisan Pizza"
                className="relative w-40 h-40 object-cover rounded-full border-4 border-white/20 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs uppercase tracking-wider">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 w-full z-10">
          <svg viewBox="0 0 1440 120" fill="white">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
          </svg>
        </div>
      </section>

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

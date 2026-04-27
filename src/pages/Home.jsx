import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import FoodCard from "../components/ui/FoodCard";
import HeroSection from "../components/sections/HeroSection";
import signatureCreations from "../assets/signature-creations.jpg";
import foodCard1 from "../assets/food-card-1.jpg";
import foodCard2 from "../assets/food-card-2.jpg";
import foodCard3 from "../assets/food-card-3.jpg";
import Carousel from "../components/sections/Carousel";

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

      {/* Signature Creations Section with Background Image */}
      <section className="relative py-24 -mt-[2px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={signatureCreations}
            alt="Signature Creations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Signature Creations"
            subtitle="A glimpse into our portfolio of meticulously crafted dishes"
            light={true}
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <FoodCard
              image={foodCard1}
              name="Chicken Burger"
              description="Juicy chicken patty with fresh lettuce, tomatoes, and our secret sauce in a toasted bun"
              delay={0}
            />
            <FoodCard
              image={foodCard2}
              name="Chicken Wrap"
              description="Soft wrap stuffed with seasoned chicken, creamy sauce, and melted cheese"
              delay={0.2}
            />
            <FoodCard
              image={foodCard3}
              name="Chicken Pizza"
              description="Tender chicken pieces with tangy sauce, bell peppers, and premium cheese blend"
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
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Sets Us Apart"
            subtitle="Our commitment to excellence in every aspect"
          />
          <Carousel />
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

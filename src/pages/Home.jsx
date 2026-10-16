import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import FoodCard from "../components/ui/FoodCard";
import HeroSection from "../components/sections/HeroSection";
import CircularGallery from "../components/sections/CircularGallery";
import signatureCreations from "../assets/signature-creations.jpg";
import setsUsApart from "../assets/sets-us-apart.jpg";
import foodCard1 from "../assets/food-card-1.jpg";
import foodCard2 from "../assets/food-card-2.jpg";
import foodCard3 from "../assets/food-card-3.jpg";
import premiumQuality from "../assets/premium-quality.jpg";
import expertChefs from "../assets/expert-chefs.jpg";
import artisticRepresentation from "../assets/artistic-representation.jpg";
import exceptionalService from "../assets/exceptional-service.jpg";

const galleryItems = [
  { image: premiumQuality, text: "Premium Quality" },
  { image: expertChefs, text: "Expert Chefs" },
  { image: artisticRepresentation, text: "Artistic Presentation" },
  { image: exceptionalService, text: "Exceptional Service" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section Component */}
      <HeroSection />

      {/* Signature Creations Section with Background Image */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 -mt-[2px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={signatureCreations}
            alt="Signature Creations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Signature Creations"
            subtitle="A glimpse into our portfolio of meticulously crafted dishes"
            light={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
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
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <Button
              to="/menu"
              className="px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3"
            >
              <span className="flex items-center gap-1 text-[10px] xs:text-xs sm:text-sm">
                View Full Portfolio
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5"
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

      {/* What Sets Us Apart - Fixed background + Circular Gallery */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Fixed background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${setsUsApart})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/95 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <SectionTitle
            title="What Sets Us Apart"
            subtitle="Our commitment to excellence in every aspect"
            light={true}
          />
          <div style={{ height: "600px", position: "relative" }}>
            <div style={{ height: "650px", position: "relative" }}>
              <CircularGallery
                items={galleryItems}
                bend={1}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA - About Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-yellow-500 to-orange-600 relative overflow-hidden">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 font-display">
            Discover Our Story
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto">
            Learn about our journey, our passion for food, and the team behind
            these culinary creations.
          </p>
          <Button
            to="/about"
            variant="secondary"
            className="px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3"
          >
            <span className="text-[10px] xs:text-xs sm:text-sm">About Us</span>
          </Button>
        </motion.div>
      </section>
    </>
  );
}

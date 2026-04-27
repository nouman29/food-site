import { motion } from "framer-motion";
import Button from "../ui/Button";
import habibiHero from "../../assets/habibi-hero.jpg";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={habibiHero}
          alt="Habibi Restaurant Muzaffarabad"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content - Shifted 40px LEFT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-2 py-24 md:py-20 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-xl -ml-[40px]"
        >
          {/* Spacer */}
          <div className="h-40 md:h-48 lg:h-56" />

          {/* Paragraph and Buttons */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white my-4 max-w-lg leading-relaxed drop-shadow-lg"
            >
              Authentic flavors, premium ingredients, and exceptional service in
              the heart of Muzaffarabad, Azad Kashmir.
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
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/80 text-xs uppercase tracking-wider drop-shadow-md">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 text-white/80 drop-shadow-md"
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

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 w-full z-10">
        <svg viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}

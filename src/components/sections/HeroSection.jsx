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
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div>
        <img
          src={habibiHero}
          alt="Habibi Restaurant Muzaffarabad"
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-[4%] xs:mt-[8%] sm:mt-[12%] md:mt-[20%] lg:mt-[12%]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="ml-[5%] sm:ml-[8%] lg:ml-[10%]"
          >
            {/* Paragraph and Buttons */}
            <div className="max-w-[200px] xs:max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px]">
              <motion.p
                variants={itemVariants}
                className="text-[10px] xs:text-[11px] sm:text-sm md:text-base lg:text-lg text-white mb-2 sm:mb-3 leading-snug drop-shadow-md"
              >
                Authentic flavors, premium ingredients, and exceptional service
                in the heart of Muzaffarabad, Azad Kashmir.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3"
              >
                <Button
                  to="/menu"
                  className="px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3"
                >
                  <span className="flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-xs lg:text-sm">
                    Explore Menu
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
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
                <Button
                  to="/gallery"
                  variant="outline"
                  className="px-2.5 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3"
                >
                  <span className="flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-xs lg:text-sm">
                    Gallery
                    <svg
                      className="w-3 h-3 lg:w-3.5 lg:h-3.5"
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-[7px] xs:text-[8px] sm:text-[10px] uppercase tracking-wider drop-shadow-md">
            Scroll
          </span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white/70 drop-shadow-md mt-0.5"
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
        <svg viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}

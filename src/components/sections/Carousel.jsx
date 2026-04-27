import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import premiumQuality from "../../assets/premium-quality.jpg";
import expertChefs from "../../assets/expert-chefs.jpg";
import artisticRepresentation from "../../assets/artistic-representation.jpg";
import exceptionalService from "../../assets/exceptional-service.jpg";

const slides = [
  {
    image: premiumQuality,
    title: "Premium Quality",
    desc: "Only the finest ingredients sourced locally and globally",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    image: expertChefs,
    title: "Expert Chefs",
    desc: "Years of culinary mastery and creative expertise",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    image: artisticRepresentation,
    title: "Artistic Presentation",
    desc: "Every dish is a visual masterpiece",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    image: exceptionalService,
    title: "Exceptional Service",
    desc: "Dedicated team ensuring memorable experiences",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Carousel */}
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl mb-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                  {slides[current].title}
                </h3>
                <p className="text-white/80 text-sm md:text-base max-w-md">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card-style Navigation Bullets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {slides.map((slide, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index);
              setIsAutoPlaying(false);
            }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className={`text-center p-5 rounded-2xl transition-all duration-300 border ${
              index === current
                ? "bg-gray-900 text-white border-gray-900 shadow-xl scale-[1.02]"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-lg"
            }`}
          >
            <div className="flex justify-center mb-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  index === current
                    ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {slide.icon}
              </div>
            </div>

            <h4
              className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                index === current ? "text-white" : "text-gray-900"
              }`}
            >
              {slide.title}
            </h4>

            {index === current && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2 origin-left"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

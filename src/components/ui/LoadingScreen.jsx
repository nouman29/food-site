import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import habibiLogo from "../../assets/habibi-logo.jpg";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="text-center relative">
            {/* Decorative circles */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.05 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            />

            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="relative z-10 mx-auto mb-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249, 115, 22, 0)",
                    "0 0 0 20px rgba(249, 115, 22, 0.1)",
                    "0 0 0 40px rgba(249, 115, 22, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-32 h-32 rounded-full p-2 bg-gradient-to-br from-yellow-400 to-orange-600 shadow-2xl"
              >
                <img
                  src={habibiLogo}
                  alt="Habibi Restaurant Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 font-display mb-4"
            >
              Habibi
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-orange-500"
              >
                .
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-500 text-lg mb-8"
            >
              Premium Food Portfolio
            </motion.p>

            {/* Loading Bar */}
            <motion.div className="w-48 h-1.5 bg-gray-100 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-gray-400 text-xs mt-4"
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

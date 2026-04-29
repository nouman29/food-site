import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0814]">
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}

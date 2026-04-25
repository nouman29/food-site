import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg";

  const variants = {
    primary:
      "bg-gradient-to-r from-yellow-500 to-orange-600 text-white hover:shadow-xl hover:shadow-orange-500/25",
    secondary:
      "bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-orange-600",
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={combined}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}

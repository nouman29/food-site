import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function FoodCard({ image, name, description, delay = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const centerX = x - 50;
      const centerY = y - 50;

      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
      card.style.setProperty("--rot-x", `${-centerY / 4}deg`);
      card.style.setProperty("--rot-y", `${centerX / 5}deg`);
    };

    const handleMouseEnter = () => {
      card.style.setProperty("--active", "1");
      card.style.transition = "none";
    };

    const handleMouseLeave = () => {
      card.style.setProperty("--active", "0");
      card.style.setProperty("--x", "50%");
      card.style.setProperty("--y", "50%");
      card.style.setProperty("--rot-x", "0deg");
      card.style.setProperty("--rot-y", "0deg");
      card.style.transition = "all 0.8s ease";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="perspective-[800px]"
    >
      <div
        ref={cardRef}
        className="holo-card group relative rounded-3xl cursor-pointer"
        style={{
          "--x": "50%",
          "--y": "50%",
          "--rot-x": "0deg",
          "--rot-y": "0deg",
          "--active": "0",
        }}
      >
        {/* Top Spotlight Glow - comes from above */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[200%] h-80 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: "calc(var(--active) * 0.4)",
            background: `
              radial-gradient(
                ellipse 80% 60% at var(--x) 0%,
                rgba(251, 191, 36, 0.5) 0%,
                rgba(249, 115, 22, 0.3) 25%,
                rgba(251, 191, 36, 0.1) 50%,
                transparent 70%
              )
            `,
            filter: "blur(8px)",
          }}
        />

        {/* Bottom Glow */}
        <div
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[200%] h-60 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: "calc(var(--active) * 0.25)",
            background: `
              radial-gradient(
                ellipse 80% 50% at var(--x) 100%,
                rgba(249, 115, 22, 0.3) 0%,
                rgba(251, 191, 36, 0.1) 40%,
                transparent 70%
              )
            `,
            filter: "blur(8px)",
          }}
        />

        {/* Behind Card Glow */}
        <div
          className="absolute -inset-4 z-0 pointer-events-none transition-opacity duration-300 rounded-[40px]"
          style={{
            opacity: "calc(var(--active) * 0.5)",
            background:
              "radial-gradient(circle 150px at var(--x) var(--y), rgba(251, 191, 36, 0.3), rgba(249, 115, 22, 0.15) 50%, transparent 70%)",
            filter: "blur(15px)",
          }}
        />

        {/* Main Card */}
        <div
          className="holo-surface relative bg-[#0a0a0a] rounded-3xl overflow-hidden min-h-[420px] flex flex-col z-10"
          style={{
            transform:
              "perspective(800px) rotateX(var(--rot-x)) rotateY(var(--rot-y)) translateZ(0)",
          }}
        >
          {/* Inner light on card surface */}
          <div
            className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: "calc(var(--active) * 0.12)",
              background:
                "radial-gradient(circle 180px at var(--x) var(--y), rgba(255, 255, 255, 0.25), transparent 60%)",
            }}
          />

          {/* Corner Glows */}
          <div
            className="absolute -top-1 -left-1 w-24 h-24 z-20 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: "calc(var(--active) * 0.7)",
              background:
                "radial-gradient(circle at top left, rgba(251, 191, 36, 0.6), transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <div
            className="absolute -top-1 -right-1 w-24 h-24 z-20 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: "calc(var(--active) * 0.7)",
              background:
                "radial-gradient(circle at top right, rgba(251, 191, 36, 0.6), transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <div
            className="absolute -bottom-1 -left-1 w-24 h-24 z-20 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: "calc(var(--active) * 0.7)",
              background:
                "radial-gradient(circle at bottom left, rgba(249, 115, 22, 0.6), transparent 70%)",
              filter: "blur(6px)",
            }}
          />
          <div
            className="absolute -bottom-1 -right-1 w-24 h-24 z-20 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: "calc(var(--active) * 0.7)",
              background:
                "radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.6), transparent 70%)",
              filter: "blur(6px)",
            }}
          />

          {/* Image Section */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col justify-center relative z-30 bg-[#0a0a0a]">
            <h3 className="text-xl font-bold mb-2 font-display text-white">
              {name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Border highlight */}
          <div
            className="absolute inset-0 rounded-3xl z-10 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: "calc(var(--active) * 0.2)",
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

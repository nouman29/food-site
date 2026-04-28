import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const data = items?.length ? items : [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-center gap-6 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
        background: "transparent",
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[280px] sm:w-[340px] md:w-[400px] rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer hover:scale-[1.02]"
          style={{
            "--card-border": c.borderColor || "#f59e0b",
            background:
              c.gradient || "linear-gradient(145deg, #f59e0b, #0d0814)",
            "--spotlight-color": "rgba(255,255,255,0.15)",
          }}
        >
          {/* Spotlight on hover */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 60%)",
            }}
          />

          {/* Image */}
          <div className="relative z-10 h-48 sm:h-56 overflow-hidden">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <footer className="relative z-10 p-5 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold font-display">{c.title}</h3>
              {c.handle && (
                <span className="text-sm text-yellow-400">{c.handle}</span>
              )}
            </div>
            <p className="text-gray-300 text-sm mb-1">{c.subtitle}</p>
            {c.location && (
              <p className="text-gray-400 text-xs flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {c.location}
              </p>
            )}
          </footer>
        </article>
      ))}

      {/* Dark overlay mask */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.5)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.5)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.55)75%,rgba(0,0,0,0.75)90%,black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 20%,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.55)75%,rgba(0,0,0,0.75)90%,black 100%)",
        }}
      />

      {/* Light reveal overlay */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.5)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.5)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.85)40%,rgba(255,255,255,0.7)55%,rgba(255,255,255,0.5)70%,rgba(255,255,255,0.25)85%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 20%,rgba(255,255,255,0.85)40%,rgba(255,255,255,0.7)55%,rgba(255,255,255,0.5)70%,rgba(255,255,255,0.25)85%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;

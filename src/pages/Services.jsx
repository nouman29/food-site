import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import BorderGlow from "../components/ui/BorderGlow";

const services = [
  {
    icon: "🍽️",
    title: "Dine-In",
    desc: "Premium ambiance for family and friends. Enjoy our cozy and elegant seating.",
    features: ["Air-conditioned hall", "Family seating", "Background music"],
    colors: ["#c084fc", "#a855f7", "#9333ea"],
  },
  {
    icon: "🛵",
    title: "Delivery",
    desc: "Hot meals delivered to your doorstep. Fast and reliable service.",
    features: ["30-min delivery", "Contactless option", "Live tracking"],
    colors: ["#f472b6", "#ec4899", "#db2777"],
  },
  {
    icon: "🎉",
    title: "Events",
    desc: "Birthdays, parties, and corporate events made special with our catering.",
    features: ["Custom menus", "Decoration", "Dedicated staff"],
    colors: ["#38bdf8", "#0ea5e9", "#0284c7"],
  },
  {
    icon: "📦",
    title: "Takeaway",
    desc: "Quick pickup for on-the-go meals. Order ahead and skip the wait.",
    features: ["Online ordering", "Express pickup", "Secure packaging"],
    colors: ["#34d399", "#10b981", "#059669"],
  },
];

export default function Services() {
  return (
    <div className="bg-[#0d0814] py-24 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle
          title="Our Services"
          subtitle="Everything we offer to make your experience special"
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.title}>
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#12081c"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={service.colors}
              >
                <div className="p-8">
                  <div className="text-6xl block mb-6 text-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center font-display text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="text-purple-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

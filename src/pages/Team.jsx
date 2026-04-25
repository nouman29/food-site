import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const team = [
  {
    name: "Ahmed Khan",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    bio: "15 years of culinary expertise across 5 countries.",
  },
  {
    name: "Sara Ali",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400",
    bio: "Pastry specialist with a passion for fusion cuisine.",
  },
  {
    name: "Usman Raza",
    role: "Restaurant Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    bio: "Ensuring every guest leaves with a smile since 2018.",
  },
  {
    name: "Fatima Hassan",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400",
    bio: "Making every event and reservation seamless.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Meet Our Team"
        subtitle="The passionate people behind every delicious plate"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-lg mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-sm">{member.bio}</p>
              </div>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 font-display text-center">
              {member.name}
            </h3>
            <p className="text-orange-600 text-sm text-center font-medium">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

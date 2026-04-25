import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";

const posts = [
  {
    title: "The Secret to Perfect Burgers at Home",
    date: "March 15, 2026",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    excerpt:
      "Learn the professional techniques we use to create our signature juicy burgers...",
  },
  {
    title: "Why Fresh Ingredients Matter",
    date: "March 10, 2026",
    category: "Food Tips",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    excerpt:
      "Discover how using farm-fresh ingredients transforms the taste of your meals...",
  },
  {
    title: "Behind the Scenes at Habibi",
    date: "March 5, 2026",
    category: "Stories",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600",
    excerpt:
      "Take a peek into our kitchen and see how the magic happens every single day...",
  },
  {
    title: "Top 5 Pizza Toppings Our Customers Love",
    date: "February 28, 2026",
    category: "Trending",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    excerpt:
      "From classic pepperoni to exotic BBQ chicken, here are the fan favorites...",
  },
  {
    title: "How We Maintain Hygiene Standards",
    date: "February 20, 2026",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600",
    excerpt:
      "Our commitment to cleanliness and safety in every step of food preparation...",
  },
  {
    title: "The Art of Making Loaded Fries",
    date: "February 15, 2026",
    category: "Recipes",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    excerpt:
      "Crispy, cheesy, and absolutely irresistible. Here is how we do it...",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="Our Blog"
        subtitle="Stories, recipes, and food adventures from the Habibi kitchen"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden h-56">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white text-orange-600 rounded-full font-bold"
                >
                  Read More
                </motion.span>
              </motion.div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs rounded-full font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-orange-600 text-sm mb-2 font-medium">
                {post.date}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-orange-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 inline-flex items-center text-orange-600 font-semibold text-sm"
              >
                Continue Reading →
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}

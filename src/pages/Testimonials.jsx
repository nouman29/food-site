import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const reviews = [
  {
    name: "Ayesha Mahmood",
    role: "Food Blogger",
    text: "Best burgers in Lahore! The zinger burger is absolutely incredible. Juicy, crispy, and the sauce is perfection. This place never disappoints.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    name: "Hassan Rizvi",
    role: "Regular Customer",
    text: "Family dinner here was perfect. Great ambiance and even better food. The staff is incredibly friendly and attentive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  },
  {
    name: "Zara Khan",
    role: "Food Enthusiast",
    text: "Their pizza is authentic and delicious. Fast delivery too! The Margherita is my absolute favorite.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
  {
    name: "Bilal Sheikh",
    role: "Corporate Client",
    text: "We use Habibi for all our office events. The catering service is exceptional. Always on time and the food is fresh.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
  },
  {
    name: "Nadia Hussain",
    role: "Local Guide",
    text: "The ambiance is unmatched. Perfect for date nights or family gatherings. Loaded fries are a must-try!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
  },
  {
    name: "Omar Farooq",
    role: "Food Critic",
    text: "Authentic flavors, generous portions, and reasonable prices. Habibi sets the standard for fast food in Lahore.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
  },
];

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-24"
    >
      <SectionTitle
        title="What People Say"
        subtitle="Hear from our happy customers who keep coming back"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <svg
              className="w-10 h-10 text-orange-200 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
            </svg>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, star) => (
                <motion.span
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: star * 0.1 }}
                  className={`text-xl ${
                    star < review.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  ★
                </motion.span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 italic mb-6 leading-relaxed">
              "{review.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <motion.img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                whileHover={{ scale: 1.2 }}
              />
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-orange-600 text-sm">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

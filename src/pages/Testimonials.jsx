import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const MaleAvatar = ({ color }) => (
  <svg className={`w-6 h-6 ${color}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const FemaleAvatar = ({ color }) => (
  <svg className={`w-6 h-6 ${color}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    <circle cx="17" cy="3" r="1.5" />
    <path d="M17 4.5v3" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const reviews = [
  {
    name: "Ahmed Khan",
    role: "Regular Customer",
    text: "Best fast food in Muzaffarabad! Their zinger burger is absolutely incredible. Juicy, crispy, and the sauce is perfection. This place never disappoints.",
    rating: 5,
    gender: "male",
    bgColor: "bg-blue-500",
  },
  {
    name: "Ayesha Bibi",
    role: "Local Foodie",
    text: "Family dinner here was perfect. Great ambiance and even better food. The pizza and loaded fries are our family favorites.",
    rating: 5,
    gender: "female",
    bgColor: "bg-pink-500",
  },
  {
    name: "Usman Ali",
    role: "College Student",
    text: "Their chicken bread is addictive! Affordable prices and generous portions. My go-to spot after classes with friends.",
    rating: 5,
    gender: "male",
    bgColor: "bg-emerald-500",
  },
  {
    name: "Fatima Zahra",
    role: "Working Professional",
    text: "Quick service and delicious food. The platters are perfect for office lunches. Everyone at work loves Habibi!",
    rating: 4,
    gender: "female",
    bgColor: "bg-purple-500",
  },
  {
    name: "Bilal Mahmood",
    role: "Tourist from Islamabad",
    text: "Discovered this gem during my trip to Muzaffarabad. The steaks are amazing and the view of the valley makes it even better.",
    rating: 5,
    gender: "male",
    bgColor: "bg-orange-500",
  },
  {
    name: "Sara Rashid",
    role: "Mother of Three",
    text: "My kids love the kids meals! Finally a place where the whole family is happy. The staff is so welcoming and patient with children.",
    rating: 5,
    gender: "female",
    bgColor: "bg-rose-500",
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
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${review.bgColor}`}
              >
                {review.gender === "male" ? (
                  <MaleAvatar color="text-white" />
                ) : (
                  <FemaleAvatar color="text-white" />
                )}
              </motion.div>
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

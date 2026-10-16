import SectionTitle from "../components/ui/SectionTitle";
import BorderGlow from "../components/ui/BorderGlow";

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
    colors: ["#3b82f6", "#6366f1", "#8b5cf6"],
  },
  {
    name: "Ayesha Bibi",
    role: "Local Foodie",
    text: "Family dinner here was perfect. Great ambiance and even better food. The pizza and loaded fries are our family favorites.",
    rating: 5,
    gender: "female",
    bgColor: "bg-pink-500",
    colors: ["#ec4899", "#f472b6", "#c084fc"],
  },
  {
    name: "Usman Ali",
    role: "College Student",
    text: "Their chicken bread is addictive! Affordable prices and generous portions. My go-to spot after classes with friends.",
    rating: 5,
    gender: "male",
    bgColor: "bg-emerald-500",
    colors: ["#10b981", "#34d399", "#6ee7b7"],
  },
  {
    name: "Fatima Zahra",
    role: "Working Professional",
    text: "Quick service and delicious food. The platters are perfect for office lunches. Everyone at work loves Habibi!",
    rating: 4,
    gender: "female",
    bgColor: "bg-purple-500",
    colors: ["#a855f7", "#c084fc", "#e9d5ff"],
  },
  {
    name: "Bilal Mahmood",
    role: "Tourist from Islamabad",
    text: "Discovered this gem during my trip to Muzaffarabad. The steaks are amazing and the view of the valley makes it even better.",
    rating: 5,
    gender: "male",
    bgColor: "bg-orange-500",
    colors: ["#f97316", "#fb923c", "#fed7aa"],
  },
  {
    name: "Sara Rashid",
    role: "Mother of Three",
    text: "My kids love the kids meals! Finally a place where the whole family is happy. The staff is so welcoming and patient with children.",
    rating: 5,
    gender: "female",
    bgColor: "bg-rose-500",
    colors: ["#f43f5e", "#fb7185", "#fecdd3"],
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#0d0814] py-24 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionTitle
          title="What People Say"
          subtitle="Hear from our happy customers who keep coming back"
          light={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div key={review.name}>
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#12081c"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={review.colors}
              >
                <div className="p-8">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 text-purple-400/20 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                  </svg>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, star) => (
                      <span
                        key={star}
                        className={`text-xl ${
                          star < review.rating
                            ? "text-yellow-500"
                            : "text-gray-700"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-400 italic mb-6 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${review.bgColor}`}
                    >
                      {review.gender === "male" ? (
                        <MaleAvatar color="text-white" />
                      ) : (
                        <FemaleAvatar color="text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-200">{review.name}</p>
                      <p className="text-purple-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

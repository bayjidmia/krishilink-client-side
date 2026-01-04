import { motion } from "framer-motion";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Abdul Karim",
    role: "Farmer",
    review:
      "KrishiLink helped me sell my crops at a fair price without any middleman.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Buyer",
    review:
      "I can easily buy fresh vegetables directly from farmers. Very reliable platform.",
  },
  {
    id: 3,
    name: "Rahim Uddin",
    role: "Farmer",
    review:
      "Posting my products is simple and I get buyers quickly through KrishiLink.",
  },
  {
    id: 4,
    name: "Sadia Akter",
    role: "Buyer",
    review: "The quality of products is great and delivery is always on time.",
  },
  {
    id: 5,
    name: "Hasan Ali",
    role: "Farmer",
    review:
      "Now I can reach more customers and earn better profit from my harvest.",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    role: "Buyer",
    review:
      "KrishiLink connects farmers and buyers smoothly. I really trust this platform.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Feedback from farmers and buyers who trust KrishiLink
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-green-600 text-2xl mb-4" />

              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                “{item.review}”
              </p>

              <div className="flex items-center gap-3">
                <FaUserCircle className="text-4xl text-gray-400" />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-sm text-green-600">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { FaUserPlus, FaStore, FaShoppingCart, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Register / Login",
    desc: "Create your account as a buyer or seller to get started with KrishiLink.",
    icon: <FaUserPlus />,
  },
  {
    id: 2,
    title: "Post or Browse Products",
    desc: "Farmers can post products and buyers can browse fresh items easily.",
    icon: <FaStore />,
  },
  {
    id: 3,
    title: "Buy or Sell Securely",
    desc: "Enjoy secure transactions with trusted sellers and fair pricing.",
    icon: <FaShoppingCart />,
  },
  {
    id: 4,
    title: "Get Delivery / Payment",
    desc: "Receive your products on time or get paid safely after delivery.",
    icon: <FaTruck />,
  },
];

// container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            How KrishiLink Works
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A simple and transparent process to buy fresh products or sell your
            farm goods easily.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 text-2xl mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

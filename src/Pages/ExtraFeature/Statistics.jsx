import { FaUsers, FaShoppingBasket, FaBoxOpen, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  {
    id: 1,
    title: "Farmers",
    value: "5,000+",
    icon: <FaUsers />,
  },
  {
    id: 2,
    title: "Products",
    value: "10,000+",
    icon: <FaShoppingBasket />,
  },
  {
    id: 3,
    title: "Orders",
    value: "20,000+",
    icon: <FaBoxOpen />,
  },
  {
    id: 4,
    title: "Average Rating",
    value: "4.8",
    icon: <FaStar />,
  },
];

// container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// item animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Statistics = () => {
  return (
    <section className="py-16 my-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white"
            >
              <div className="text-3xl mb-3 flex justify-center text-green-200">
                {stat.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </h3>

              <p className="text-sm md:text-base text-green-100">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;

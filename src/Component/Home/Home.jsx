import React, { use } from "react";
import Banner from "../../Pages/Banner/Banner";
import Services from "../Services/Services";
import LatestProducts from "../../Pages/LatestProducts/LatestProducts";
import { MotionConfig } from "motion/react";
import { motion } from "framer-motion";

const latestproducts = fetch("http://localhost:3000/latestproducts").then(
  (res) => res.json()
);

const Home = () => {
  const latestProducts = use(latestproducts);
  console.log(latestProducts);
  return (
    <div>
      <Banner></Banner>
      <LatestProducts latestProducts={latestProducts}></LatestProducts>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
      >
        <Services></Services>
      </motion.div>
    </div>
  );
};

export default Home;

import React, { Suspense, use } from "react";
import Banner from "../../Pages/Banner/Banner";
import Services from "../Services/Services";
import LatestProducts from "../../Pages/LatestProducts/LatestProducts";
import { motion } from "framer-motion";
import Loading from "../../Component/Loading/Loading"; // ✅ তোমার Loading component

const latestproducts = fetch(
  "https://3d-models-server-xi.vercel.app/latestproducts"
).then((res) => res.json());

const HomeContent = () => {
  const latestProducts = use(latestproducts);

  return (
    <div>
      <Banner />
      <LatestProducts latestProducts={latestProducts} />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
      >
        <Services />
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Loading /> {/* 🔹 এখানে Loading দেখাবে */}
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
};

export default Home;

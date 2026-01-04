import React, { Suspense, use } from "react";
import Banner from "../../Pages/Banner/Banner";
import Services from "../Services/Services";
import LatestProducts from "../../Pages/LatestProducts/LatestProducts";
import { motion } from "framer-motion";
import Loading from "../../Component/Loading/Loading"; // ✅ তোমার Loading component
import HowItWorks from "../../Pages/ExtraFeature/HowItWorks";
import Statistics from "../../Pages/ExtraFeature/Statistics";
import Testimonials from "../../Pages/ExtraFeature/Testimonials";

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
      <HowItWorks></HowItWorks>
      <Statistics></Statistics>
      <Testimonials></Testimonials>
    </div>
  );
};

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
};

export default Home;

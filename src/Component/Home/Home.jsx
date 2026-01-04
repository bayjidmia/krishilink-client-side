import Banner from "../../Pages/Banner/Banner";
import Services from "../Services/Services";
import LatestProducts from "../../Pages/LatestProducts/LatestProducts";
import { motion } from "framer-motion";
import Loading from "../../Component/Loading/Loading"; // ✅ তোমার Loading component
import HowItWorks from "../../Pages/ExtraFeature/HowItWorks";
import Statistics from "../../Pages/ExtraFeature/Statistics";
import Testimonials from "../../Pages/ExtraFeature/Testimonials";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../Hook/useAxiossecure";

const HomeContent = () => {
  const axiosSecure = useAxiossecure();
  const {
    data: latestProducts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latestProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/latestproducts");
      const data = await res.data;

      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading></Loading>
      </div>
    );
  }

  if (isError) {
    return <p className="text-center text-red-500">Something went wrong</p>;
  }

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
  return <HomeContent />;
};

export default Home;

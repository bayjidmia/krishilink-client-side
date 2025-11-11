import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import modules from "swiper/modules"
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    image:
      "https://wigmoretrading.com/wp-content/uploads/2022/01/iStock-1413754875.jpg",
    title: "Fresh Organic Farm Products",
    subtitle: "From Our Fields to Your Home",
    button: "Shop Now",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/male-farmer-showcases-healthy-soil-his-field-sunset-emphasizing-importance-organic-farming-male-farmer-330555795.jpg",
    title: "Sustainable Farming",
    subtitle: "Healthy crops, healthy life",
    button: "Learn More",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/collection-of-beautiful-houseplants-on-wooden-table-royalty-free-image-1712685460.jpg?crop=1xw:0.84415xh;0,0.195xh",
    title: "Farm Fresh Daily",
    subtitle: "Organic products straight to you",
    button: "Explore Now",
  },
];

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 4 }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative bg-cover bg-center h-[500px]"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-center items-start px-8 md:px-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white mb-6">
                  {slide.subtitle}
                </p>
                <button className="btn btn-primary btn-lg">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;

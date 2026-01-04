import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "../../assets/image copy 3.png";

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
    image: image2,

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
            <div className="flex justify-center items-center min-h-[300px] md:min-h-[500px] px-4">
              <div className="relative w-full max-w-7xl h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                {/* image */}
                <img
                  src={slide.image}
                  alt="banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* content */}
                <div
                  className="relative z-10 h-full flex flex-col justify-center
      items-center md:items-start
      text-center md:text-left
      px-4 sm:px-8 md:px-16"
                >
                  <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-3 md:mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-lg md:text-2xl text-white mb-4 md:mb-6 max-w-xl">
                    {slide.subtitle}
                  </p>

                  <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";

// import required modules
import { Autoplay } from "swiper/modules";

import { banner1, banner2, banner3, banner4, banner6, sin } from "../assets";


const Banner = () => {
  const data = [
    {
      id: 1,
      img:  banner1 ,
    },
    {
      id: 2,
      img:  banner2 ,
    },
    {
      id: 3,
      img:  banner3 ,
    },
    {
      id: 4,
      img:  banner4 ,
    },
    {
      id: 5,
      img:  sin ,
    },
    {
      id: 6,
      img:  banner6 ,
    },
  ];
  return (
    <div>
<div className="pt-24 sm:pt-32 md:pt-16 lg:pt-16">
  <Swiper
    speed={600}
    parallax={true}
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    {data.map((item) => (
      <SwiperSlide key={item.id}>
        <img
          src={item.img}
          alt={`banner-${item.id}`}
          className="w-full h-[400px] md:h-[550px] rounded-lg "
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default Banner;

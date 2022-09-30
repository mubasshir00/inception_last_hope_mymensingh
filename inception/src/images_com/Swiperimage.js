import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Swiperimage = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="/moonquake/1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/moonquake/2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/moonquake/3.png" />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
}

export default Swiperimage
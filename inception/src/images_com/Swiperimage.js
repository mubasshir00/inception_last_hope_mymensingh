import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const images1971 = [
  {
    img: "/moonquake/1.png",
  },
  {
    img: "/moonquake/2.png",
  },
  {
    img: "/moonquake/3.png",
  },
  {
    img:"/moonquake/4.png"
  }
];

const Swiperimage = () => {
    const swiper = useSwiper();

  return (
    <div>
      <div>
        <h1>1971</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          {images1971.map(i => {
            console.log(i.img);
            return (
              <SwiperSlide>
                <img src={`${i.img}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div></div>
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
    </div>
  );
}

export default Swiperimage
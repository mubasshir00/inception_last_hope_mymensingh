import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
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
];

const Swiperimage = () => {
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
          
          {images1971.map((i)=>{
            console.log(i.img);
            return <SwiperSlide>
              <img src={`${i.img}`}/>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Swiperimage
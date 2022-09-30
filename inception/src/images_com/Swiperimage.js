import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'

import 'swiper/css'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const images = [
  {
    img: '/moonquake/1.png',
    year: 1971,
  },
  {
    img: '/moonquake/2.png',
    year: 1971,
  },
  {
    img: '/moonquake/3.png',
    year: 1971,
  },
  {
    img: '/moonquake/4.png',
    year: 1972,
  },
  {
    img: '/moonquake/5.png',
    year: 1972,
  },
  {
    img: '/moonquake/6.png',
    year: 1972,
  },
  {
    img: '/moonquake/7.png',
    year: 1972,
  },
  {
    img: '/moonquake/8.png',
    year: 1973,
  },
  {
    img: '/moonquake/9.png',
    year: 1973,
  },
  {
    img: '/moonquake/10.png',
    year: 1973,
  },
  {
    img: '/moonquake/11.png',
    year: 1973,
  },
  {
    img: '/moonquake/12.png',
    year: 1974,
  },
  {
    img: '/moonquake/13.png',
    year: 1974,
  },
  {
    img: '/moonquake/14.png',
    year: 1974,
  },
  {
    img: '/moonquake/15.png',
    year: 1974,
  },
  {
    img: '/moonquake/16.png',
    year: 1974,
  },
  {
    img: '/moonquake/17.png',
    year: 1975,
  },
  {
    img: '/moonquake/18.png',
    year: 1975,
  },
  {
    img: '/moonquake/19.png',
    year: 1975,
  },
  {
    img: '/moonquake/20.png',
    year: 1975,
  },
  {
    img: '/moonquake/21.png',
    year: 1975,
  },
  {
    img: '/moonquake/22.png',
    year: 1975,
  },
  {
    img: '/moonquake/23.png',
    year: 1975,
  },
  {
    img: '/moonquake/24.png',
    year: 1976,
  },
  {
    img: '/moonquake/25.png',
    year: 1976,
  },
  {
    img: '/moonquake/26.png',
    year: 1976,
  },
  {
    img: '/moonquake/27.png',
    year: 1976,
  },
  {
    img: '/moonquake/128.png',
    year: 1976,
  },
]

const Swiperimage = () => {
  const swiper = useSwiper()

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
          transition: 500,
        }}
        centeredSlidesBounds
        loopFillGroupWithBlank={false}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        autoHeight
      >
        {images.map(i => {
          // if (i.year === year) {
          // }
          return (
            <SwiperSlide>
              <div className="flex flex-col gap-2 items-center justify-center bg-gray-300 rounded-b-xl drop-shadow-md">
                <img src={`${i.img}`} height={300} />
                <h1
                  className="p-8 text-black text-[2rem] font-bold"
                  style={{
                    fontFamily: 'Raleway',
                  }}
                >
                  {i.year}
                </h1>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Swiperimage

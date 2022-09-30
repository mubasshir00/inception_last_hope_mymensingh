import logo from './logo.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default App

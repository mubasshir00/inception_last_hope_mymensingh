import logo from './logo.svg'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Swiperimage from './images_com/Swiperimage'
import Home from './pages/Home'
import Explore from './Explore/Explore'

function App() {
  return (
    <div className="App">
      <Home/>
      <Swiperimage />
      {/* <Explore/> */}
    </div>
  )
}

export default App

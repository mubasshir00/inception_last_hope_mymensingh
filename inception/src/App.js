import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Swiperimage from './images_com/Swiperimage'
import 'swiper/css'
import './App.css'
import { useEffect } from 'react'
import Hero from './components/Hero'
import Explore from './explore/Explore'
import { Navigation } from './components/Navigation'
import Teammember from './components/Teammember'
import ParallaxHero from './components/ParallaxHero'
import About from './components/About'
import Herocontentmoon from './components/Herocontentmoon'

function App() {
  // useEffect(() => {
  //   const sections = [...document.querySelectorAll('section')]

  //   let options = {
  //     rootMargin: '0px',
  //     threshold: 0.75,
  //   }

  //   const callback = (entries, observer) => {
  //     entries.forEach(entry => {
  //       const { target } = entry

  //       if (entry.intersectionRatio >= 0.75) {
  //         target.classList.add('is-visible')
  //       } else {
  //         target.classList.remove('is-visible')
  //       }
  //     })
  //   }

  //   const observer = new IntersectionObserver(callback, options)

  //   sections.forEach((section, index) => {
  //     const sectionChildren = [
  //       ...section.querySelector('[data-content]').children,
  //     ]

  //     sectionChildren.forEach((el, index) => {
  //       el.style.setProperty('--delay', `${index * 250}ms`)
  //     })

  //     observer.observe(section)
  //   })
  // }, [])

  return (
    <div>
      <Navigation />
      <main
        className="space-y-[50px] bg-gray-100 pb-12"
        // style={{
        //   background: 'url("background.jpg")',
        // }}
      >
        {/* <Hero /> */}
        <ParallaxHero />
        {/* <Herocontentmoon/> */}

        <section id="gallery" className="section container mx-auto px-4">
          <div class="section__content text-center" data-content>
            <h1
              className="text-[5rem] font-bold text-black mb-12"
              style={{
                fontFamily: 'Raleway',
              }}
            >
              Moonquake Locations
            </h1>

            <Swiperimage />
          </div>
        </section>

        <section id="threedview" class="section container mx-auto px-4">
          <div
            class="section__content flex flex-col items-center justify-center gap-[50px]"
            data-content
          >
            <h1
              className="text-[5rem] font-bold text-black"
              style={{
                fontFamily: 'Raleway',
              }}
            >
              Visualize in 3D
            </h1>

            <div>
              <Explore />
            </div>
          </div>
        </section>
        <section id="about" class="section container mx-auto px-4">
          <div class="section__content" data-content>
            <About/>
          </div>
        </section>
        <section id="teammember" class="section container mx-auto px-4">
          <div class="section__content" data-content>
            <Teammember />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

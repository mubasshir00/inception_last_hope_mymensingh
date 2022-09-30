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
        className="space-y-10 bg-gray-100"
        // style={{
        //   background: 'url("background.jpg")',
        // }}
      >
        <Hero />

        <section id="gallery" className="section container mx-auto px-4">
          <div class="section__content" data-content>
            <Swiperimage />
          </div>
        </section>

        <section id="threedview" class="section container mx-auto px-4">
          <div class="section__content" data-content>
            <Explore />
          </div>
        </section>
        <section id="about" class="section container mx-auto px-4">
          <div class="section__content" data-content>
            
          </div>
        </section>
        <section id="teammember" class="section container mx-auto px-4">
          <div class="section__content" data-content>
            <Teammember />
          </div>
        </section>
      </main>
    </div>

    // <main className="container-lg px-4 max-auto">
    // </main>
  )
}

export default App

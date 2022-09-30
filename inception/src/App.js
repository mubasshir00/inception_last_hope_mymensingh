import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Swiperimage from './images_com/Swiperimage'
import 'swiper/css'
import './App.css'
import { useEffect } from 'react'
import Hero from './components/Hero'
import Explore from './explore/Explore'

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
    <main>
      <Hero />

      <section className="section">
        <div className="section__content" data-content>
          <h2>Content inside</h2>
          <p>blah blah blah</p>
        </div>
      </section>

      <section class="section">
        <div class="section__content" data-content>
          <Explore />
        </div>
      </section>
    </main>

    // <main className="container-lg px-4 max-auto">
    //   <Swiperimage />
    // </main>
  )
}

export default App

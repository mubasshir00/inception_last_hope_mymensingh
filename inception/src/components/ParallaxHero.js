import { useEffect } from 'react'
import './ParallaxHero.css'

export default function ParallaxHero() {
  useEffect(() => {
    let bg = document.querySelector('#bg')
    let moon = document.querySelector('#moon')
    let road = document.querySelector('#road')
    let mountain = document.querySelector('#mountain')
    let text = document.querySelector('#text')

    window.addEventListener('scroll', () => {
      let scrollYValue = window.scrollY
      bg.style.top = `${scrollYValue * 0.5}px`
      moon.style.left = `${-scrollYValue * 0.5}px`
      mountain.style.top = `${-scrollYValue * 0.15}px`
      road.style.top = `${scrollYValue * 0.15}px`
      text.style.top = `${scrollYValue * 1}px`
    })
  }, [])

  return (
    <section className="parallax">
      <img src="/bg.jpg" alt="bg" id="bg" />
      <img src="/moon.png" alt="moon" id="moon" />
      <img src="/mountain.png" alt="mountain" id="mountain" />
      <img src="/road.png" alt="road" id="road" />
      <h2 id="text">Moonquake</h2>
    </section>
  )
}

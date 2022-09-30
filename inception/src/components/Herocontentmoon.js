import React, { useEffect } from 'react'
import './HeroContent.css'
const Herocontentmoon = () => {

    useEffect(()=>{
        let bg = document.querySelector("#bg");
        let moon = document.querySelector("#moon");
        let road = document.querySelector("#road");
        let mountain = document.querySelector("#mountain");
        let text = document.querySelector("#text");

        window.addEventListener("scroll", () => {
          let scrollYValue = window.scrollY;
          bg.style.top = `${scrollYValue * 0.5}px`;
          moon.style.left = `${-scrollYValue * 0.5}px`;
          mountain.style.top = `${-scrollYValue * 0.15}px`;
          road.style.top = `${scrollYValue * 0.15}px`;
          text.style.top = `${scrollYValue * 1}px`;
        });
    },[])

  return (
    <div>
  <div className='section'>
    <img src="https://i.ibb.co/CwCkWFt/bg.jpg" alt="bg" id="bg" />
    <img src="https://i.ibb.co/c8Z5Sdn/moon.png" alt="moon" id="moon" />
    <img src="https://i.ibb.co/GTRWpMF/mountain.png" alt="mountain" id="mountain" />
    <img src="https://i.ibb.co/0ZTFXbj/road.png" alt="road" id="road" />
    <h2 id="text">Moon light</h2>
  </div>
</div>

  )
}

export default Herocontentmoon
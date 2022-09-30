import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="history-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <p className="title-bg-small wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="300ms">About us</p>
        <h3 className="section-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">Our
          <span>History</span></h3>
      </div>
      {/* end col */}
    </div>
    {/* end row */}
    <div className="row">
      <div className="col-lg-12">
        <div id="history-slid" className="carousel slide" data-ride="carousel" data-interval="false">
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item row">
              <div className="col-lg-6 col-md-12 pl-0">
                <div className="history-img">
                  <img className="img-fluid" src="https://i.ibb.co/CKNmhMX/blog1.jpg" alt />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pr-0">
                <div className="history-content">
                  <p className="title-bg-small primary-bg wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
                    Lorem ipsum</p>
                  <h2 className="column-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">Lorem ipsum dolor <span>sit amet</span></h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                  </p>
                  <p>
                    Benefit of the socie where we operate. A success website obusly needs great design to be one of
                    the top 10 IT companies in India but the web design is not enough.
                  </p>
                </div>
              </div>
            </div>{/* End off item*/}
           
          </div>{/* End off carusel inner */}
          {/* Indicators */}
          <ol className="carousel-indicators text-center">
            <li data-target="#history-slid" data-slide-to={0}>2009</li>
            <li data-target="#history-slid" data-slide-to={1}>2013</li>
            <li data-target="#history-slid" data-slide-to={2}>2017</li>
            <li data-target="#history-slid" data-slide-to={3} className="active">2022</li>
            <li data-target="#history-slid" data-slide-to={4}>2027</li>
            <li data-target="#history-slid" data-slide-to={5}>2032</li>
            <li data-target="#history-slid" data-slide-to={6}>2037</li>
            <li data-target="#history-slid" data-slide-to={7}>2042</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
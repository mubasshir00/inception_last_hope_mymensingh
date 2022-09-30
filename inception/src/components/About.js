import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className="history-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p
              className="title-bg-small wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="300ms"
            >
              About us
            </p>
            <h3
              className="section-title wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="400ms"
            >
              Inception Last Hope
            </h3>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <div className="row">
          <div className="col-lg-12">
            <div
              id="history-slid"
              className="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="carousel-item row">
                  <div className="col-lg-6 col-md-12 pl-0">
                    <div className="history-img" style={{
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingTop:'40px'
                    }}>
                      {/* <img
                        className="img-fluid"
                        src="https://i.ibb.co/CKNmhMX/blog1.jpg"
                        alt
                      /> */}
                      <video
                        className="img-fluid"
                        src="/vr.mp4"
                        width="600"
                        height="200"
                        controls="controls"
                        autoplay="true"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 pr-0">
                    <div className="history-content">
                      <p
                        className="title-bg-small primary-bg wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay="500ms"
                      >
                        Inception Last Hope
                      </p>
                      <h2
                        className="column-title wow fadeInUp"
                        data-wow-duration="1.5s"
                        data-wow-delay="700ms"
                      >
                        Explore MoonQuake <span>with VR</span>
                      </h2>
                      <p>
                        We are team inception last hope, Challengeoreself to
                        MAKE A MOONQUAKE MAP! In each Apollo landing site,
                        NASA's astronauts explored the moon and left behind some
                        devices for research. We created an application that
                        visualizes this seismic information with an interactive
                        virtual reality environment, where people can experience
                        and interact with moonquakes from 1971 to 1976 in a
                        virtual reality environment like real life.
                      </p>
                      {/* <p>
                        We fetch and simulate the Apollo lunar seismic data by
                        Yosio Nakamura. A virtual wristwatch shows details of
                        the Moonquake by time, location(Latitude, Longitude),
                        and the magnitude of the particular Moonquake. In the
                        meantime, a visualization of the Moonquake will happen,
                        which can be experienced by the vibration and other
                        moonquake material with the actual magnitude fetched
                        from NASA APIs. Not only that, the user can interact
                        with the moon element. E.g., a user can pick a stone
                        from the moon and throw them. Also, people without a VR
                        set can explore Moonquake through interactive 3D models
                        and images. It will make moonquake information closer
                        and more explorable to people.
                      </p> */}
                    </div>
                  </div>
                </div>
                {/* End off item*/}
              </div>
              {/* End off carusel inner */}
              {/* Indicators */}
              <ol className="carousel-indicators text-center">
                <li data-target="#history-slid" data-slide-to={0}>
                  2009
                </li>
                <li data-target="#history-slid" data-slide-to={1}>
                  2013
                </li>
                <li data-target="#history-slid" data-slide-to={2}>
                  2017
                </li>
                <li
                  data-target="#history-slid"
                  data-slide-to={3}
                  className="active"
                >
                  2022
                </li>
                <li data-target="#history-slid" data-slide-to={4}>
                  2027
                </li>
                <li data-target="#history-slid" data-slide-to={5}>
                  2032
                </li>
                <li data-target="#history-slid" data-slide-to={6}>
                  2037
                </li>
                <li data-target="#history-slid" data-slide-to={7}>
                  2042
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
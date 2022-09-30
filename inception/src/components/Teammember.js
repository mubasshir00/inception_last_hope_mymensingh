import React from 'react'
import './Teammember.css'
const Teammember = () => {
  return (
    <div className="teammber">
      <header>
        <div className="title">
          <h3>Inception Last Hope</h3>
        </div>
        <div className="content">
          <h5>who we are</h5>
          <p>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </header>
      <main>
        <div className="profile">
          <figure data-value="Team Lead">
            <img src="/moonquake/kazi.jpg" alt />
            <figcaption>Kazi Hasib</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="VR Developer">
            <img src="/moonquake/syed.png" alt />
            <figcaption>Syed Rubayyat Akbar</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Business Analyst">
            <img src="/moonquake/turjo.jpg" alt />
            <figcaption>Manoshi Das Turjo</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Front End Developer">
            <img src="/moonquake/wasiul.jpg" alt />
            <figcaption>Wasiul Islam</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="Back End Developer">
            <img src="/moonquake/Mubasshir.jpg" alt />
            <figcaption>Mubasshir Ahmed</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="UI/UX Designer">
            <img src="/moonquake/shanto_n.png" alt />
            <figcaption>S.M. Sajid Hasan Shanta</figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default Teammember
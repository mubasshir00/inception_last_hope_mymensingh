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
          <figure data-value="product owner">
            <img src="https://rvs-team-page.onrender.com/photo1.png" alt />
            <figcaption>Kazi Hasib</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="art director">
            <img src="https://rvs-team-page.onrender.com/photo2.png" alt />
            <figcaption>Syed Rubayyat Akbar</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="tech lead">
            <img src="https://rvs-team-page.onrender.com/photo3.png" alt />
            <figcaption>Manoshi Das Turjo</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="ux designer">
            <img src="https://rvs-team-page.onrender.com/photo4.png" alt />
            <figcaption>Wasiul Islam</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo5.png" alt />
            <figcaption>Mubasshir Ahmed</figcaption>
          </figure>
        </div>
        <div className="profile">
          <figure data-value="developer">
            <img src="https://rvs-team-page.onrender.com/photo6.png" alt />
            <figcaption>S.M. Sajid Hasan Shanta</figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
}

export default Teammember
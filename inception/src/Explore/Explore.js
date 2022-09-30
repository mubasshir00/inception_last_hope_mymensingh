import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <div className="explore_container">
      <h1>3D Experience</h1>
      <div>
        <div>
          <div className="sketchfab-embed-wrapper">
            <iframe
              title="Our Moon"
              frameBorder={0}
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              width={1040}
              height={640}
              src="https://sketchfab.com/models/56036463ef144eeb94281adf7f0b8d66/embed"
            >
              {"{"}" "{"}"}
            </iframe>
            {/* {"{"}" "{"}"} */}
            <p
              style={{
                fontSize: 13,
                fontWeight: "normal",
                margin: 5,
                color: "#4A4A4A",
              }}
            >
              {/* {"{"}" "{"}"} */}
              <a
                href="https://sketchfab.com/3d-models/our-moon-56036463ef144eeb94281adf7f0b8d66?utm_medium=embed&utm_campaign=share-popup&utm_content=56036463ef144eeb94281adf7f0b8d66"
                target="_blank"
                style={{ fontWeight: "bold", color: "#1CAAD9" }}
              >
                {/* {"{"}" "{"}"}
              Our Moon{"{"}" "{"}"} */}
              </a>
              {/* {"{"}" "{"}"}
            by{"{"}" "{"}"} */}
              <a
                href="https://sketchfab.com/gnaz?utm_medium=embed&utm_campaign=share-popup&utm_content=56036463ef144eeb94281adf7f0b8d66"
                target="_blank"
                style={{ fontWeight: "bold", color: "#1CAAD9" }}
              >
                {/* {"{"}" "{"}"}
              Ignazio Pillitteri{"{"}" "{"}"} */}
              </a>
              {/* {"{"}" "{"}"}
            on{"{"}" "{"}"} */}
              <a
                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=56036463ef144eeb94281adf7f0b8d66"
                target="_blank"
                style={{ fontWeight: "bold", color: "#1CAAD9" }}
              >
                {/* Sketchfab */}
              </a>
            </p>
          </div>
          <div>
            <p>Our Moon</p>
          </div>
        </div>

        <div>
          <div>
            Source: NASA Visualization Technology Applications and Development
            (VTAD)
          </div>
          <div>Published: April 22, 2019</div>
          <div>A 3D model of Earth's Moon.</div>
        </div>
      </div>
      <div>
        <h1>Apollo 11 Moon Landing (VR Experience)</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Explore
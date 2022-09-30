import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <div>
      <div className='explorer_container'>
        <div className="sketchfab-embed-wrapper">
          {"{"}" "{"}"}
          <iframe
            title="Moon"
            frameBorder={0}
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width={740}
            height={480}
            src="https://sketchfab.com/models/870de693475d436c8e925ab0bcda4ca4/embed?autospin=1&autostart=1"
          >
            {"{"}" "{"}"}
          </iframe>
          {"{"}" "{"}"}
        </div>
        <div className="sketchfab-embed-wrapper">
          {"{"}" "{"}"}
          <iframe
            title="Moon Surface"
            frameBorder={0}
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            width={740}
            height={480}
            src="https://sketchfab.com/models/7f735e0eaaf241b8bcaa8af4144cc569/embed?autospin=1&autostart=1"
          >
            {"{"}" "{"}"}
          </iframe>
          {"{"}" "{"}"}
         
        </div>
      </div>
    </div>
  );
}

export default Explore
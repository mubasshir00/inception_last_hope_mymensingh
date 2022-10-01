import React from 'react'
import './Explore.css'
const Explore = () => {
  return (
    <div className="explorer_container flex flex-wrap items-center container px-4 mx-auto w-full">
      <div
        className="sketchfab-embed-wrapper w-full flex-1"
        style={{
          flexBasis: '400px',
          maxWidth: '738px',
        }}
      >
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
          width={'100%'}
          height={480}
          src="https://sketchfab.com/models/870de693475d436c8e925ab0bcda4ca4/embed?autospin=1&autostart=1"
        ></iframe>
      </div>
      <div
        className="sketchfab-embed-wrapper w-full flex-1 mt-[10px] lg:mt-0 lg:ml-[10px]"
        style={{
          flexBasis: '400px',
          maxWidth: '738px',
        }}
      >
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
          width={'100%'}
          height={480}
          src="https://sketchfab.com/models/7f735e0eaaf241b8bcaa8af4144cc569/embed?autospin=1&autostart=1"
        ></iframe>
      </div>
    </div>
  )
}

export default Explore

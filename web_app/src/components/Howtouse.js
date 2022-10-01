import React from 'react'

const data = [
  {
    title: 'Get a decent hardware',
    desc: 'You need minimum Intel i5 and Geforce 950ti or better to run virtual reality.',
    img: 'pc.png',
  },

  {
    title: 'Get the VR device',
    desc: 'You need VR headset, controllers, sensor to get moonquake experience.',
    img: 'vr-glasses.png',
  },

  {
    title: 'Install related software',
    desc: 'You need steam and VR app installer to run VR on your PC',
    img: 'steam.png',
  },

  {
    title: 'Set up base station',
    desc: 'The base stations need to be at least two meters off the ground to function properly, and they need to be less than five meters apart.',
    img: 'cogwheel.png',
  },

  {
    title: 'Plug in related cable to run all components',
    desc: 'After plugging in, pair the controllers with the link box.',
    img: 'plug.png',
  },

  {
    title: 'Setting Up the Room',
    desc: 'Choose to set up a room-scale play area to enjoy moving around and fully engage with the VR experience.',
    img: 'room.png',
  },
]

const Howtouse = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-8">
      {data.map(item => (
        <div
          className="flex flex-col items-center gap-4 bg-gray-200 p-8 h-[220px] text-center drop-shadow-md"
          style={{
            flexBasis: '400px',
          }}
        >
          {/* <div
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                paddingBottom: '95%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  className=""
                  src={item.img}
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </div>
            </div>
          </div> */}
          <img
            className=""
            src={item.img}
            style={{
              height: '60px',
              width: '60px',
            }}
          />
          <div className="p-4 space-y-4">
            <h1 className="text-center font-bold text-black">{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Howtouse

import React from 'react';
import './Howtouse.css';
const Howtouse = () => {
  return (
    <div className="howtocontainer">
      <div className="howtowrapper">
        <h1>Get a powerful computer.</h1>
        <img src="/moonquake/pc.jpeg" />
        <p>
          You need Intel i7 and Nvidia 1800 1800 or better to run virtual
          reality.
        </p>
      </div>
      <div>
        <h1>Get the VR device</h1>
        <img src="/moonquake/Best-VR-Headsets.jpg" />
        <p>
          You need VR headset , controllers , sensor to get moonquake
          experience.
        </p>
      </div>
      <div>
        <h1>Install related software</h1>
        <img src="/moonquake/steam.jpg" />
        <p>You need steam and VR app installer to run VR on your PC</p>
      </div>
      <div>
        <h1>Set up base station</h1>
        <img src="/moonquake/basest.jpg" />
        <p>
          The base stations need to be at least two meters off the ground to
          function properly, and they need to be less than five meters apart.
          Without them, you will not be able to use your headset.
        </p>
      </div>
      <div>
        <h1>Plug in related cable to run all components</h1>
        <img src="/moonquake/vrcable.png" />
        <p>After plug in pair the controllers with the link box</p>
      </div>
      <div>
        <h1>Setting Up the Room</h1>
        <img src="/moonquake/vrroom.png" />
        <p>
          Choose to set up a room-scale play area to enjoy moving around and
          fully engage with the VR experience. From your computer, open the
          SteamVR app. Click , and then select Room Setup > Room-scale
        </p>
      </div>
    </div>
  );
}

export default Howtouse



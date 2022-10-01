import React from 'react'
import './Teammember.css'
const Teammember = () => {
  function ImageWrapper({ src, style }) {
    return (
      <div
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
              src={src}
              alt=""
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
                ...style,
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="team-container">
      <div className="grid">
        <div className="card">
          <div className="card_img">
            <ImageWrapper src={'/moonquake/kazi.jpg'} />
          </div>
          <div className="card_body">
            <h2 className="card_title">kazi Hasib</h2>
            <h6 className="designation">Team Lead</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <ImageWrapper src={'/moonquake/syed.png'} />
          </div>
          <div className="card_body">
            <h2 className="card_title">Syed Rubayyat Akbar</h2>
            <h6 className="designation">VR Developer</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <ImageWrapper
              src={'/moonquake/turjo.jpg'}
              style={{
                objectPosition: '0 10%',
              }}
            />
          </div>
          <div className="card_body">
            <h2 className="card_title">Manoshi Das Turjo</h2>
            <h6 className="designation">Business Analyst</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="card">
          <div className="card_img">
            <ImageWrapper src={'/moonquake/Mubasshir.jpg'} />
          </div>
          <div className="card_body">
            <h2 className="card_title">Mubasshir Ahmed</h2>
            <h6 className="designation">Back End Developer</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <ImageWrapper src={'/moonquake/wasiul.jpg'} />
          </div>
          <div className="card_body">
            <h2 className="card_title">Wasiul Islam</h2>
            <h6 className="designation">Frontend Developer</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="card">
          <div className="card_img">
            <ImageWrapper src={'/moonquake/shanto_n.png'} />
          </div>
          <div className="card_body">
            <h2 className="card_title">Sajid Hasan Shanta</h2>
            <h6 className="designation">UI/UX Designer</h6>
            {/* <div className="call_btn">
              <a href="#" className="btn_icon">
                <i className="fas fa-phone-alt" />
                <span className="circle" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teammember

import React from 'react'
import './Teammember.css'
const Teammember = () => {
  return (
    <div className="team-container">
      <div className="grid">
        <div className="card">
          <div className="card_img">
            <img src="/moonquake/kazi.jpg" alt />
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
            <img src="/moonquake/syed.png" alt />
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
            <img src="/moonquake/turjo.jpg" alt />
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
            <img src="/moonquake/Mubasshir.jpg" alt />
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
            <img src="/moonquake/wasiul.jpg" alt />
          </div>
          <div className="card_body">
            <h2 className="card_title">Wasiul Islam</h2>
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
            <img src="/moonquake/shanto_n.png" alt />
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
  );
}

export default Teammember
import React from 'react'
import './About.css'
import about_us from '../../assets/about_us.jpg'
import I2DAMO from '../../assets/I2DAMO.png'
import default_icon from '../../assets/default-icon.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className="about-left">
            <img src={about_us} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>Empowering Innovation Through Advanced Algorithmic Solutions</h2>
            <p>IOF Private Limited is a premier technology consulting firm focused on algorithm development and optimization. 
            We strive to transform advanced research concepts into practical industry solutions. Our team, consisting of 
            professionals with extensive research experience, is committed to delivering innovative solutions customized to 
            meet your unique requirements.</p>
            <p><strong>Mission:</strong> To revolutionize industry practices by integrating advanced algorithmic solutions, enhancing 
            efficiency, and driving innovation. To be the go-to partner for businesses seeking to leverage advanced 
            algorithms to optimize their operations and forecast future trends.</p>
        </div>
      </div>
      <div className='about-container'>
        <div className="about-left">
          <h3>OUR PARTNER</h3>
          <div className='img-list'>
            <img src={I2DAMO} alt="" className='partner-icon'></img>
            <img src={default_icon} alt="" className='partner-icon'></img>
          </div>
        </div>
        <div className="about-right">
          <h3>OUR TEAM</h3>
          <div className='img-list'>
            <img src={default_icon} alt="" className='avatar'></img>
            <img src={default_icon} alt="" className='avatar'></img>
            <img src={default_icon} alt="" className='avatar'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
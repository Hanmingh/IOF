import React from 'react'
import './About.css'
import about_us from '../../assets/about_us.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_us} alt="" className='about-img'/>
            <img src="" alt="" className='play-icon'/>
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
  )
}

export default About
import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Transforming Industry with Cutting-Edge Algorithmic Solutions</h1>
            <p>Specializing in Machine Learning and Optimization for Finance, 
            Logistics, Healthcare, and Beyond</p>
            <button className='btn'>Learn more <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero
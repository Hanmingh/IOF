import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>High-Tech Solutions for Industry Optimisation & Forecasting, At Your Fingertips</h1>
            <p>Unlock your potential with our high-tech solutions, delivering clarity and precision for every challenge your business faces.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero
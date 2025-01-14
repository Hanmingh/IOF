import React from 'react'
import './Services.css'
import hospital from '../../assets/hospital.jpg'
import maritime from '../../assets/maritime.jpg'
import energy from '../../assets/energy.jpg'
import market from '../../assets/market.jpg'
import quantum from '../../assets/quantum.jpg'

import medical_icon from '../../assets/medical-icon.png'
import maritime_icon from '../../assets/maritime-icon.png'
import energy_icon from '../../assets/energy-icon.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={hospital} alt="" />
            <div className="caption">
              <img src={medical_icon} alt="" />
              <p>Pioneering Hospital Scheduling</p>
            </div>
        </div>
        <div className="service">
            <img src={maritime} alt="" />
            <div className="caption">
              <img src={maritime_icon} alt="" />
              <p>Navigating Maritime Logistics</p>
            </div>
        </div>
        <div className="service">
            <img src={energy} alt="" />
            <div className="caption">
              <img src={energy_icon} alt="" />
              <p>Revolutionizing Energy Infrastructure Management</p>
            </div>
        </div>
        <div className="service">
            <img src={maritime} alt="" />
            <div className="caption">
              <img src={maritime_icon} alt="" />
              <p>Navigating Maritime Logistics</p>
            </div>
        </div>
        <div className="service">
            <img src={energy} alt="" />
            <div className="caption">
              <img src={energy_icon} alt="" />
              <p>Revolutionizing Energy Infrastructure Management</p>
            </div>
        </div>
    </div>
  )
}

export default Services

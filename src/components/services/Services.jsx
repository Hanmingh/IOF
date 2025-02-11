import React, { useState } from 'react'
import './Services.css'
import hospital from '../../assets/hospital.jpg'
import maritime from '../../assets/maritime.jpg'
import energy from '../../assets/energy.jpg'
import market from '../../assets/market.jpg'
import quantum from '../../assets/quantum.jpg'

import medical_icon from '../../assets/medical-icon.png'
import maritime_icon from '../../assets/maritime-icon.png'
import energy_icon from '../../assets/energy-icon.png'
import market_icon from '../../assets/market-icon.png'
import quantum_icon from '../../assets/quantum-icon.png'

import bullet from '../../assets/bullet.png'

const Services = () => {
  const [modal, setModal] = useState({
    medical_modal: false,
    maritime_modal: false,
    energy_modal: false,
    market_modal: false,
    quantum_modal: false,
  });

  const toggleModal = (modalName) => {
    setModal((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  return (
    <div className='services'>
        <div className="service" onClick={() => toggleModal('medical_modal')}>
            <img src={hospital} alt="" />
            <div className="caption">
              <img src={medical_icon} alt="" />
              <p>Pioneering Hospital Scheduling</p>
            </div>
        </div>
        <div className="service" onClick={() => toggleModal('maritime_modal')}>
            <img src={maritime} alt="" />
            <div className="caption">
              <img src={maritime_icon} alt="" />
              <p>Navigating Maritime Logistics</p>
            </div>
        </div>
        <div className="service" onClick={() => toggleModal('energy_modal')}>
            <img src={energy} alt="" />
            <div className="caption">
              <img src={energy_icon} alt="" />
              <p>Revolutionizing Energy Infrastructure Management</p>
            </div>
        </div>
        <div className="service" onClick={() => toggleModal('market_modal')}>
            <img src={market} alt="" />
            <div className="caption">
              <img src={market_icon} alt="" />
              <p>The Art of Dynamic Trading Strategies</p>
            </div>
        </div>
        <div className="service" onClick={() => toggleModal('quantum_modal')}>
            <img src={quantum} alt="" />
            <div className="caption">
              <img src={quantum_icon} alt="" />
              <p>Harnessing Quantum Computing for Financial Mavericks</p>
            </div>
        </div>

        {modal.medical_modal && (
          <div className="modal">
            <div onClick={() => toggleModal('medical_modal')} className="overlay"></div>
            <div className="modal-content">
              <h3>Pioneering Hospital Scheduling Through Robust & Stochastic Dynamics</h3>
              <h2>Stochastic hospital scheduling optimization</h2>
              <p>Stochastic hospital scheduling optimization signifies a pivotal advancement in healthcare management, 
                effectively addressing the inherent complexity and uncertainty inherent in hospital operations.
                <br/>
                Unlike conventional deterministic scheduling methods, stochastic optimization techniques account 
                for uncertain variables like patient arrivals, emergency cases, and fluctuations in resource availability.
              </p>
              <ul>
                <li><img src={bullet} alt="" />Leveraging sophisticated probabilistic forecasting and optimization models, our solutions endeavor to 
                  create schedules that exhibit robustness, adaptability, sustainability, and the capacity to optimize resource 
                  utilization, all while upholding high-quality patient care and healthcare staff well-being.</li>
                <li><img src={bullet} alt="" />The significance of the iOF stochastic scheduling solution is underscored by its capacity to elevate 
                  patient outcomes, rationalize resource allocation, and curtail expenses by dynamically adjusting schedules in 
                  response to real-time developments.</li>
                <li><img src={bullet} alt="" />Cutting-edge methodologies encompass diverse approaches such as Markov decision processes, reinforcement 
                  learning, mixed-integer programming, queuing theory, and machine learning and deep learning-driven strategies.</li>
              </ul>
              <p>These innovations empower hospital administrators to make well-informed decisions that harmonize the intricate interplay between patient 
                requirements, operational efficiency, and resource limitations, ultimately reshaping the landscape of modern healthcare delivery.</p>
              <button className="close-modal" onClick={() => toggleModal('medical_modal')}>CLOSE</button>
            </div>
          </div>
        )}
        {modal.maritime_modal && (
          <div className="modal">
            <div onClick={() => toggleModal('maritime_modal')} className="overlay"></div>
            <div className="modal-content">
              <h3>Navigating Maritime Logistics with AI-Driven Bunker Procurement</h3>
              <h2>Unleash the Power of AI to Redefine Maritime Excellence</h2>
              <p>In the dynamic realm of maritime logistics, precision and efficiency reign supreme. Imagine a world where every bunker procurement 
                decision is not just data-driven but driven by the future itself.<br/> Welcome to the future of maritime excellence, where IOF emerges as 
                the pioneer, setting sail toward the horizon of innovation.</p>
              <button className="close-modal" onClick={() => toggleModal('maritime_modal')}>CLOSE</button>
            </div>
          </div>
        )}
        {modal.energy_modal && (
          <div className="modal">
            <div onClick={() => toggleModal('energy_modal')} className="overlay"></div>
            <div className="modal-content">
              <h2>Energy Management</h2>
              <p>Details about Revolutionizing Energy Infrastructure Management.</p>
              <button className="close-modal" onClick={() => toggleModal('energy_modal')}>CLOSE</button>
            </div>
          </div>
        )}
        {modal.market_modal && (
          <div className="modal">
            <div onClick={() => toggleModal('market_modal')} className="overlay"></div>
            <div className="modal-content">
              <h2>Dynamic Trading</h2>
              <p>Details about The Art of Dynamic Trading Strategies.</p>
              <button className="close-modal" onClick={() => toggleModal('market_modal')}>CLOSE</button>
            </div>
          </div>
        )}
        {modal.quantum_modal && (
          <div className="modal">
            <div onClick={() => toggleModal('quantum_modal')} className="overlay"></div>
            <div className="modal-content">
              <h2>Quantum Computing</h2>
              <p>Details about Harnessing Quantum Computing for Financial Mavericks.</p>
              <button className="close-modal" onClick={() => toggleModal('quantum_modal')}>CLOSE</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default Services

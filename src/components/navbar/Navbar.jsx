import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/IOFLogo_nobg.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Careers</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
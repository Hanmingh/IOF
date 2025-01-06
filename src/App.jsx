import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/services/services'
import Title from './components/title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our SERVICE' title='What We Provide'/>
        <Services/>
      </div>
    </div>
  )
}

export default App
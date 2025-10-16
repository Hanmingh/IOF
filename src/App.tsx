import { Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import About_Us from "@/pages/About_Us"
import Our_Service from "@/pages/Our_Service"
import Contact_Us from "@/pages/Contact_Us"
import Career from "@/pages/Career"
import ServiceHospital from "@/pages/services/Hospital"
import ServiceMaritime from "@/pages/services/Maritime"
import ServiceEnergy from "@/pages/services/Energy"
import ServiceMarket from "@/pages/services/Market"
import ServiceQuantum from "@/pages/services/Quantum"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About_Us />} />
        <Route path="services" element={<Our_Service />} />
        <Route path="services/hospital" element={<ServiceHospital />} />
        <Route path="services/maritime" element={<ServiceMaritime />} />
        <Route path="services/energy" element={<ServiceEnergy />} />
        <Route path="services/market" element={<ServiceMarket />} />
        <Route path="services/quantum" element={<ServiceQuantum />} />
        <Route path="contact" element={<Contact_Us />} />
        <Route path="career" element={<Career />} />
      </Route>
    </Routes>
  )
}

export default App


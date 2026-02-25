import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './constants/Header'
import Footer from './constants/Footer'
import Team from './pages/Team'
import Services from './pages/Services'
import TeamMember from './pages/TeamMember'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamMember />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
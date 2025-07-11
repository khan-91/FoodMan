import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default BodyComponent
import React from 'react'
import "../src/Styling/style.css"
import Navbar from "./Component/Navbar.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/HomePage"
import Services from './pages/Services'
import Amenities from './pages/Amenities'
import BookNow from './pages/BookNow'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />} />
          <Route path='/amenities' element={<Amenities />} />
          <Route path='/booknow' element={<BookNow />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App

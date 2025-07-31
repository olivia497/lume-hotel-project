import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/HomePage"
import Services from './pages/Services'
import Amenities from './pages/Amenities'
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/booknow' element={<BookNow />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

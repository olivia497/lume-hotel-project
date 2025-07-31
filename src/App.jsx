import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/HomePage"
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/booknow' element={<BookNow />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

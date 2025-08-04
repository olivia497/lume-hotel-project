import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/HomePage"
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Rooms from './pages/Rooms'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Restaurant from './pages/Restaurant'
import Event from './pages/Events'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <div className='container flex- grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/events' element={<Event />} />
              <Route path='/restaurant' element={<Restaurant />} />
              <Route path='/rooms' element={<Rooms />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/booknow' element={<BookNow />} />
            </Routes>
          </div>
          <Footer />
        </div>
    </>
  )
}

export default App

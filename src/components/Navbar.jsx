import React, { useState, useEffect } from 'react';
// import logo from " ";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change opacity after scrolling 50px

      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black underline underline-offset-8 rounded-md px-3 py-2'
      : 'text-black rounded-md px-3 py-2';

  const bookNowClass = ({ isActive }) =>
    isActive
      ? 'text-black underline underline-offset-8 rounded-md px-4 py-2 border-2 border-[rgb(35,17,10)] transition-all duration-300 hover:shadow-lg'
      : 'text-black rounded-md px-4 py-2 border-2 border-transparent hover:border-black transition-all duration-300 hover:shadow-lg hover:font-bold';

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[rgb(170,146,133)] shadow-lg' 
        : 'bg-[rgb(170,146,133,0.30)]'
    }`}>
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo Section - Left */}
            <div className="flex items-center">
              <NavLink className="flex items-center" to="/">
                <span className="hidden md:block text-black text-2xl font-bold">
                  Lume
                </span>
              </NavLink>
            </div>

            {/* Centered Navigation Links */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-6">
                <NavLink
                  to="/"
                  className={linkClass}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/events"
                  className={linkClass}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/restaurant"
                  className={linkClass}
                >
                  Restaurant
                </NavLink>
                <NavLink
                  to="/rooms"
                  className={linkClass}
                >
                  Rooms
                </NavLink>
                <NavLink
                  to="/contact"
                  className={linkClass}
                >
                  Contact & Info
                </NavLink>
              </div>
            </div>

            {/* Book Now Link - Right */}
            <div className="flex items-center">
              <NavLink
                to="/booknow"
                className={bookNowClass}
              >
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
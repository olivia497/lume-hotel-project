import React from 'react';
// import logo from " ";
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black underline underline-offset-8 rounded-md px-3 py-2'
      : 'text-black rounded-md px-3 py-2';

  return (
    <div>
    <nav className="border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between relative">
          
          {/* Logo Section - Left */}
          <div className="absolute left-0 flex items-center">
            <NavLink className="flex items-center mr-4" to="/">
              <span className="hidden md:block text-black text-2xl font-bold ml-2">
                Lume
              </span>
            </NavLink>
          </div>

          {/* Centered Navigation Links */}
          <div className="mx-auto">
            <div className="flex space-x-2">
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

          {/* Book Now Link - set to far right */}
          <div>
            <NavLink
              to="/booknow"
              className={linkClass}
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

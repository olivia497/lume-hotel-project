import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomeContact = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
  }

  return (
    <div className='flex justify-end items-center pr-32 my-20'>
      <div className='flex flex-col md:flex-row gap-8 items-center'>
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <img
            src="https://images.unsplash.com/photo-1699268066895-2b5066669aff?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hotel seating area"
            className='w-100 h-100 rounded-lg shadow-lg object-cover'
          />
        </div>

        {/* Text Section */}
        <div className='max-w-md space-y-4 text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>
            About Us
          </h1>
          <p className='text-gray-600 leading-relaxed text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo est placeat tempora quas
            reprehenderit aspernatur dolorum adipisci labore. Vero beatae officia veritatis
            consequatur accusamus sint ex reprehenderit fuga repudiandae enim.
          </p>
          <button 
            className='bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'
            onClick={handleContactClick}
          >
            Contact & Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
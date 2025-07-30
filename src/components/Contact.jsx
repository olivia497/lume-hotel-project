import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()

  const handleContactClick = () => {
    navigate('/contact')
  }

  return (
    <div className='flex justify-end items-center min-h-screen pr-32'>
      <div className='flex flex-col md:flex-row gap-8 items-center'>
        {/* Image Section */}
        <div className='flex-shrink-0'>
          <img
            src="src/assets/jonathan-borba-00fCk2lZn1c-unsplash.jpg"
            alt="hotel seating area"
            className='w-100 h-auto rounded-lg shadow-lg object-cover'
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

export default Contact;
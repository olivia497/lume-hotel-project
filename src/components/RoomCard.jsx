import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoomCard = ({ title, description, image, price, roomId }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/rooms?id=${roomId}`);
  };

  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group'>
      {/* Image Section */}
      <div className='relative h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
        {price && (
          <div className='absolute top-4 right-4 bg-amber-200 text-black px-3 py-1 rounded-full text-sm font-semibold'>
            ${price}/night
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className='p-6 space-y-4'>
        <h5 className='text-2xl font-bold text-gray-800 mb-2'>
          {title}
        </h5>
        
        <p className='text-gray-600 leading-relaxed text-sm'>
          {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem quo aliquam adipisci iste! In?"}
        </p>

        <button 
          className='w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200'
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default RoomCard
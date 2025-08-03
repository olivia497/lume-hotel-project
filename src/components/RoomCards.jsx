import React from 'react'
import { roomsData } from '../data/roomsData';

const RoomCards = () => {
  const handleViewDetails = (roomId) => {
    // Redirect to Rooms.jsx page with the room ID
    // window.location.href = `/rooms?id=${roomId}`;
    
    // Open in new tab
    window.open(`/rooms?id=${roomId}`, '_blank');
  };

  return (
    <section>
      <div>
        {/* Section Header */}
        <div> 
          <h2 className='text-lg font-bold text-center ms-30'>
            Our Rooms
          </h2>
          <p className='text-center ms-30'>
            Discover our carefully designed accommodations, each offering unique comfort and luxury for your perfect getaway.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="px-8 py-8 ms-30">
          <div className="grid grid-cols-3 gap-4 gap-8">
            {roomsData.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-800">${room.price}/night</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-1">👥</span>
                      <span>Up to {room.maxGuests} guests</span>
                    </div>
                    <button 
                      onClick={() => handleViewDetails(room.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomCards
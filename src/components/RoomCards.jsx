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
      <div className="bg-[rgb(197,96,23,0.70)] min-w-screen">
        {/* Section Header */}
        <div className="flex flex-col items-center min-w-screen"> 
          <h2 className="text-3xl font-bold text-center pt-20 pb-5">
            Our Rooms
          </h2>
          <p className="text-center">
            Discover our carefully designed accommodations, each offering unique comfort and luxury for your perfect getaway.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="flex justify-end items-center min-w-screen p-10 my-3 pb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {roomsData.map((room) => (
              <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-800">${room.price}/night</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Up to {room.maxGuests} guests</span>
                    </div>
                    <button 
                      onClick={() => handleViewDetails(room.id)}
                      className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
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
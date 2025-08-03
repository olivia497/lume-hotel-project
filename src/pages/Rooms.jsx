import React, { useState, useEffect } from 'react';
import { roomsData } from '../data/roomsData';

const Rooms = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    // Get room ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('id');
    
    if (roomId) {
      const room = roomsData.find(r => r.id === parseInt(roomId));
      setSelectedRoom(room);
    } else {
      // If no specific room ID, show the first room or a room selection
      setSelectedRoom(roomsData[0]);
    }
  }, []);

  const handleBookNow = (roomId) => {
    window.location.href = `/booking?roomId=${roomId}`;
  };

  const handleBackToRooms = () => {
    // Navigate back to home page or rooms overview
    window.history.back();
  };

  if (!selectedRoom) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Room not found</h2>
          <button 
            onClick={handleBackToRooms}
            className="bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Rooms
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="min-w-screen bg-white border-b">
        <div className="w-full px-4 py-4">
          <button 
            onClick={handleBackToRooms}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span className="mr-1">←</span>
            Back to Rooms
          </button>
        </div>
      </div>

      <div className="min-w-screen p-10">
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={selectedRoom.images[currentImageIndex]} 
                alt={selectedRoom.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              {selectedRoom.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-2">
                    {selectedRoom.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            {selectedRoom.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {selectedRoom.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-blue-600' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${selectedRoom.title} ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Details */}
          <div className="space-y-8">
            {/* Title and Price */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{selectedRoom.title}</h1>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">${selectedRoom.price}</div>
                  <div className="text-sm text-gray-500">per night</div>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <span className="mr-1"></span>
                  <span>Up to {selectedRoom.maxGuests} guests</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"></span>
                  <span>{selectedRoom.bedType}</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-1"></span>
                  <span>{selectedRoom.size}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Room</h3>
              <p className="text-gray-600 leading-relaxed">{selectedRoom.detailedDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Special Features</h3>
              <ul className="space-y-2">
                {selectedRoom.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0"> - </span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedRoom.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-6 border-t">
              <button 
                onClick={() => handleBookNow(selectedRoom.id)}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now - ${selectedRoom.price}/night
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Best rate guaranteed • Free cancellation up to 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Other Rooms Section */}
        <div className="mt-15 pt-8 border-t">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Explore Other Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {roomsData.filter(room => room.id !== selectedRoom.id).map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{room.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{room.description.substring(0, 100)}...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">${room.price}/night</span>
                    <button 
                      onClick={() => {
                        setSelectedRoom(room);
                        setCurrentImageIndex(0);
                        window.history.pushState({}, '', `?id=${room.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700"
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
      </div>
    </div>
  );
};

export default Rooms;
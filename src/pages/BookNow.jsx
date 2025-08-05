import React, { useState } from 'react';

const HotelBookingPage = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const rooms = [
    {
      id: 1,
      type: 'Deluxe',
      price: 299,
      originalPrice: 350,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400',
      amenities: ['Ocean View', 'King Bed', 'Free WiFi', 'Balcony'],
      maxGuests: 2,
      size: '45 sqm',
      rating: 4.8
    },
    {
      id: 2,
      type: 'Premium Suite',
      price: 449,
      originalPrice: 520,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400',
      amenities: ['City View', 'Separate Living Area', 'Mini Bar', 'Work Desk'],
      maxGuests: 4,
      size: '65 sqm',
      rating: 4.9
    },
    {
      id: 3,
      type: 'Standard',
      price: 189,
      originalPrice: 220,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400',
      amenities: ['Garden View', 'Queen Bed', 'Free WiFi', 'Coffee Maker'],
      maxGuests: 2,
      size: '30 sqm',
      rating: 4.6
    }
  ];

  const handleSearch = () => {
    if (checkIn && checkOut) {
      setCurrentStep(2);
    }
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setCurrentStep(3);
  };

  const handleBooking = () => {
    if (guestDetails.firstName && guestDetails.lastName && guestDetails.email) {
      setCurrentStep(4);
    }
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const totalPrice = selectedRoom ? selectedRoom.price * calculateNights() : 0;

  return (
    <div className="min-h-screen min-w-screen p-20">

      {/* Progress Steps */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-8 mb-8">
          {[
            { step: 1, label: 'Search' },
            { step: 2, label: 'Select Room' },
            { step: 3, label: 'Guest Details' },
            { step: 4, label: 'Confirmation' }
          ].map(({ step, label }) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep >= step ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step ? '✓' : step}
              </div>
              <span className={`ml-2 text-sm ${
                currentStep >= step ? 'text-amber-600 font-medium' : 'text-gray-500'
              }`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Search */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Stay</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adults</label>
                  <div className="relative">
                    <select
                      value={guests.adults}
                      onChange={(e) => setGuests({...guests, adults: parseInt(e.target.value)})}
                      className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                  <div className="relative">
                    <select
                      value={guests.children}
                      onChange={(e) => setGuests({...guests, children: parseInt(e.target.value)})}
                      className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
                    >
                      {[0,1,2,3,4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleSearch}
                disabled={!checkIn || !checkOut}
                className="w-full mt-8 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-200 text-lg"
              >
                Search Available Rooms
              </button>
            </div>
          </div>
        )}

        {/* Room Selection */}
        {currentStep === 2 && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Room</h2>
            <div className="mb-4 text-center text-gray-600">
              {calculateNights()} nights • {guests.adults} adults {guests.children > 0 && `• ${guests.children} children`}
            </div>
            
            <div className="space-y-6">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={room.image}
                        alt={room.type}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.type}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                            <span>{room.size}</span>
                            <span>Max {room.maxGuests} guests</span>
                            <div className="flex items-center">
                              <span className="ml-1">{room.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 line-through">${room.originalPrice}</div>
                          <div className="text-3xl font-bold text-gray-900">${room.price}</div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold text-gray-900">
                          Total: ${room.price * calculateNights()} for {calculateNights()} nights
                        </div>
                        <button
                          onClick={() => handleRoomSelect(room)}
                          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
                        >
                          Select Room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Guest Details */}
        {currentStep === 3 && selectedRoom && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Guest Information</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    Contact Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                      <input
                        type="text"
                        value={guestDetails.firstName}
                        onChange={(e) => setGuestDetails({...guestDetails, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                      <input
                        type="text"
                        value={guestDetails.lastName}
                        onChange={(e) => setGuestDetails({...guestDetails, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        Email*
                      </label>
                      <input
                        type="email"
                        value={guestDetails.email}
                        onChange={(e) => setGuestDetails({...guestDetails, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        value={guestDetails.phone}
                        onChange={(e) => setGuestDetails({...guestDetails, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Special Requests
                    </label>
                    <textarea
                      value={guestDetails.specialRequests}
                      onChange={(e) => setGuestDetails({...guestDetails, specialRequests: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Any special requests or preferences..."
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    Booking Summary
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Room</span>
                      <span className="font-medium">{selectedRoom.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Check-in</span>
                      <span className="font-medium">{checkIn}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Check-out</span>
                      <span className="font-medium">{checkOut}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Guests</span>
                      <span className="font-medium">{guests.adults} adults {guests.children > 0 && `, ${guests.children} children`}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Nights</span>
                      <span className="font-medium">{calculateNights()}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleBooking}
                    disabled={!guestDetails.firstName || !guestDetails.lastName || !guestDetails.email}
                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105"
                  >
                    Complete Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl font-bold">✓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8">
                Thank you {guestDetails.firstName}! Your reservation has been confirmed.
                A confirmation email has been sent to {guestDetails.email}.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Confirmation #:</span>
                    <span className="font-mono">OVR-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room:</span>
                    <span>{selectedRoom.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dates:</span>
                    <span>{checkIn} to {checkOut}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => window.print()}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Print Confirmation
                </button>
                
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Book Another Stay
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelBookingPage;
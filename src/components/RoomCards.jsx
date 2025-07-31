import React from 'react'
import RoomCard from './RoomCard' // Adjust path as needed

const RoomCards = () => {
  const roomsData = [
    {
      title: "Deluxe Room",
      description: "Spacious and elegant room with ocean views, perfect for couples seeking luxury and comfort.",
      image: "https://images.unsplash.com/photo-1647870988181-5298e3b9036e?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 299
    },
    {
      title: "Suite Premium",
      description: "Our premium suite offers unparalleled luxury with a separate living area and panoramic views.",
      image: "https://images.unsplash.com/photo-1647870988181-5298e3b9036e?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 459
    },
    {
      title: "Standard Room",
      description: "Comfortable and cozy accommodation with all essential amenities for a pleasant stay.",
      image: "https://images.unsplash.com/photo-1647870988181-5298e3b9036e?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 199
    }
  ]

  return (
    <section>
      <div>
        {/* Section Header */}
        <div> 
          <h2 className='text-lg font-bold text-center'>
            Our Rooms
          </h2>
          <p className='text-center'>
            Discover our carefully designed accommodations, each offering unique comfort and luxury for your perfect getaway.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="px-20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room, index) => (
              <RoomCard
                key={index}
                title={room.title}
                description={room.description}
                image={room.image}
                price={room.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomCards
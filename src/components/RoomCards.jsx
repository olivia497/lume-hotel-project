import React from 'react'
import { roomsData } from '../data/roomsData';
import RoomCard from './RoomCard'; 

const RoomCards = () => {
  return (
    <section>
      <div className="min-w-screen bg-background-sand">
        {/* Section Header */}
        <div className="flex flex-col items-center min-w-screen"> 
          <h2 className="text-3xl font-bold text-center pt-10">
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
              <RoomCard 
                key={room.id}
                title={room.title}
                description={room.description}
                image={room.image}
                price={room.price}
                roomId={room.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomCards
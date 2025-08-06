import React from 'react'
import FoodCarousel from '../components/FoodCarousel'

const Restaurant = () => {
  return (
    <div>
    {/* Background Image */}
      <div className="w-screen relative">
        <div 
          className="bg-cover bg-center bg-no-repeat h-150 flex items-center justify-center w-full" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1614962462970-b32959a9b78b?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
        </div>
      </div>
    <div className="pt-15">
      <div className="min-w-screen flex flex-col items-center pb-15">
        <h1 className="font-bold text-2xl pt-10">
          Breakfast
        </h1>
        <p className="w-3/4 p-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates id atque nobis earum modi, dolores fugit tempora corporis in harum quae quas, eius ut maxime totam cumque similique cum.
        </p>
      </div>

      <div className="min-w-screen flex flex-col items-center bg-background-sand py-15">
        <h2 className="font-bold text-2xl mb-12">Opening hours and menu</h2>
        
         <div className="max-w-md w-full space-y-4">
          {/* Dining room */}
          <div className="flex justify-between items-start border-b border-gray-300 pb-3">
            <div className="text-gray-700">Dining room</div>
            <div className="text-right text-gray-900">
              <div>Weekdays: 7 a.m. – 10 a.m.</div>
              <div>Weekend: 7 a.m. – 11 a.m.</div>
            </div>
          </div>

          {/* Room service */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-3">
            <div className="text-gray-700">Room-service</div>
            <div className="text-gray-900">7:30 a.m. – 10 a.m.</div>
          </div>

          {/* Menu */}
          <div className="flex justify-between items-center">
            <div className="text-gray-700">Menu</div>
            <div className="text-gray-900 font-medium">
              View menu <span className="ml-1">›</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <FoodCarousel />
      </div>
    </div>
  </div>
  )
}

export default Restaurant
import React from 'react'

const EventsHome = () => {
  return (
    <div className="flex flex-col md:flex-col min-w-screen p-10 bg-background-sand">
      <h1 className="text-center font-bold text-3xl mt-10">Special Events</h1>
      <p className="text-center mx-50 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis inventore quis consectetur quae saepe tempora fugit placeat eos nostrum! Fugit velit adipisci excepturi autem rerum id in aperiam fugiat harum, quia repellat dolorem quas nemo! Distinctio, tempora laboriosam numquam perferendis maxime maiores reprehenderit? Accusamus atque temporibus error ullam dolores!
      </p>
      <span className="text-center italic">Book your event today</span>
      <div className="text-center p-5">      
        <button className="border text-white font-bold bg-amber-600 p-5 w-80 rounded-xl hover:border-black transition-all duration-300 hover:shadow-lg hover:bg-amber-700 ">Learn More</button>
      </div>
    </div>
  )
}

export default EventsHome

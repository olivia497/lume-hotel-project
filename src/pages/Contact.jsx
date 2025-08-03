import React from 'react'
import FAQ from '../components/FAQ'

const Contact = () => {
  return (
    <>
    {/* Contact Background */}
      <div className="w-screen relative">
        <div className="bg-cover bg-center bg-no-repeat h-200 flex items-center justify-center w-full" 
             style={{backgroundImage: "url('https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
          <div className="bg-black text-white p-8 rounded-lg text-center w-300"
            style={{backgroundColor: 'rgba(48, 19, 5, 0.80)'}}
          >
            <h1 className="text-4xl font-bold mb-4">Contact & Info</h1>
            <p className="text-lg ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat libero voluptate quae, minus blanditiis culpa deserunt consequuntur enim ad aliquid vero maiores quibusdam inventore obcaecati quis illo dolor beatae alias similique nemo ipsa! Nam quisquam praesentium dolores ratione error in recusandae consequatur. Modi, totam accusantium esse quibusdam harum eligendi, praesentium officia veniam exercitationem adipisci architecto explicabo illum laboriosam repudiandae reiciendis placeat nam? Adipisci, repudiandae debitis. Debitis illum corrupti voluptatum reprehenderit. Ullam, beatae vero quaerat ab commodi laborum ut facilis deserunt cumque vel molestias, asperiores accusantium! Incidunt, saepe? Consequatur id optio sequi alias harum veniam voluptas, velit minus. Nihil, consectetur voluptatum.</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-screen relative p-8 my-8">
        <div className="flex space-x-8 ms-30">
          <img src="" alt="Map" className="border border-gray-400 w-1/2 h-100 bg-gray-100 rounded"/>
          <div className="w-1/2 space-y-6 py-20">
            <div>
              <h2 className="text-2xl font-bold mb-2">Lume Hotel</h2>
              <span className="text-gray-600">100 Real Street SW, City, Province, A1A 2B2</span>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-semibold">Booking</span>
              </div>
              <div className="space-x-4">
                <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">Book Online</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">1.877.111.111</button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">000.000.0000</button>
              </div>
            </div>
            <div>
              <span className="font-semibold">Email: </span>
              <span className="text-black">email@lumehotel.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />

    </>
  )
}

export default Contact
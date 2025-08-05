import React from 'react'

const ResturantHome = () => {
  return (
    <div>
      <h1 className="min-w-screen text-center font-bold text-3xl mt-10">Dine With Us</h1>
      <div className="min-w-screen flex justify-end">
        <div className="flex flex-col md:flex-col gap-8 items-center my-10">
          <img 
            src="https://images.unsplash.com/photo-1715249792880-f15e279c18dc?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="oysters"
            className="w-80 h-80 rounded-lg shadow-lg object-cover"
          />
          <span className="font-bold">Lorem ipsum dolor</span>
          <p className="w-2/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis iusto dicta, veniam aut consequatur itaque. Recusandae dolorem quaerat at.</p>
        </div>
        <div className="flex flex-col md:flex-col gap-8 items-center my-10">
          <img 
            src="https://images.unsplash.com/photo-1563019880-9b2ea5d89a12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
            alt="restaurant"
            className="w-80 h-80 rounded-lg shadow-lg object-cover"
        />
          <span className="font-bold">Lorem ipsum dolor</span>
          <p className="w-2/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis iusto dicta, veniam aut consequatur itaque. Recusandae dolorem quaerat at.</p>
        </div>
        <div className="flex flex-col md:flex-col gap-8 items-center my-10">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="dining"
            className="w-80 h-80 rounded-lg shadow-lg object-cover"
          />
          <span className="font-bold">Lorem ipsum dolor</span>
          <p className="w-2/3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis iusto dicta, veniam aut consequatur itaque. Recusandae dolorem quaerat at.</p>
        </div>
      </div>
    </div>
  )
}

export default ResturantHome
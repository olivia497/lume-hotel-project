import React from 'react'
import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const faqData = [
    {
      id: 1,
      question: "What is the check-in time?",
      answer: "We prepare rooms for them to be ready at 3 pm. If you arrive earlier and your room is available, we will be happy to accommodate you with an early check-in. If your room is not ready, we have free luggage storage so that you can enjoy the city freely."
    },
    {
      id: 2,
      question: "What is the checkout time?",
      answer: "At all of our hotels, we let our guests sleep in every day: there is no set checkout time when you book directly on our website or over the phone! Simply notify us of your preferred time of departure at check-in. Certain days may be excluded. If this is the case, or if the reservation was not made directly with us, then the checkout time is set at noon."
    },
    {
      id: 3,
      question: "Where can I store my luggage if my room is not ready when I arrive at the hotel?",
      answer: "We have free luggage storage available at all times in the lobby. Feel free to ask at the front desk if you need to leave your luggage with us for five minutes or a few hours."
    },
    {
      id: 4,
      question: "If we arrive late, will our reservation be cancelled?",
      answer: "Late arrivals will not be cancelled. However, it is best to inform the hotel team of your expected arrival time, if possible, so that they are aware you will indeed be arriving."
    },
    {
      id: 5,
      question: "Do you offer valet parking?",
      answer: "Yes, we offer 24-hour indoor parking with valet service. When you arrive at the hotel, simply park in front and our valet team will take care of your car. Universal charging stations for electric vehicles are also available."
    },
    {
      id: 6,
      question: "How far is the hotel from Calgary International Airport?",
      answer: "The hotel is approximately a twenty minute drive from the airport depending on traffic. We can arrange transportation or you can take a taxi, limousine, or rental car."
    }
  ]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-gray-800 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                <div className={`w-0 h-0 transition-transform duration-200 ${
                  openItems[item.id] 
                    ? 'border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-600 rotate-180' 
                    : 'border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-600'
                }`}></div>
              </div>
            </button>
            
            {openItems[item.id] && (
              <div className="px-6 pb-4 pt-0">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
import React from 'react'
import TextType from './TextType'

const HomePageBackground = () => {
  return (
    <div>
      {/* Background Image */}
      <div className="w-screen relative">
        <div 
          className="bg-cover bg-center bg-no-repeat h-200 flex items-center justify-center w-full" 
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
          <div className="bg-black p-8 rounded-lg text-center w-300"
            style={{backgroundColor: 'rgba(170, 146, 133, 0.70)'}}>
            {/* Typing Text */}
            <h1 className="text-4xl mb-4">      
              <div className="flex items-center justify-center text-9xl my-10" style={{ top: '400px'}}>
              <TextType 
                text={["Lume Hotel", "Escape & Unwind"]}
                typingSpeed={120}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
              </div>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageBackground

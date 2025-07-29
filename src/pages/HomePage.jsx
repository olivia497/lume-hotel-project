import React from 'react'
import HomeImage from '../components/HomeImage'
import About from '../components/About'
import TextType from '../components/TextType'

const HomePage = () => {
  return (
    <>
      <HomeImage />
      <div className="absolute inset-0 flex items-center justify-center text-9xl" style={{ top: '400px'}}>
      <TextType 
        text={["Lume Hotel", "Escape. Unwind. Glow."]}
        typingSpeed={120}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      </div>
      <About />
    </>
  )
}

export default HomePage

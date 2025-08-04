import React from 'react'
import TextType from '../components/TextType'

const Events = () => {
  return (
    <div className="flex items-center justify-center text-2xl my-10 ps-40" style={{ top: '400px'}}>
      <TextType 
        text={["Coming soon..."]}
        typingSpeed={120}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
  )
}

export default Events

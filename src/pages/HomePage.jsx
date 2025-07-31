import React from 'react'
import HomeImage from '../components/HomeImage'
import HomeContact from '../components/HomeContact'
import TextType from '../components/TextType'
import RoomCards from '../components/RoomCards'

const HomePage = () => {
  return (
    <>
      <HomeImage />
      <div className="flex items-center justify-center text-9xl my-10 ps-40" style={{ top: '400px'}}>
      <TextType 
        text={["Lume Hotel", "Escape & Unwind"]}
        typingSpeed={120}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
      </div>
      <HomeContact />
      <RoomCards />
    </>
  )
}

export default HomePage

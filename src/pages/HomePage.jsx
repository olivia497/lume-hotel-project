import React from 'react'
// import HomeImage from '../components/HomeImage'
import HomeContact from '../components/HomeContact'
import RoomCards from '../components/RoomCards'
import HomePageBackground from '../components/HomePageBackground'
import ResturantHome from '../components/ResturantHome'
import EventsHome from '../components/EventsHome'

const HomePage = () => {
  return (
    <>
      <HomePageBackground />
      <HomeContact />
      <RoomCards />
      <ResturantHome />
      <EventsHome />
    </>
  )
}

export default HomePage

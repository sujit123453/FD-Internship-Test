import React from 'react'
import Navbar from '../components/Navbar'
import { bg } from '../assets/assets.js'
import HeroBanner from '../components/HeroBanner.jsx'
import PlantCard from '../components/PlantCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
    <div 
      className='relative w-full min-h-screen sm:min-h-[1800px] md:min-h-[2200px] lg:min-h-[2592px] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Navbar/>
      <HeroBanner/>
    </div>
    <PlantCard/>
    <SectionTitle/>
    <TestimonialCard/>
    <Footer/>
    </div>
  )
}

export default Home

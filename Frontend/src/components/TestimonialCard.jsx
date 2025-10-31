import React, { useState } from 'react'
import { group22, testimonialCardsData } from '../assets/assets'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TestimonialCard=()=>{
  const [currentCard, setCurrentCard] = useState(0);
  const card = testimonialCardsData[currentCard];
  
  const nextCard=()=>{
    setCurrentCard((prev) => (prev + 1)%testimonialCardsData.length);
  };
  
  const prevCard=()=>{
    setCurrentCard((prev) => (prev- 1 + testimonialCardsData.length) % testimonialCardsData.length);
  };
  
  return (
    <div className='bg-[rgba(27,35,22,1)] pb-20 px-4 xl:px-0'>
      <img src={group22} alt="group22" className='mx-auto pt-10 xl:pt-20'/>
      <div className='flex flex-col xl:flex-row pb-10 xl:items-center xl:justify-between mt-6 xl:mt-20 p-4 xl:pb-30 xl:pr-40 relative overflow-visible border-l border-r border-l-white/30 border-r-white/30 rounded-[40px] xl:rounded-[77px] bg-white/5 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1600px] xl:w-[1600px] h-auto xl:h-[705px] mx-auto xl:shrink-0 '>
        
            <img src={card.image} alt="plant" className=' w-full max-w-[280px] sm:max-w-[350px] md:max-w-[877px] lg:max-w-[877px] xl:w-[877px] h-[280px] sm:h-[350px] md:h-[877px] lg:h-[877px] xl:h-[877px] object-cover mb-4 xl:mb-25 mx-auto xl:mx-0'   />
        <div className='flex flex-col gap-4 xl:gap-10 max-w-xl mx-auto xl:mx-0'>
            

            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold text-white text-center xl:text-left'>{card.title}</h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-300 text-center xl:text-left'>{card.description1}</p>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-300 text-center xl:text-left'>{card.description2}</p>
            
        <div className='flex flex-col sm:flex-row xl:justify-between sm:justify-between px-10 items-center gap-3'>
            <button className='border p-2 xl:p-3 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 rounded-lg xl:rounded-xl font-semibold border-white w-full sm:w-[160px] lg:w-[180px] xl:w-[217px] h-[40px] lg:h-[50px] xl:h-[64px] xl:-m-7 xl:ml-1 hover:cursor-pointer hover:text-black hover:bg-white'>Explore</button>
            <div className='flex items-center gap-2 xl:justify-between'>
                <button onClick={prevCard}><MdKeyboardArrowLeft size={30} className='text-white hover:cursor-pointer' /></button>
                <span className='text-white font-semibold'>
                  <span className='text-xl'>{String(currentCard + 1).padStart(2, '0')}</span>
                  <span className='text-base'>/05</span>
                </span>
                <button onClick={nextCard}><MdKeyboardArrowRight size={30} 
                className='text-white hover:cursor-pointer' /></button>
            </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center mt-3 sm:mt-4 lg:mt-10 space-x-1 sm:space-x-2">
                    {testimonialCardsData.map((_, index) => (
                        <span 
                            key={index}
                            className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                                index === currentCard 
                                    ? 'opacity-100 w-8' 
                                    : 'opacity-50'
                            }`}
                        ></span>
                    ))}
                </div>
    </div>
  )
}

export default TestimonialCard

import React from 'react'
import { group41, testimonialsData } from '../assets/assets'
import { TiStar, TiStarHalf } from 'react-icons/ti'

const SectionTitle = () => {
    return (
        <div className='bg-[rgba(27,35,22,1)] pb-20 px-4'>
            <img src={group41} alt="group41" className='mx-auto pt-10 ' />
            <div className='mx-auto max-w-8xl pb-10'>
                <div className='flex flex-col md:flex-row gap-10 md:gap-6 justify-center items-center'>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className='flex border-b-[0.1px] border-l-[0.3px] border-white/30 w-full max-w-[350px] md:max-w-[300px] lg:max-w-[400px] rounded-[77px] h-[350px] md:h-[380px] bg-white/5 shadow-[0px_9px_18.4px_0px_rgba(0,0,0,0.25)]'>
                            <div>
                                <div className='flex gap-3 md:gap-4 mt-6 md:mt-8 items-center justify-center px-2'>
                                    <div className="shrink-0">
                                        <img className="h-16 w-16 md:h-18 md:w-18 rounded-full object-cover" src={testimonial.image} alt={`${testimonial.name} Profile`} />
                                    </div>
                                    <div>
                                        <p className="text-2xl md:text-3xl text-white font-semibold mb-1 pt-2 pl-2">{testimonial.name}</p>
                                        <div className="flex text-yellow-400 text-base md:text-lg pl-2 mb-0">
                                            <span className="mr-0.5"><TiStar /></span>
                                            <span className="mr-0.5"><TiStar /></span>
                                            <span className="mr-0.5"><TiStar /></span>
                                            <span className="mr-0.5"><TiStar /></span>
                                            <span className="text-yellow-400 text-opacity-50"><TiStarHalf /></span>
                                        </div>
                                    </div>
                                </div>
                                <p className='text-lg md:text-xl text-gray-300 p-6 md:p-8 mt-3 md:mt-5'>{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionTitle

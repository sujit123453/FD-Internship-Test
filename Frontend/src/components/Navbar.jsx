import React, { useState, useEffect } from 'react'
import {  logo, plantNames } from '../assets/assets'
import { ArrowDown, ChevronDown, Search, ShoppingCart } from 'lucide-react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlantDropdownOpen, setIsPlantDropdownOpen] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = () => {
      if (isPlantDropdownOpen) {
        setIsPlantDropdownOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isPlantDropdownOpen]);
  
  
  return (
    <div>
      <div className='flex items-center justify-between py-3 sm:py-4 md:py-5 mx-4 sm:mx-6 md:mx-8 lg:mx-32 h-16 sm:h-18 md:h-20'>
        <div className='flex gap-2 cursor-pointer'>
        <img
                      src={logo}
                      alt="logo"
                      className="w-12 h-12"
                    />
                    <h2 className="text-3xl font-bold pt-2 text-gray-300">FloraVision.</h2>
                    </div>
         <div className='hidden sm:block'>
            <ul className='flex gap-3 sm:gap-4 md:gap-6 lg:gap-12'>
                <li><a href="#home" className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer'>Home</a></li>
                <li className='relative'>
                  <div className='text-gray-300 flex gap-1 items-center hover:text-gray-500 transition-colors cursor-pointer' onClick={(e) => { e.stopPropagation(); setIsPlantDropdownOpen(!isPlantDropdownOpen); }}>
                    Plants Type<ChevronDown/>
                  </div>
                  {isPlantDropdownOpen && (
                    <div className='absolute top-full left-0 mt-2 bg-[rgba(27,35,22,0.95)] rounded-lg p-3 min-w-[200px] z-50'>
                      <ul className='flex flex-col gap-2'>
                        {plantNames.map((plant, index) => (
                          <li key={index}>
                            <a href="#plants" className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer block'>{plant}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                <li><a href="#more" className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer'>More</a></li>
                <li><a href="#contact" className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer'>Contact</a></li>
            </ul>
         </div>
         <div className='flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 cursor-pointer'>
            <Search className='text-gray-300 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-blue-600' />
            <ShoppingCart className='text-gray-300 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-blue-600' />
            <HiOutlineMenuAlt4 
              className='text-gray-300 w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-blue-600 sm:hidden' 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
         </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='sm:hidden bg-[rgba(27,35,22,0.95)] mx-4 rounded-lg mt-2 p-4'>
          <ul className='flex flex-col gap-4'>
            <li><a href="#home"  className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer block'>Home</a></li>
            <li><a href="#plants"  className='text-gray-300 hover:text-gray-500 transition-colors flex gap-2 cursor-pointer '>Plants Type<ChevronDown/></a></li>
            <li><a href="#testimonials"  className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer block'>More</a></li>
            <li><a href="#contact"  className='text-gray-300 hover:text-gray-500 transition-colors cursor-pointer block'>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

import { ArrowRight, ChevronRight, Play, ShoppingBag, Star } from 'lucide-react'
import React, { useState } from 'react'
import { group39, img1, img2, img3,    img6,  img7,  profile1 } from '../assets/assets'
import { TiStar, TiStarHalf } from "react-icons/ti";

const HeroBanner = () => {
    const plants = [
        { id: 1, image: img1, name: "Aglaonema plant" },
        { id: 2, image: img2, name: "Monstera plant" },
        { id: 3, image: img3, name: "Fiddle Leaf Fig" }
        
    ];
    
    const [currentPlant, setCurrentPlant] = useState(0);
    
    const nextPlant = () => {
        setCurrentPlant((prev) => (prev + 1) % plants.length);
    };
    return (
        <div>
        <div className='flex flex-col md:flex-row justify-between items-start px-5 sm:px-[39px] lg:px-[100px] pt-[280px] mb-10 sm:pt-[230px] lg:pt-[280px] gap-8 md:gap-4 lg:gap-0'>
            <div className='flex-1 '>
                <div className='lg:w-[802px] md:w-[400px] sm:w-[650px] text-white'>
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-8xl md:text-5xl text-gray-200'>Earth's Exhale </h1>
                    <p className='text-sm sm:text-base text-gray-200 mt-2'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus quos, sed maxime est nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    <div className='mt-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0'>
                        <button className='border border-gray-300 text-lg sm:text-xl text-gray-300 px-3 sm:px-4 py-2 rounded-md'>Buy Now</button>
                        <button className='border border-gray-300 rounded-full px-2 py-2 sm:ml-3'><Play size={20} /></button>
                        <p className='font-medium text-gray-300 px-0 sm:px-2'>Live Demo...</p>
                    </div>
                    <div className="mt-[120px] lg:w-[409px] sm:w-[300px] h-auto sm:h-[237px] rounded-[35px] sm:rounded-[45px]">
                        <div className="w-full max-w-sm p-6 text-white rounded-4xl border shadow-2xl border-white/10 backdrop-blur-md bg-white/5">
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="shrink-0">
                                    <img className="h-12 w-12 rounded-full object-cover" src={profile1} alt="Ronnie Hamill Profile" />
                                </div>
                                <div>
                                    <p className="text-sm font-light  mb-1 pt-2 pl-2">Ronnie Hamill</p>
                                    <div className="flex text-yellow-400 text-sm pl-2 mb-0">
                                        <span className="mr-0.5"><TiStar /></span>
                                        <span className="mr-0.5"><TiStar /></span>
                                        <span className="mr-0.5"><TiStar /></span>
                                        <span className="mr-0.5"><TiStar /></span>
                                        <span className="text-yellow-400 text-opacity-50"><TiStarHalf /></span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-visible flex flex-col justify-end items-center w-[250px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[490px] h-[300px] sm:h-[360px] md:h-[400px] lg:h-[450px] xl:h-[500px] bg-white/5 border border-white/10 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 rounded-4xl sm:rounded-b-3xl md:rounded-b-4xl lg:rounded-b-[2.5rem] xl:rounded-b-[3rem] mt-0 sm:-mt-[30px] md:-mt-[60px] lg:-mt-[120px] xl:-mt-[200px] mx-auto md:mx-0" style={{borderTopRightRadius: '-100% 5000px', borderTopLeftRadius: '-100% 5000px'}}>
                <img
                    src={plants[currentPlant].image}
                    alt={`${plants[currentPlant].name} in a white pot`}
                    className="absolute -top-6 sm:-top-8 md:-top-12 lg:-top-16 xl:-top-20 object-cover drop-shadow-2xl w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-xs h-auto"
                />
                <div >

                
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-1">Indoor Plant</p>
                <div className='flex items-center justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                    <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-6">{plants[currentPlant].name}</h2>
                    <button onClick={nextPlant} className='text-white font-semibold pb-2 sm:pb-3 lg:pb-4 pl-2 sm:pl-4 lg:pl-6 cursor-pointer hover:text-gray-300'><ChevronRight className='w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6' /></button>
                </div>

                <button className="flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 py-1.5 sm:py-2 border border-white text-white text-xs sm:text-sm lg:text-base rounded-lg hover:bg-white hover:text-black transition duration-300">
                    Buy Now
                </button>
                    </div>
                <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6 space-x-1 sm:space-x-2">
                    {plants.map((_, index) => (
                        <span 
                            key={index}
                            className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
                                index === currentPlant 
                                    ? 'opacity-100 w-8' 
                                    : 'opacity-50'
                            }`}
                        ></span>
                    ))}
                </div>

            </div>
        </div>
            <div className='flex flex-col items-center justify-between mt-10'>
                <img src={group39} alt="group39"   />
                <div className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1619px]  h-auto sm:h-[220px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[427px] bg-white/5 border border-white/10 rounded-[30px] sm:rounded-[50px] md:rounded-[80px] lg:rounded-[100px] xl:rounded-[120px] 2xl:rounded-[151px] shadow-xl flex  md:flex-row flex-col  items-center justify-between overflow-visible px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 relative mx-auto">
      
      <div className="shrink-0 relative order-1 md:order-1">
        <img
          src={img6}
          alt="Desk Decoration Plant"
          className="sm:w-[250px] sm:h-[300px] md:w-[350px] md:h-[420px] lg:w-[450px] lg:h-[540px] xl:w-[550px] xl:h-[640px] 2xl:w-[601px] 2xl:h-[701px] object-contain drop-shadow-2xl pb-[100px]"
        />
      </div>

      <div className="flex flex-col justify-center text-white space-y-3 md:space-y-0 text-center md:text-left order-2 md:order-2 md:ml-4 lg:ml-6 xl:ml-10">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold">For Your Desks Decorations</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 sm:max-w-sm md:max-w-md">
          I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
        </p>

        <p className="text-base sm:text-lg font-semibold pt-1 sm:pt-2">Rs. 599/-</p>

        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
          <button className="border border-white text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-xl hover:bg-white hover:text-black transition-all">
            Explore
          </button>

          <button className="border border-white p-1.5 sm:p-2 rounded-xl hover:bg-white hover:text-black transition-all">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </div>
                
    <div className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1619px] mt-50  h-auto sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[427px] bg-white/5 border border-white/10  rounded-[30px] sm:rounded-[50px] md:rounded-[80px] lg:rounded-[100px] xl:rounded-[120px] 2xl:rounded-[151px] shadow-xl flex flex-col md:flex-row items-center justify-between overflow-visible px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 relative mx-auto mb-10">
    <div className="flex flex-col justify-center  text-white space-y-3 md:space-y-0 text-center md:text-left order-1 md:order-1">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-semibold">For Your Desks Decorations</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 sm:max-w-sm md:max-w-md">
          I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
        </p>

        <p className="text-base sm:text-lg font-semibold pt-1 sm:pt-2">Rs. 599/-</p>

        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
          <button className="border border-white text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-sm sm:text-base rounded-xl hover:bg-white hover:text-black transition-all">
            Explore
          </button>

          <button className="border border-white p-1.5 sm:p-2 rounded-xl hover:bg-white hover:text-black transition-all">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <div className="shrink-0 relative order-2 md:order-2">
        <img
          src={img7}
          alt="Desk Decoration Plant"
          className="sm:w-[250px] sm:h-[300px] md:w-[320px] md:h-[420px] lg:w-[450px] lg:h-[540px] xl:w-[550px] xl:h-[640px] 2xl:w-[601px] 2xl:h-[701px] object-contain drop-shadow-2xl pb-[100px] mb-10"
        />
      </div>
    </div>
            </div>
            </div>

    )
}

export default HeroBanner







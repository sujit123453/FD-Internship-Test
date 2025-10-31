import React from 'react'
import { group40, plantsData } from '../assets/assets'
import { ShoppingBag } from 'lucide-react'

const PlantCard = () => {
  return (
    <div className='bg-[rgba(27,35,22,1)] pb-20'>
      <img src={group40} alt="group40" className='mx-auto pt-20' />
      <div className='flex flex-wrap justify-center p-15 max-w-[1800px] mx-auto gap-x-12 gap-y-60'>
        {plantsData.map((plant) => (
          <div key={plant.id} className='flex flex-col justify-between p-10 relative overflow-visible border border-white/30 rounded-[77px] w-[512px] h-[680px] bg-white/5 shrink-0'>
            <img src={plant.image} alt={plant.name} className='absolute -top-32 left-1/2 transform -translate-x-1/2 w-[459px] h-[459px] object-contain drop-shadow-2xl' />
            
            <div className='mt-80'>
              <h1 className='text-gray-300 text-3xl mb-4'>{plant.name}</h1>
              <p className='text-gray-300 text-xl mb-6'>{plant.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-3xl font-semibold text-white'>RS. {plant.price}/-</p>
                <button className="border border-white p-3 rounded-xl mr-9 hover:bg-white hover:text-black transition-all">
                  <ShoppingBag className="w-7 h-7 text-white hover:text-black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlantCard

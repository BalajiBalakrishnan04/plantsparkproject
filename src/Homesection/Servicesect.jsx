import React from 'react'
import Serviceimg from '../Assets/home/service.jpeg';

export const Servicesect = () => {
  return (
    <div className='w-full min-h-100vh py-[40px] px-[50px] flex flex-col justify-center items-center gap-[60px]'>
        <p className='text-[26px] text-[#087620] '>SERVICES</p>
        <div  className='w-full grid grid-cols-2 gap-[30px]'>
      <div className='w-full flex flex-col gap-[20px]'>
        <div className='flex flex-col gap-[15px] items-center  px-[20px]  rounded-[20px] '><p className='text-[22px] text-[#7BD001] font-[500] '>Wide Selection of Plants</p>
        <p className='w-full text-[18px] indent-[15px] text-[black] leading-[1.7]'>We provide a variety of plants, including indoor, outdoor, ornamental, and exotic species to suit every space.</p></div>
        <div className='flex flex-col gap-[15px] items-center  px-[20px]  rounded-[20px] '><p className='text-[22px] text-[#7BD001] font-[500]'>Plant Care Tips</p>
        <p className='w-full text-[18px] indent-[15px] text-[black] leading-[1.7]'>Our experts are here to guide you with tips on how to care for your plants, from watering schedules to optimal sunlight requirements.</p></div>
        <div className='flex flex-col gap-[15px] items-center  px-[20px] rounded-[20px] '><p className='text-[22px] text-[#7BD001] font-[500]'>Custom Plant Arrangements</p>
        <p className='w-full text-[18px] indent-[15px] text-[black] leading-[1.7]'>Need a specific plant arrangement for your home or office? We create personalized plant setups based on your preferences.</p></div>
      </div>
      <div className='w-[100%]'>
        <img src={Serviceimg} className='w-[85%] h-[85%] rounded-[10px] opacity-95'/>
      </div>
      </div>
    </div>
  )
}

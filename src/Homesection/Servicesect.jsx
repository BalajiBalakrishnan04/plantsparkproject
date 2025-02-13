import React from 'react'
import Serviceimg from '../Assets/home/service.jpeg';

export const Servicesect = () => {
  return (
    <div className='w-full min-h-100vh py-[40px] [@media(min-width:900px)]:px-[50px] [@media(min-width:600px)]:text-[22px] [@media(min-width:500px)]:px-[30px] px-[20px] flex flex-col justify-center items-center gap-[60px]'>
        <p className='[@media(min-width:900px)]:text-[26px] [@media(min-width:600px)]:text-[24px] [@media(min-width:250px)]:text-[22px] text-[#087620] '>SERVICES</p>
        <div  className='w-full grid [@media(min-width:1000px)]:grid-cols-2  gap-[40px]'>
      <div className='w-full flex flex-col gap-[20px] '>
        <div className='w-full flex flex-col gap-[15px] items-center  px-[20px]  rounded-[20px] '><p className='[@media(min-width:600px)]:text-[22px] [@media(min-width:250px)]:text-[19px] text-[#7BD001] font-[500] '>Wide Selection of Plants</p>
        <p className='w-full [@media(min-width:900px)]:text-[18px] [@media(min-width:500px)]:text-[17px] [@media(min-width:250px)]:text-[14px] indent-[15px] text-[black] leading-[1.7] text-justify'>We provide a variety of plants, including indoor, outdoor, ornamental, and exotic species to suit every space.</p></div>
        <div className='flex flex-col gap-[15px] items-center  px-[20px]  rounded-[20px] '><p className='[@media(min-width:600px)]:text-[22px] [@media(min-width:250px)]:text-[19px] text-[#7BD001] font-[500]'>Plant Care Tips</p>
        <p className='w-full [@media(min-width:900px)]:text-[18px] [@media(min-width:500px)]:text-[17px] [@media(min-width:250px)]:text-[14px] indent-[15px] text-[black] leading-[1.7] text-justify'>Our experts are here to guide you with tips on how to care for your plants, from watering schedules to optimal sunlight requirements.</p></div>
        <div className='flex flex-col gap-[15px] items-center  px-[20px] rounded-[20px] '><p className='[@media(min-width:600px)]:text-[22px] [@media(min-width:250px)]:text-[19px] text-[#7BD001] font-[500]'>Custom Plant Arrangements</p>
        <p className='w-full [@media(min-width:900px)]:text-[18px] [@media(min-width:500px)]:text-[17px] [@media(min-width:250px)]:text-[14px] indent-[15px] text-[black] leading-[1.7] text-justify'>Need a specific plant arrangement for your home or office? We create personalized plant setups based on your preferences.</p></div>
      </div>
      <div className='w-[100%] flex justify-center items-center'>
        <img src={Serviceimg} className='[@media(min-width:900px)]:w-[380px] [@media(min-width:900px)]:h-[350px] [@media(min-width:600px)]:w-[400px] [@media(min-width:600px)]:h-[350px] [@media(min-width:400px)]:w-[280px] [@media(min-width:400px)]:h-[250px] [@media(min-width:250px)]:w-[220px] [@media(min-width:250px)]:h-[200px] rounded-[10px] opacity-95'/>
      </div>
      </div>
    </div>
  )
}

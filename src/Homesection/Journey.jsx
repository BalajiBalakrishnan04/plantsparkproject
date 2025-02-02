import React from 'react'

export const Journey = () => {
  return (
    <div className='py-[40px] bg-[#edeeed] flex flex-col items-center gap-[40px] my-[40px]'>
        <p className='text-[26px] text-[#087620] '>OUR JOURNEY</p>
        <div className='w-full grid grid-cols-3 gap-[30px] px-[40px] text-center '>
        <div className='flex flex-col gap-[10px] items-center  px-[20px] '><p className='text-[22px] text-[#087620] font-[600] '>5+ Years</p>
        <p className='w-full text-[20px] indent-[15px]  text-[black] text-center'>Experience in Plant Selling</p></div>
        <div className='flex flex-col gap-[10px] items-center  px-[20px] '><p className='text-[22px] text-[#087620] font-[600] '>50,000+</p>
        <p className='w-full text-[20px] indent-[15px]  text-[black] text-center'> Happy Customers</p></div>
        <div className='flex flex-col gap-[10px] items-center  px-[20px] '><p className='text-[22px] text-[#087620] font-[600] '>100+</p>
        <p className='w-full text-[20px] indent-[15px]  text-[black] text-center'>Plant Varieties Available</p></div>
        
        
      </div>
    </div>
  )
}

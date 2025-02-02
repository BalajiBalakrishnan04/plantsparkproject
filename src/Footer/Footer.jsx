import React from 'react'
import logo from '../Assets/plant_logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';



export const Footer = () => {
  const copyright = String.fromCodePoint(169);
  return (
    <div className='w-full min-h-100vh pt-[40px] pb-[20px] bg-[#000000d8] flex flex-col gap-[30px] px-[5px]'>
      <div className='w-full flex px-[40px]'>
        <div className='w-[40%] flex flex-col gap-[20px]'>
<p className='flex items-center justify-center gap-[10px]'><img src= {logo} className='w-[30px]'/><p className='text-[white] text-[20px] '>PLANTSPARK</p></p>
<p className='flex flex-col text-[white] text-[17px] indent-[15px] leading-[1.5]'>Explore a diverse collection of indoor and outdoor plants, stylish pots, and essential gardening tools. Get swift delivery, expert care guidance, and a seamless shopping experience. Transform your space with lush greenery effortlessly!</p>
        </div>
        <ul className='w-[25%] list-none text-[white] text-[18px] flex flex-col gap-[15px] items-center cursor-pointer'>
              <li >QUICK LINKS</li>
              <Link to={'/'} className="no-underline text-inherit"><li className='hover:text-[#7BD001] onclick'>Home</li></Link>
              <Link to={'/product'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>Product</li></Link>
              <Link to={'/about'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>About</li></Link>
              <Link to={'/contact'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>Contact</li></Link>
        </ul>
        
        <div className='w-[35%] flex flex-col gap-[15px]  text-[white] text-[18px]'>
          <p className='text-center'>CONTACT</p>
          <p className='flex gap-[4px] items-center'><FaLocationDot className='text-[19px]'/> : 3524, Parkway Street, Los Angeles, USA</p>
          <p className='flex gap-[4px] items-center'><MdEmail className='text-[19px]'/>: plantsparksupport@gmail.com</p>
          <p className='flex gap-[4px] items-center'><IoCallSharp className='text-[19px]'/> : 9678678974 </p>
          </div>      
        </div>
        <hr />
        <div className='w-full px-[40px] flex gap-[20px]'>
             <div className='w-[50%] flex justify-between '> 
              <p className=' text-[#d8d8db] font-semibold text-[18px] hover:text-[#7BD001] cursor-pointer'>Copyright {copyright} PlantSpark</p>
              <p className=' text-[#d8d8db] font-semibold text-[18px] hover:text-[#7BD001] cursor-pointer'>Privacy Policy</p>
              <p className=' text-[#d8d8db] font-semibold text-[18px] hover:text-[#7BD001] cursor-pointer'>Terms & Conditions</p>
             </div>
             <div className='w-[50%] text-[white] text-[20px] flex gap-[20px] justify-end px-[20px]'>
             <FaFacebook className=' cursor-pointer' />
             <BsInstagram className=' cursor-pointer' />
             <BsYoutube className=' cursor-pointer' />  
             </div>
        </div>
    </div>
  )
}

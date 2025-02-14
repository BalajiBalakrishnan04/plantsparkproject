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
      <div className='w-full flex [@media(min-width:950px)]:flex-row flex-col items-center [@media(min-width:500px)]:px-[40px] px-[20px] [@media(min-width:950px)]:gap-[0px] gap-[40px]'>
        <div className='[@media(min-width:950px)]:w-[40%] w-[100%]  flex flex-col gap-[20px]'>
<p className='flex items-center justify-center gap-[10px]'><img src= {logo} className='w-[30px]'/><p className='text-[#7BD001] text-[20px] '>PLANTSPARK</p></p>
<p className='flex flex-col text-[white] [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] [@media(min-width:500px)]:text-[14px] text-[13px] indent-[15px] leading-[1.5]'>Explore a diverse collection of indoor and outdoor plants, stylish pots, and essential gardening tools. Get swift delivery, expert care guidance, and a seamless shopping experience. Transform your space with lush greenery effortlessly!</p>
        </div>
        <ul className='[@media(min-width:950px)]:w-[25%] w-[100%]  list-none text-[white] [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] flex flex-col gap-[15px] items-center cursor-pointer'>
              <li className='text-[#7BD001]' >QUICK LINKS</li>
              <Link to={'/'} className="no-underline text-inherit"><li className='hover:text-[#7BD001] onclick'>Home</li></Link>
              <Link to={'/product'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>Product</li></Link>
              <Link to={'/about'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>About</li></Link>
              <Link to={'/contact'} className="no-underline text-inherit"><li className='hover:text-[#7BD001]'>Contact</li></Link>
        </ul>
        
        <div className='[@media(min-width:950px)]:w-[35%] w-[100%] flex flex-col items-center  gap-[15px]  text-[white] [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] [@media(min-width:500px)]:text-[15px] text-[14px]'>
          <p className='text-center text-[#7BD001]'>CONTACT</p>
          <p className='flex  gap-[4px] items-center '><FaLocationDot className='text-[19px]'/> : 3524, Parkway Street, Los Angeles, USA</p>
          <p className='flex gap-[4px] items-center'><MdEmail className='text-[19px]'/>: plantsparksupport@gmail.com</p>
          <p className='flex gap-[4px] items-center'><IoCallSharp className='text-[19px]'/> : 9678678974 </p>
          </div>      
        </div>
        <hr />
        <div className='w-full [@media(min-width:500px)]:px-[40px] px-[20px] flex  [@media(min-width:650px)]:flex-row flex-col-reverse gap-[20px]'>
             <div className='[@media(min-width:950px)]:w-[50%] w-[100%] flex flex-wrap [@media(min-width:950px)]:justify-between  justify-center gap-[20px] '> 
              <p className=' text-[#d8d8db] font-semibold [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] hover:text-[#7BD001] cursor-pointer'>Copyright {copyright} PlantSpark</p>
              <p className=' text-[#d8d8db] font-semibold [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] hover:text-[#7BD001] cursor-pointer'>Privacy Policy</p>
              <p className=' text-[#d8d8db] font-semibold [@media(min-width:1200px)]:text-[18px] [@media(min-width:900px)]:text-[16px] hover:text-[#7BD001] cursor-pointer'>Terms & Conditions</p>
             </div>
             <div className='[@media(min-width:950px)]:w-[50%] w-[100%] text-[white] text-[20px] flex gap-[20px] [@media(min-width:950px)]:justify-end  justify-center px-[20px]'>
             <FaFacebook className=' cursor-pointer' />
             <BsInstagram className=' cursor-pointer' />
             <BsYoutube className=' cursor-pointer' />  
             </div>
        </div>
    </div>
  )
}

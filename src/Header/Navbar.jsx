import React from 'react'
import logo from '../Assets/plant_logo.png'
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";


export const Navbar = () => {
  const [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem("cartCount")) || 0;
});

useEffect(() => {
    const updateCartCount = () => {
        setCartCount(parseInt(localStorage.getItem("cartCount")) || 0);
    };

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
        window.removeEventListener("cartUpdated", updateCartCount);
    };
}, []); 



  const location=useLocation();

  const checkValue = localStorage.getItem("plantsparkuserdata");



  return (
    <div>
        <div className=' w-full min-h-100vh py-[10px] border-b-[2px] border-[#7BD001] shadow-[0_3px_10px_#087620] px-[30px] bg-[#ffffff] flex items-center rounded-b-[10px] fixed z-20'>
        <div className='flex items-center gap-[10px]'><Link to={'/'} className="no-underline text-inherit"><img src= {logo} className='w-[35px]'/></Link>
         <Link to={'/'} className="no-underline text-inherit"> <p className='text-[#087620] text-[20px] '>PLANTSPARK</p></Link></div>
         <ul className='w-[100%] list-none flex gap-[30px] items-center justify-center text-[19px]'>
         <Link to={'/'} className="no-underline text-inherit">  <li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Home</li></Link>
            <Link to={'/product'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/product" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Products</li></Link>
            <Link to={'/about'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/about" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>About</li></Link>
            <Link to={'/contact'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/contact" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Contact</li></Link>
         </ul>
         <div className='flex gap-[25px] items-center px-[20px]'>
         
         <Link to={'/Order'} className="no-underline text-inherit"><HiOutlineShoppingBag  className='text-[26px] hover:text-[#087620]' /></Link>
         <Link to={'/Cartsection'} className="no-underline text-inherit">
         <div className='flex relative'><BsCart3 className='text-[26px] hover:text-[#087620]' /><span className='z-10 w-[23px] h-[23px] flex justify-center items-center rounded-full bg-[#087620] absolute left-[18px] bottom-[12px] text-[15px] text-[white]'>{cartCount}</span></div></Link>
         {!checkValue?( <Link to={'/login'} className="no-underline text-inherit"> <p className='flex gap-[8px] px-[10px] border-[1px] border-[black] hover:border-[#087620] rounded-[15px] py-[5px] hover:text-[#087620] cursor-pointer'>Login <FaRegUser className='text-[16px]' /></p></Link>
         ):(<Link to={'/profile'} className="no-underline text-inherit"> <p className='flex gap-[8px] px-[10px] border-[1px] border-[black] hover:border-[#087620] rounded-[15px] py-[5px] hover:text-[#087620] cursor-pointer'>Profile <FaRegUser className='text-[16px]' /></p></Link>
         )}
         </div>
        </div>
    </div>
  )
}

import React from 'react'
import logo from '../Assets/plant_logo.png'
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { LuBox } from "react-icons/lu";
import { BiMessageRoundedError } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";






export const Navbar = () => {
  const [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem("cartCount")) || 0;
});
const [menuopen, setmenuopen] = useState(false)

useEffect(() => {
    const updateCartCount = () => {
        setCartCount(parseInt(localStorage.getItem("cartCount")) || 0);
    };

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
        window.removeEventListener("cartUpdated", updateCartCount);
    };
}, []); 

 const navigate=useNavigate();

  const location=useLocation();

  const checkValue = localStorage.getItem("plantsparkuserdata");

  const handleorder = () => {
    if(checkValue){
    navigate('/Order');
    } else{
      navigate('/login');
      alert('Kindly login and check orders')
    }
  }

  const handlemenuopen=()=>{
    setmenuopen(true)
  }
  const handlemenuclose=()=>{
    setmenuopen(false)
  }


  return (
    <div>
        <div className=' w-full min-h-100vh py-[10px] border-b-[2px] border-[#7BD001] shadow-[0_3px_10px_#087620] px-[15px] [@media(min-width:900px)]:px-[30px] bg-[#ffffff] flex items-center  fixed z-30'>
        <FiMenu className='text-[28px] text-[#7BD001] flex justify-start items-center cursor-pointer [@media(min-width:900px)]:hidden' onClick={handlemenuopen} />
        <div className=' w-full [@media(min-width:900px)]:w-[35%] flex items-center justify-center gap-[10px] [@media(min-width:900px)]:justify-start'>
          <Link to={'/'} className="no-underline text-inherit"><img src= {logo} className='w-[28px] [@media(min-width:900px)]:w-[35px]'/></Link>
         <Link to={'/'} className="no-underline text-inherit"> <p className='text-[#087620] text-[18px] [@media(min-width:900px)]:text-[20px] '>PLANTSPARK</p></Link></div>
         <ul className=' w-[100%] list-none gap-[30px] items-center justify-center text-[19px] hidden [@media(min-width:900px)]:flex'>
         <Link to={'/'} className="no-underline text-inherit">  <li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Home</li></Link>
            <Link to={'/product'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/product" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Products</li></Link>
            <Link to={'/about'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/about" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>About</li></Link>
            <Link to={'/contact'} className="no-underline text-inherit"><li className={`hover:text-[#087620] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/contact" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}>Contact</li></Link>
         </ul>
         <div className=' gap-[25px] items-center hidden [@media(min-width:900px)]:flex px-[20px]'>
         
         <HiOutlineShoppingBag  className='text-[26px] hover:text-[#087620] cursor-pointer' onClick={handleorder} />
         <Link to={'/Cartsection'} className="no-underline text-inherit">
         <div className='flex relative'><BsCart3 className='text-[26px] hover:text-[#087620]' /><span className='z-10 w-[23px] h-[23px] flex justify-center items-center rounded-full bg-[#087620] absolute left-[18px] bottom-[12px] text-[15px] text-[white]'>{cartCount}</span></div></Link>
         {!checkValue?( <Link to={'/login'} className="no-underline text-inherit"> <p className='flex gap-[8px] px-[10px] border-[1px] border-[black] hover:border-[#087620] rounded-[15px] py-[5px] hover:text-[#087620] cursor-pointer'>Login <FaRegUser className='text-[16px]' /></p></Link>
         ):(<Link to={'/profile'} className="no-underline text-inherit"> <p className='flex gap-[8px] px-[10px] border-[1px] border-[black] hover:border-[#087620] rounded-[15px] py-[5px] hover:text-[#087620] cursor-pointer'>Profile <FaRegUser className='text-[16px]' /></p></Link>
         )}
         </div>
        </div>
        <div className={`${menuopen? 'w-[60%] [@media(min-width:600px)]:w-[45%] z-30 border-r-[2px] h-screen fixed bg-[white] border-[#7BD001] shadow-[0_3px_10px_#087620] ':'hidden'}`}>
        <div className='flex justify-end pt-[15px] pr-[15px]'>
    <MdKeyboardDoubleArrowLeft className='text-[30px] cursor-pointer text-[#7BD001]' onClick={handlemenuclose} />
  </div>
          <ul className=' w-[100%] list-none flex flex-col gap-[30px]  text-[19px] py-[30px] px-[30px] '>
         <Link to={'/'} className="no-underline text-inherit">  <li className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}><AiOutlineHome className='text-[20px]' />Home</li></Link>
            <Link to={'/product'} className="no-underline text-inherit"><li className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/product" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}> <LuBox className='text-[21px]' /> Products</li></Link>
            <Link to={'/about'} className="no-underline text-inherit"><li className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/about" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}><BiMessageRoundedError className='text-[21px]' /> About</li></Link>
            <Link to={'/contact'} className="no-underline text-inherit"><li className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/contact" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}><PiPhoneCall className='text-[21px]'  />Contact</li></Link>
            {!checkValue?( <Link to={'/login'} className="no-underline text-inherit"> <p className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/login" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}><FaRegUser className='text-[16px]' />Login </p></Link>
         ):(<Link to={'/profile'} className="no-underline text-inherit"> <p className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/profile" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}> <FaRegUser className='text-[18px]' />Profile</p></Link>
         )}
 <Link to={'/Cartsection'} className="no-underline text-inherit">
         <div className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/Cartsection" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`}><BsCart3 className='text-[26px] hover:text-[#087620]' /> <p className='w-full  flex items-center'> Cart</p></div></Link>
        <li className={`hover:text-[#087620] flex gap-[8px] cursor-pointer hover:underline decoration-[2px] underline-offset-4 ${location.pathname==="/Order" ?'text-[#087620] cursor-pointer underline decoration-[2px] underline-offset-4':''}`} onClick={handleorder}><HiOutlineShoppingBag  className='text-[20px] hover:text-[#087620] cursor-pointer' />Orders</li>

         </ul>     
          </div>
    </div>
  )
}

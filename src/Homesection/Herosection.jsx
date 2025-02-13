import React from 'react';
import Hero2 from '../Assets/herosectimg1.png';
import { Gallerysection } from "./Gallerysection"
import { Journey } from "./Journey"
import { NewArrival } from "./NewArrival"
import { Servicesect } from "./Servicesect"
import { Link } from 'react-router-dom';
import {motion}  from "framer-motion";


export const Homesection = () => {
  

  return (
    <div className='w-full min-h-100vh'>
      <Herosection/>
      <NewArrival/>
      <Servicesect/>
      <Journey/>
      <Gallerysection/>
      
           
    </div>
  );
};


export const Herosection = () => {
  

  return (
    <div className='w-full min-h-100vh relative flex justify-center items-center bg-[black] overflow-hidden '>
            <motion.img initial={{scale:1}} animate={{scale:1.1}} transition={{duration:5,delay:1, repeat: Infinity, repeatType: "reverse"}}
              src={Hero2}  
              className="w-[100%] [@media(min-width:900px)]:h-[600px] [@media(min-width:600px)]:h-[500px] [@media(min-width:500px)]:h-[400px]  [@media(min-width:400px)]:h-[350px] [@media(min-width:280px)]:h-[280px] opacity-60 " 
            />
            
            <div className='min-h-100vh absolute flex flex-col items-center gap-[30px]'><p className=' [@media(min-width:900px)]:text-[34px] [@media(min-width:600px)]:text-[32px] [@media(min-width:450px)]:text-[26px] [@media(min-width:280px)]:text-[20px] font-bold text-[white] px-[30px] text-center'>Plants provide oxygen for our bodies and nourishment for our souls</p>
            <Link to={'/product'}> <button className='py-[5px] px-[10px] [@media(min-width:900px)]:text-[18px] [@media(min-width:600px)]:text-[16px] [@media(min-width:450px)]:text-[14px] [@media(min-width:300px)]:text-[12px] rounded-full border-2 border-[#7BD001] bg-[black] text-[#7BD001] shadow-[2px_2px_10px_#7BD001] hover:shadow-[2px_2px_10px_white] hover:text-[white] hover:border-[white] cursor-pointer duration-200 ease-initial'>SHOP NOW</button>
            </Link>
            </div>
    </div>
  );
};

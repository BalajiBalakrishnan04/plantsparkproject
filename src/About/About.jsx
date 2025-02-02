import React from 'react'
import Abouthero from '../Assets/About/abouthero.png'
import Aboutcontimg from '../Assets/About/aboutcont.jpeg'
import Aboutmission from '../Assets/About/aboutmission.jpeg'
import {motion}  from "framer-motion";


export const About = () => {
  return (
    <div className='w-full min-h-100vh flex flex-col'>
        <AboutHero/>
        <Aboutcont/>
        <Mission/>
        <Whychoose/>
    </div>
  )
}

export const AboutHero = () => {
    return (
        <div className='w-full min-h-100vh relative flex justify-center items-center bg-[black] overflow-hidden '>
        <motion.img initial={{scale:1}} animate={{scale:1.1}} transition={{duration:5,delay:1, repeat: Infinity, repeatType: "reverse"}}
          src={Abouthero}  
          className="w-[100%] opacity-80" 
        />
        <div className='min-h-100vh absolute flex flex-col items-center gap-[30px]'><p className='text-[36px] font-bold text-[white]'>ABOUT US</p>
            
            </div>
            
            </div>
    )
  }

  export const Aboutcont = () => {
    return (
        <div className='w-full min-h-100vh relative flex flex-col justify-center items-center pt-[70px] pb-[30px] px-[70px] '>
           
                  <div  className='w-full flex gap-[60px] items-center '>
                <div className='w-[40%] flex justify-end'>
                  <img src={Aboutcontimg} className='w-[75%] rounded-[10px] '/>              
                   </div>
                <div className='w-[60%] flex flex-col gap-[20px]'>
                <p className='text-[24px] text-[#087620] font-[500]'>ABOUT US</p>
                <p className='w-full text-[18px] indent-[15px] text-[black] leading-[1.7] text-justify'>Welcome to Plantspark, your go-to destination for high-quality, handpicked plants that bring life, beauty, and freshness to any space. Whether you’re a seasoned plant lover or just starting your green journey, we’re here to help you find the perfect plants for your home, office, or garden.</p>
                  
                </div>
                </div>
                    
            </div>
    )
  }

  export const Mission = () => {
    return (
        <div className='w-full min-h-100vh relative flex flex-col justify-center items-center pb-[70px] pt-[30px] px-[70px] '>
           
                  <div  className='w-full flex gap-[60px] items-center '>
                  
                <div className='w-[40%] flex justify-end'>
                  <img src={Aboutmission} className='w-[75%] rounded-[10px] '/>              
                   </div>
                   <div className='w-[60%] flex flex-col gap-[20px]'>
                <p className='text-[24px] text-[#087620] font-[500]'>OUR MISSION</p>
                <p className='w-full text-[18px] indent-[15px] text-[black] leading-[1.7] text-justify'>We aim to bring nature into every home by offering high-quality, affordable plants with expert care advice. Our goal is to inspire people to cultivate a greener, more sustainable lifestyle-one plant at a time.</p>
                  
                </div>
                </div>
                    
            </div>
    )
  }


  export const Whychoose = () => {
     let Aboutarr=[{Title:"Quality & Freshness", content:'We carefully source and nurture our plants to ensure they are healthy and ready to thrive in their new home.'}, 
      {Title:"Wide Variety", content:'From indoor air-purifying plants to exotic succulents and vibrant flowering beauties, we have something for every plant lover.'}, 
      {Title:"Eco-Friendly Approach", content:'We promote sustainable gardening with biodegradable packaging and eco-conscious care tips.'}, 
      {Title:"Expert Guidance", content:'Whether you’re looking for low-maintenance plants or need care tips, our plant experts are here to guide you every step of the way.'}, 
          ]

    return (
      <div className='py-[40px] bg-[#edeeed] flex flex-col items-center gap-[40px] '>
          <p className='text-[24px] text-[#087620] font-[500]'>WHY CHOOSE US</p>
          <div className='w-full grid grid-cols-4 gap-[20px] px-[60px]  '>
          {Aboutarr.map((value, id) => (
          <div key={id} className='flex flex-col gap-[10px] items-center  px-[20px] '><p className='text-[20px] text-[#087620]  '>{value.Title}</p>
          <p className='w-full text-[17px] indent-[15px]  text-[black] leading-[1.4] text-justify'>{value.content}</p></div>  
          ))}
        </div>
      </div>
    )
  }
  


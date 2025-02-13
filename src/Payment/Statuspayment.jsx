import React from 'react'
import successicons from "../Assets/payment/successicon.png"
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
// import failedicon from "../Assets/payment/failedicon.png"



export const Successfulpayment = () => {



  return (
    <div className='w-full h-screen bg-[#edede9] '>
    <div className=' h-screen  flex flex-col gap-[30px] bg-[#edede9] justify-center items-center'>
        <p className='text-[32px] text-[#087620] '>Payment Successful</p>

   <p> <img src={successicons} className='w-[210px]'  /></p>
   
   <Link to="/Order" className="no-underline text-inherit">
            <p className="flex items-center gap-[10px] text-[21px] text-[black] cursor-pointer hover:text-[#035514]">
              <IoArrowBackCircleOutline className="text-[35px]  text-[#035514]" />
              View Orders
            </p>
          </Link>

    </div>
    </div>
  )
}


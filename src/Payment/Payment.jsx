import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { CartTotal } from '../Cart/Cartsection';
import { useLocation } from 'react-router-dom';
import razorpayimg from '../Assets/payment/paymentrazor.png'

const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#91d19f',
      },
      '&:hover fieldset': {
        borderColor: '#91d19f',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1e8835',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#1e8835',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#91d19f',
    },
    '& .MuiOutlinedInput-input': {
      color: '#000000',
      fontSize: { xs: '14px', sm: '14px', md: '16px' }, // Responsive font size
                height: { xs: '12px', sm:'15px' },  // Responsive height
  
    },
  };
  

export const Payment = () => {
    const location = useLocation();
    const [totalPrice, setTotalPrice] = useState(Number(location.state?.totalPrice) || 0);
  
    useEffect(() => {
      // Ensure the total price is updated dynamically when navigating to the page
      setTotalPrice(Number(location.state?.totalPrice) || 0);
    }, [location.state?.totalPrice]); // Reacts to any changes in totalPrice from location
  
    const [method, setmethod]=useState('cod')
   

  return (
    <div className='w-full min-h-100vh relative flex flex-col justify-between items-center py-[60px] px-[70px] '>
              
                     <div  className='w-full flex gap-[50px] items-center '>
                   
                   <div className='w-[50%] flex flex-col items-center px-[20px]'>
                   <p className='w-full text-[24px] text-[#087620] pb-[15px] flex justify-start'>DELIVERY DETAILS </p>
                     <form className='w-[100%] flex flex-col items-center gap-[15px] '>
                   <div className='w-full flex gap-[15px]'><TextField id="firstname" label="First name" variant="outlined" type='text' name='firstname' sx={textFieldStyles} className='w-full'
                       required/>
                     <TextField id="lastname" label="Last name" variant="outlined" type='text' name='lastname' sx={textFieldStyles} className='w-full'
                       required/></div>
                      <TextField id="email" label="E-mail" variant="outlined" type='email' name='email' sx={textFieldStyles} className='w-full'
                      required/> 
                      <TextField id="street" label="Street" variant="outlined" type='text' name='street' sx={textFieldStyles} className='w-full'
                      required /> 
                      <div className='w-full flex gap-[15px]'><TextField id="city" label="City" variant="outlined" type='text' name='city' sx={textFieldStyles} className='w-full'
                       required/>
                     <TextField id="state" label="State" variant="outlined" type='text' name='state' sx={textFieldStyles} className='w-full'
                       required/></div>
                       <div className='w-full flex gap-[15px]'><TextField id="zipcode" label="Zip code" variant="outlined" type='text' name='zipcode' sx={textFieldStyles} className='w-full'
                       required/>
                     <TextField id="country" label="Country" variant="outlined" type='text' name='country' sx={textFieldStyles} className='w-full'
                       required/></div>
                        <TextField id="phone" label="Phone" variant="outlined" type='text' name='phone' sx={textFieldStyles} className='w-full'
                      required /> 

                      </form>              
                   </div>
                   <div className='w-[50%] flex flex-col justify-start gap-[30px]'>
                    <div className='w-full'>
                   <CartTotal totalPrice={totalPrice} hideCheckout={true} />
                   </div>
                   <div className='w-full flex-col gap-[10px]'>
                   <p className='w-full text-[22px] text-[#087620] pb-[15px] flex justify-start'>PAYMENT METHOD </p>
                   <div className='w-[90%] flex justify-between gap-[40px] '>
                   <div onClick={()=>setmethod('Razorpay')} className='w-full cursor-pointer flex justify-center items-center gap-[20px] border-[1px] py-[10px] border-[#adadad] rounded-[5px]'>
                    <p  className={`w-[15px] h-[15px] rounded-full border-[1px] border-[#969595] ${method==='Razorpay'? 'bg-[green]':''}`}></p>
                    <img src={razorpayimg} className='w-[120px]' />
                   </div>
                   <div onClick={()=>setmethod('cod')} className='w-full flex justify-center cursor-pointer items-center gap-[20px] border-[1px] py-[10px] border-[#adadad] rounded-[5px]'>
                    <p className={`w-[15px] h-[15px] rounded-full border-[1px] border-[#969595] ${method==='cod'? 'bg-[green]':''}`}></p>
                    <p className='text-[17px] text-[#585858]'>CASH ON DELIVERY</p>
                   </div>
                   </div>
                   </div>
                   <div className='w-full py-[15px] flex justify-center'>
                   <button
                className="w-[180px] cursor-pointer py-[8px] flex justify-center text-[16px]  text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300">
                ORDER NOW
              </button></div>
                   
                    </div>
                   </div>
                       
               </div>
  )
}

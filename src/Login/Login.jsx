import React, { useState } from 'react'
import { TextField } from '@mui/material'
import loginimg from '../Assets/loginbg.jpeg'
import logo from '../Assets/plant_logo.png'


const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#087620',
      },
      '&:hover fieldset': {
        borderColor: '#087620',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#087620',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#087620',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#087620',
    },
    '& .MuiOutlinedInput-input': {
      color: '#000000',
      fontSize: { xs: '14px', sm: '14px', md: '16px' }, // Responsive font size
                height: { xs: '12px', sm:'15px' },  // Responsive height
  
    },
  };
  




export const Login = () => {
    const [Loginformdata, setLoginformdata]=useState(true)

    const Handlelogin=()=>{
        setLoginformdata(false)
        
    }
    const handleregister=()=>{
        setLoginformdata(true)
        
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center  '>
 <div className='w-full h-screen relative flex justify-center items-center bg-[black] '>
         <img 
           src={loginimg}  
           className="w-[100%] h-screen opacity-80 fixed object-cover" 
         /></div>

    {Loginformdata ? (<div className='bg-[#fffffff1] min-h-100vh absolute flex flex-col items-center [@media(min-width:500px)]:px-[25px] px-[20px] [@media(min-width:500px)]:py-[30px] py-[20px] rounded-[15px]'><p className='text-[#034712][@media(min-width:500px)]:text-[23px] text-[19px] py-[15px] flex flex-col items-center gap-[15px]'><img src={logo} className='w-[28px]'/>Login</p>
     <form className='w-full min-h-100vh flex flex-col justify-center items-center gap-[25px]' >
  
   <TextField id="email" label="E-mail" variant="outlined" type="email" name='email' sx={textFieldStyles} required  className='[@media(min-width:500px)]:w-[270px] w-[200px]'
    />
   <TextField id="password" label="Password" variant="outlined" type="password" name='password' sx={textFieldStyles} className='[@media(min-width:500px)]:w-[270px] w-[200px]'
 required/>
 <div className='w-full flex gap-[10px] '>
 <p className='w-full flex justify-start [@media(min-width:500px)]:text-[17px] text-[14px] cursor-pointer hover:text-[#087620]' >Forgot password</p>
 <p className='w-full flex justify-end [@media(min-width:500px)]:text-[17px] text-[14px] cursor-pointer hover:text-[#087620]' onClick={Handlelogin}  >Create account</p>
 </div> 
 <button type='submit' className='px-[15px] py-[5px] [@media(min-width:500px)]:text-[17px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
  Login            
   </button>
   
   </form></div>) : (<div className='bg-[#fffffff1] [@media(min-width:500px)]:px-[25px] px-[20px] [@media(min-width:500px)]:py-[30px] py-[20px] min-h-100vh absolute flex flex-col items-center rounded-[15px] '><p className=' text-[#034712] [@media(min-width:500px)]:text-[23px] text-[19px] py-[15px] flex  flex-col items-center gap-[15px]'><img src={logo} className='w-[28px]'/>Sign Up</p>
     <form className='w-full min-h-100vh flex flex-col justify-center items-center gap-[20px]'>
   <TextField id="username" label="Name" variant="outlined" type='text' name='username' sx={textFieldStyles} className='[@media(min-width:500px)]:w-[270px] w-[200px]'
    required/>
   <TextField id="email" label="email" variant="outlined" type="email"  name='email' sx={textFieldStyles} className='[@media(min-width:500px)]:w-[270px] w-[200px]'
   required/>
   <TextField id="password" label="Password" variant="outlined" type='password' name='password' sx={textFieldStyles} className='[@media(min-width:500px)]:w-[270px] w-[200px]'
   required/>
   <p className='w-full flex justify-end [@media(min-width:500px)]:text-[17px] text-[14px] cursor-pointer hover:text-[#087620]' onClick={handleregister}>Login Here</p>
  <button type='submit' className='px-[15px] py-[5px]  [@media(min-width:500px)]:text-[17px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
  Sign Up           
   </button>
   </form></div>)}
 </div>
)
}


import React, { useState } from 'react'
import { TextField } from '@mui/material'
import loginimg from '../Assets/loginbg.jpeg'
import logo from '../Assets/plant_logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'


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
  

  let reginitial={
    username:'',
    email:'',
    Mobile:'',
    password: "", 
}
let logininitial={
    email : "",
    password: "", 
}



export const Login = () => {
  const [formdata, setformdata]=useState(reginitial)
    const [logindata, Setlogindata] = useState(logininitial);
    const [Loginformdata, setLoginformdata]=useState(true)
    const [Issubmitting, Setissumitting] = useState(false);

    const handleChange = (event) => {
      const { name, value } = event.target
      if (Loginformdata) {
        Setlogindata((prev) => ({ ...prev, [name]: value }));
    } else {
        setformdata((prev) => ({ ...prev, [name]: value }));
    }  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Setissumitting(true)

    try {
        if (Loginformdata) {
            await axios.post(`http://localhost:2000/signin`, logindata)
                .then((res) => {
                    toast.success(res.data.message)
                    localStorage.setItem("plantsparkuserdata", JSON.stringify(res.data.findEmail))
                    localStorage.setItem("token", res.data.token)
                    Setlogindata(logininitial)    
                    navigate("/")
                   
                    
                })
                .catch((err) => toast.error(err.response.data.message))
                .finally(() => Setissumitting(false))

        } else {
            await axios.post("http://localhost:2000/signup", formdata)
                .then((res) => {
                    toast.success(res.data.message)
                    setformdata(reginitial)
                    setLoginformdata(true)
                })
                .catch((err) => toast.error(err.response.data.message))
                .finally(() => Setissumitting(false))
        }
    }
    catch (error) {
        console.log(error)
    }


    setformdata(reginitial)
    Setlogindata(logininitial)
}



    const Handlelogin=()=>{
        setLoginformdata(false)
        
    }
    const handleregister=()=>{
        setLoginformdata(true)
        
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center  '>
 <div className='w-[100%] h-screen  flex   '>
         <img 
           src={loginimg}  
           className="w-[50%] h-screen   object-cover" 
         />

    {Loginformdata ? (<div className='bg-[#fffffff1] w-[50%] h-screen flex flex-col justify-center items-center [@media(min-width:500px)]:px-[25px] px-[20px] [@media(min-width:500px)]:py-[30px] py-[20px] rounded-[15px]'>
      <p className='text-[#034712] [@media(min-width:500px)]:text-[26px] text-[19px] py-[15px] flex flex-col items-center gap-[20px]'>
      <img src={logo} className='w-[35px]'/>Login</p>
     <form className='w-[55%] flex flex-col justify-center items-center gap-[35px]' onSubmit={handleSubmit} >
  
   <TextField id="email" label="E-mail" variant="outlined" type="email" name='email' sx={textFieldStyles} required  className='[@media(min-width:500px)]:w-full w-[200px]'
   value={logindata.email}
   onChange={handleChange} />
   <TextField id="password" label="Password" variant="outlined" type="password" name='password' sx={textFieldStyles} className='[@media(min-width:500px)]:w-full w-[200px]'
  value={logindata.password}
  onChange={handleChange} required/>
 <div className='w-full flex gap-[10px] '>
 <p className='w-full flex justify-start [@media(min-width:500px)]:text-[17px] text-[14px] cursor-pointer hover:text-[#087620]' >Forgot password</p>
 </div> 
 <button type='submit' disabled={Issubmitting} className='px-[20px] py-[5px] [@media(min-width:500px)]:text-[18px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
 {Issubmitting ? 
                         "Login..":
                            "Login"}          
   </button>
   <p className='w-full flex flex-wrap justify-center [@media(min-width:500px)]:text-[17px] text-[14px]' >Already Don't have an account <span onClick={Handlelogin} className='cursor-pointer text-[#087620] pl-[5px]'>Create account</span></p>
   
   </form> </div>) : (<div className='bg-[#fffffff1] h-screen w-[50%] [@media(min-width:500px)]:px-[25px] px-[20px] [@media(min-width:500px)]:py-[30px] py-[20px] min-h-100vh  flex flex-col justify-center items-center rounded-[15px] '>
    <p className=' text-[#034712] [@media(min-width:500px)]:text-[26px] text-[19px] py-[15px] flex  flex-col items-center gap-[20px]'><img src={logo} className='w-[28px]'/>Sign Up</p>
     <form className='w-[55%]  flex flex-col justify-center items-center gap-[25px]' onSubmit={handleSubmit}>
   <TextField id="username" label="Name" variant="outlined" type='text' name='username' sx={textFieldStyles} className='[@media(min-width:500px)]:w-full w-[200px]'
   value={formdata.username}
   onChange={handleChange} required/>
   <TextField id="email" label="email" variant="outlined" type="email"  name='email' sx={textFieldStyles} className='[@media(min-width:500px)]:w-full w-[200px]'
    value={formdata.email}
    onChange={handleChange} required/>
   <TextField id="Mobile" label="Mobile" variant="outlined" type='number' name='Mobile' sx={textFieldStyles} className='[@media(min-width:500px)]:w-full w-[200px]'
   value={formdata.Mobile}
   onChange={handleChange} required/>
   
  <button type='submit' disabled={Issubmitting} className='px-[20px] py-[5px]  [@media(min-width:500px)]:text-[18px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
  {Issubmitting ? 
                         "Sign Up..":
                            "Sign Up"}         
   </button>
   <p className='w-full flex justify-center flex-wrap [@media(min-width:500px)]:text-[17px] text-[14px]' >Already have an account <span onClick={handleregister} className='cursor-pointer text-[#087620] pl-[5px]'>Login Here</span></p>
   </form></div>)}
   </div>
 </div>
)
}


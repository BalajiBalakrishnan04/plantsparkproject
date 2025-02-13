import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { CartTotal } from '../Cart/Cartsection';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import paypalpayimg from '../Assets/payment/paymentpaypal.png'
import axios from 'axios';
import { toast } from 'react-toastify';
import { countries } from 'countries-list';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


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
const [method, setmethod]=useState('cod')
const [Orderopen, setOrderopen]=useState(false)
const [isSubmitting, setIsSubmitting] = useState(false);
const checkvalue = JSON.parse(localStorage.getItem("cart")) || [];
const loginuser = JSON.parse(localStorage.getItem("plantsparkuserdata")) || {};

const Navigate=useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  Setissumitting(true)
 try {
  localStorage.setItem("deliverydetails", JSON.stringify(formdata))
    setOrderopen(true)
    }
    catch (error) {
        console.log(error)
    }
setformdata(deliverinit)
}

const userData = JSON.parse(localStorage.getItem("deliverydetails"));




const orderData = {
  cart: checkvalue,        
  totalPrice: totalPrice+15,  
  deliveryDetails: userData,
  method:method,
  loginID: loginuser.email
};


const handlePaymentSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (method === 'paypal') {
    toast.info("Please complete payment via PayPal.");
  } else {
    try {
      await axios.post("http://localhost:2000/checkout", orderData);
      toast.success("Order placed successfully with COD!");
    } catch (error) {
      toast.error("Order placement failed. Please try again.");
    }
    setIsSubmitting(false);
  }
};

const handlePayPalSuccess = async (details) => {
  try {
    console.log(" Full PayPal Order Details:", details);

    const payload = {
      cart: checkvalue, 
      totalPrice: totalPrice+15,
      deliveryDetails: userData,
      method: "paypal",
      loginID: loginuser.email,
      paypalOrderID: details.id, 
      paymentDetails: {
        id: details.id,
        status: details.status,
        purchase_units: details.purchase_units || [], 
        payer: details.payer || {}, 
      },
    };
    

    console.log(" Sending Payload to Backend:", payload);

    const response = await axios.post("http://localhost:2000/paypal-success", payload);

    toast.success("Payment Successful! Order Placed.");
    Navigate('/successorder')
  } catch (error) {
    console.error("Error Sending Order Data to Backend:", error);
    toast.error("Order placement failed. Please try again.");
  }
};

    useEffect(() => {
      // Ensure the total price is updated dynamically when navigating to the page
      setTotalPrice(Number(location.state?.totalPrice) || 0);
    }, [location.state?.totalPrice]); // Reacts to any changes in totalPrice from location
  
   

   

    
    let deliverinit={
      Firstname:'',
    Lastname:'',
    email:'',
    Address:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    Mobile:'',
  }

 const [formdata, setformdata]=useState(deliverinit)
 const [Issubmitting, Setissumitting] = useState(false);

 const handleChange = (event) => {
  const { name, value } = event.target
  
    setformdata((prev) => ({ ...prev, [name]: value }));
}  







  return (
    <PayPalScriptProvider options={{ "client-id": "AQN6MPuGcVa8ATfuyYQqtVsnzErEaBWFcvQEIqkNeN7Ngg691GVkCtTJHpEyUWnbTboEafYhHo8zOgEb" }}>

    <div className='w-full min-h-100vh relative flex flex-col justify-between items-center py-[60px] px-[70px] '>
              
                     <div  className='w-full flex flex-col gap-[50px] items-center '>
                   
                 {!Orderopen ? ( <div className='w-[50%] flex flex-col items-center px-[20px]'>
                   <p className='w-full text-[24px] text-[#087620] pb-[20px] flex justify-center'>DELIVERY DETAILS </p>
                     <form className='w-[100%] flex flex-col items-center gap-[15px] ' onSubmit={handleSubmit}>
                   <div className='w-full flex gap-[15px]'><TextField id="Firstname" label="First name" variant="outlined" type='text' name='Firstname' sx={textFieldStyles} className='w-full'
                      value={formdata.Firstname}
                      onChange={handleChange} required/>
                     <TextField id="lastname" label="Last name" variant="outlined" type='text' name='Lastname' sx={textFieldStyles} className='w-full'
                      value={formdata.Lastname}
                      onChange={handleChange}  /></div>
                      <TextField id="email" label="E-mail" variant="outlined" type='email' name='email' sx={textFieldStyles} className='w-full'
                       value={formdata.email}
                       onChange={handleChange} required/> 
                      <TextField id="Address" label="Address" variant="outlined" type='text' name='Address' sx={textFieldStyles} className='w-full'
                      value={formdata.Address}
                      onChange={handleChange} required /> 
                      <div className='w-full flex gap-[15px]'><TextField id="city" label="city" variant="outlined" type='text' name='city' sx={textFieldStyles} className='w-full'
                      value={formdata.city}
                      onChange={handleChange} required/>
                     <TextField id="state" label="State" variant="outlined" type='text' name='state' sx={textFieldStyles} className='w-full'
                      value={formdata.state}
                      onChange={handleChange} required/></div>
                       <div className='w-full flex gap-[15px]'>
                        <TextField id="zipcode" label="Zip code" variant="outlined" type='number' name='zipcode' sx={textFieldStyles} className='w-full'
                       value={formdata.zipcode}
                       onChange={handleChange} required/>
                       <select id="sort"
               name="country"
               value={formdata.country}
               onChange={handleChange}
              className="w-full  py-[5px] text-[#089626] bg-white shadow-sm cursor-pointer outline-none text-[15px] rounded-[5px] border-[1px] border-[#81cf92]"
             required>
             <option value="" disabled hidden>
        Select Country
      </option>
      {Object.entries(countries).map(([code, country], i) => (
        <option key={i} value={country.name}>
          {country.name}
        </option>
      ))}
            </select></div>
                        <TextField id="phone" label="Phone" variant="outlined" type='number' name='Mobile' sx={textFieldStyles} className='w-full'
                      value={formdata.Mobile}
                      onChange={handleChange}
                      required /> 
                      <button type='submit' disabled={Issubmitting} className='w-[140px] cursor-pointer py-[8px] flex justify-center text-[17px] my-[20px] text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300'>
                      {Issubmitting ? 
                         "SUBMIT..":
                            "SUBMIT"} 
          </button>
                      </form>              
                   </div>):(

<div  className='w-full flex justify-center gap-[40px]'>
  <div className='w-[50%] flex flex-col gap-[20px] px-[20px] text-[19px]'>
  <p className='w-full text-[21px] text-[#087620]  flex justify-start'>DELIVERY  INFORMATION </p>
<p className=' '>Name: {userData.Firstname} {userData.Lastname}</p>
<p className=''>E-mail: {userData.email}</p>
<p className=' '>Phone: {userData.Mobile} </p>
<p className=' '>Address: {userData.Address} {userData.city}, {userData.state}, {userData.country}  {userData.zipcode}</p>

<p className='w-full text-[21px] text-[#087620]  flex justify-start pt-[20px]'>Your selected items</p>

<div className=' '>
           { checkvalue.map((item, index) => (
            <div key={index}  className='w-full  flex justify-between items-center   py-[10px] border-[#c2c0c0]'>
            <div className='w-[30%] '>
              <img src={`http://localhost:2000/view/${item.filename}`}className='w-full px-[10px]' />
              </div>
              <div className='w-[75%] flex flex-col items-start justify-start gap-[5px] px-[10px]'>
            <p className=' text-center'> Name: {item.ProductName}</p>
            <p className='w-full'>Price: $ {item.price}</p>
            <p className='w-full'>Items: {item.quantity}</p>
            </div>
            
            </div>
           ))}
            
          </div>
  </div>
                   <div className='w-[50%] flex flex-col justify-start gap-[30px]'>
                    <div className='w-full'>
                   <CartTotal totalPrice={totalPrice} hideCheckout={true} />
                   </div>
                   <form onSubmit={handlePaymentSubmit}>
                   <div className='w-full flex-col gap-[10px]'>
                   <p className='w-full text-[22px] text-[#087620] pb-[15px] flex justify-start'>PAYMENT METHOD </p>
                   <div className='w-[90%] flex justify-between gap-[40px] '>
                   <div onClick={()=>setmethod('paypal')} className='w-full cursor-pointer flex px-[20px] items-center gap-[15px] border-[1px] py-[5px] border-[#adadad] rounded-[5px]'>
                    <p  className={`w-[15px] h-[15px] rounded-full border-[1px] border-[#969595] ${method==='paypal'? 'bg-[green]':''}`}></p>
                    <img src={paypalpayimg} className='w-[90px] h-[30px]' />
                   </div>
                   <div onClick={()=>setmethod('cod')} className='w-full flex justify-center items-center px-[10px] cursor-pointer gap-[15px] border-[1px] py-[10px] border-[#adadad] rounded-[5px]'>
                    <p className={`w-[15px] h-[15px] rounded-full border-[1px] border-[#969595] ${method==='cod'? 'bg-[green]':''}`}></p>
                    <p className='w-[80%] text-[17px] text-[#4b4b4b]'>CASH ON DELIVERY</p>
                   </div>
                   </div>
                   </div>
                   <div className='w-[90%] py-[40px] px-[50px] relative z-10 '>
                   {method === 'paypal' && (
                  <PayPalButtons
                                    createOrder={async (data, actions) => {
                                      try {
                                        return actions.order.create({
                                          purchase_units: [{
                                            amount: { value: (totalPrice + 15).toFixed(2) }
                                          }],
                                          application_context: { shipping_preference: "NO_SHIPPING" }
                                        });
                                      } catch (error) {
                                        console.error(" Error Creating Order:", error);
                                      }
                                    }}
                                  
                                    onApprove={async (data, actions) => {
                                      try {
                                        console.log("Payment Approved. Order ID:", data.orderID);  
                                  
                                        const orderDetails = await actions.order.capture();  
                                        console.log("Order Captured:", orderDetails);
                                  
                                        await handlePayPalSuccess(orderDetails);
                                  
                                      } catch (error) {
                                        console.error("Error Capturing Order:", error);
                                      }
                                    }}
                                  
                                    onError={(err) => {
                                      console.error(" PayPal Error:", err);
                                    }}
                                  />
                                  
                )}</div>
                   <div className='w-full py-[10px] flex justify-center'>
                   {method === 'cod' && (
                   <button type='submit' 
                className="w-[180px] cursor-pointer py-[8px] flex justify-center text-[16px]  text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300">
                {isSubmitting ? 'ORDER NOW...' : 'ORDER NOW'}
              </button>)}</div>
              </form>
                   
                    </div>
                    </div>)}
                   </div>
                       
               </div>
               </PayPalScriptProvider>
  )
}

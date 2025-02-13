import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Nodata from '../Assets/Cart/no_data.jpeg'

export const Order = () => {
  const [orderData, setorderData] = useState(null);
  const loginuser = JSON.parse(localStorage.getItem("plantsparkuserdata")) || {};
  const loginemail=loginuser.email


  const fetchorderData = async () => {
      try {
          const res = await axios.get(`http://localhost:2000/getordersById?email=${loginemail}`);
          setorderData(res.data);
      } catch (err) {
          toast.error(err.response?.data?.message || "Failed to fetch product data");
      }
  };

  useEffect(() => {
    if (loginemail) {
      fetchorderData();
    }
  }, [orderData]);

  return (
    <div className='w-full min-h-100vh py-[70px]'>
<p className='w-full text-[#087620] flex justify-center text-[22px]'>YOUR ORDERS</p>


{orderData && orderData.length > 0 ? (
  <div className='w-full min-h-100vh px-[40px] py-[20px] grid grid-cols-2 gap-[50px] '>{
  orderData.map((order, orderIndex) => (
    <div key={order._id} className='w-full min-h-100vh px-[40px] py-[20px] flex flex-col gap-[20px] border-[1px] border-[#757575] rounded-[10px]'>

      <p className='text-[18px] text-[#087620]'>PRODUCTS:</p>
      {order.cart.map((item, itemIndex) => (
        <div key={itemIndex} className='w-full flex items-center gap-[20px] text-[#303030] '>
           <img 
            src={`http://localhost:2000/view/${item.filename}`} 
            alt={item.ProductName} 
            className='w-[100px] h-[80px] rounded-[5px]'
          />
          <div className='text-[17px] flex flex-col gap-[10px]'>
          <p>Product : {item.ProductName}</p>
          <p>Price : $ {item.price}</p>
          <p>Quantity : {item.quantity}</p>
          </div>
        
        </div>
      ))}
      
      <p className='text-[18px] text-[#087620]'>Delivery Details:</p>
      <div className='text-[16px] grid grid-cols-2 gap-[15px] text-[#303030]  '>
      <p>Name : {order.deliveryDetails.Firstname} {order.deliveryDetails.Lastname}</p>
      <p>Date : {order.createdAt.split("T")[0]}</p>
      <p>Email : {order.deliveryDetails.email}</p>
      <p>Address : {order.deliveryDetails.Address}, {order.deliveryDetails.city}, {order.deliveryDetails.state}, {order.deliveryDetails.country} - {order.deliveryDetails.zipcode}</p>
      <p>Payment Method : {order.method}</p>
      <p>Payment : {order.status}</p>
      <p>Total Price : ${order.totalPrice}</p>
      
      </div>
    </div>
  ))}
  </div>
) : (<div className='w-full flex  justify-center py-[30px]'>
        <p className=" w-[40%] flex flex-col items-center  text-[20px] border-[1px] py-[20px] border-[#a1a1a1] rounded-[10px]">
                <img src={Nodata} className='w-[120px]' />No orders here.</p>
                </div>
      )}
    
    </div>
  )
}

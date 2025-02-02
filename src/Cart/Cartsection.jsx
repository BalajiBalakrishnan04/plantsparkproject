import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Nodata from '../Assets/Cart/no_data.jpeg'




export const Cartsection = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className='w-full py-[70px] flex px-[70px] gap-[60px] '>
        <div className='w-[65%]'>
        <p className=' text-[#087620] flex justify-start text-[22px]'>YOUR CART</p>
<Cartprodsection setTotalPrice={setTotalPrice}/>
        </div>
        <div className='w-[35%]'>
          <CartTotal totalPrice={ totalPrice }/>
                </div>
        </div>
  )
}


export const CartTotal=({ totalPrice, hideCheckout })=>{

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/payment', { state: { totalPrice } });
  };


  const formattedTotalPrice = totalPrice ? totalPrice.toFixed(2) : '0.00';
  return(<div>
    <p className=' text-[#087620] flex justify-start text-[22px]'>CART TOTALS</p>
        <div className=' flex flex-col justify-center gap-[10px] pt-[30px] divide-y-[1px] divide-[#858585]'>
        <div className='w-full flex justify-between pb-[10px]'>
            <p className='text-[19px] text-[#333232]'>Product Total</p>
            <p className='text-[19px] text-[#333232]'>$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className='w-full flex justify-between pb-[10px]'>
            <p className='text-[19px] text-[#333232]'>Shipping Fee</p>
            <p className='text-[19px] text-[#333232]'>$ 15.00</p>
            </div>
            <div className='w-full flex justify-between pb-[10px]'>
            <p className='text-[19px] text-[#1d1c1c]'>Total</p>
            <p className='text-[19px] text-[#1d1c1c]'>$ {(totalPrice+15).toFixed(2)}</p>
            </div>
            
        </div>
        {!hideCheckout && (
        <div className='w-full flex justify-center'>
          <button onClick={handleCheckout} className='w-[180px] cursor-pointer py-[8px] flex justify-center text-[16px] my-[20px] text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300'>
            Proceed to Checkout
          </button>
        </div>)}
  </div>)
}

  export const Cartprodsection = ({ setTotalPrice }) => {
    const{id}=useParams(); 
    console.log(id)
    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const removeItem = (id) => {
      const filteredCart = cart.filter((item) => item.id !== id);
      setCart(filteredCart);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    };

    useEffect(() => {
      const total = cart.reduce((acc, item) => acc + item.Price * item.quantity, 0);
      setTotalPrice(total);
    }, [cart, setTotalPrice]);

    const updateQuantity = (id, newQuantity) => {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    return (
      <div className='w-full py-[20px] flex flex-col items-center'>
        {cart.length === 0 ? (
        <p className=" w-[70%] flex flex-col items-center gap-[10px] text-[20px] border-[1px] py-[30px] border-[#a1a1a1] rounded-[10px]">
          <img src={Nodata} className='w-[120px]' />No Products in the cart.</p>
      ) : (<>
        <div className=' w-full flex justify-between items-center text-[19px] py-[8px] px-[20px] '>
            
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Remove</p>
          </div>
          <div className=' w-full flex flex-col justify-between items-center text-[18px]  px-[10px] '>
           { cart.map((item, index) => (
            <div key={index}  className='w-full flex  justify-between items-center border-b-[1px] border-t-[1px] py-[10px] border-[#c2c0c0]'>
            <div className='w-[41%] flex justify-between items-center'>
              <img src={item.img} className='w-[100px] h-[80px]' />
            <p>{item.Name}</p>
            <p>$ {item.Price}</p></div>
            <div className='w-[50%] flex gap-[100px] items-center'>
              <input type="number"  
              className='w-[60px] h-[30px] border-[#bdbdbd] border-[2px] outline-none rounded-[5px] text-center'  
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, e.target.value)}
               />
            <p>$ {(item.Price * item.quantity).toFixed(2)}</p>
            <RxCross2  className='text-[22px] cursor-pointer' onClick={() => removeItem(item.id)}/>
            </div>
            
            </div>
           ))}
            
          </div>
          </>)}
          
      </div>
    )
  }






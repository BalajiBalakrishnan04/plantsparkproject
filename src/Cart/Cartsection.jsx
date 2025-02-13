import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Nodata from '../Assets/Cart/no_data.jpeg'




export const Cartsection = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className='w-full py-[70px] flex px-[70px] gap-[60px] '>
        <div className='w-[70%]'>
        <p className=' text-[#087620] flex justify-start text-[22px]'>YOUR CART</p>
<Cartprodsection setTotalPrice={setTotalPrice}/>
        </div>
        <div className='w-[30%]'>
          <CartTotal totalPrice={ totalPrice }/>
                </div>
        </div>
  )
}


export const CartTotal=({ totalPrice, hideCheckout })=>{

  const checkValue = localStorage.getItem("plantsparkuserdata");
  const checkcart = JSON.parse(localStorage.getItem("cart"));
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (checkcart && checkcart.length > 0) {
    if(checkValue){
    navigate('/payment', { state: { totalPrice } });
    } else{
      navigate('/login');
    }
  } else {
    // If the cart is empty, show a message
    alert("Your cart is empty! Add some products before proceeding.");
}
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
    // const{id}=useParams(); 
    // console.log(id)
    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("cart")) || [];
    });

    const removeItem = (id) => {
      const filteredCart = cart.filter((item) => item._id !== id);
      setCart(filteredCart);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
  
      const newCartCount = filteredCart.reduce((acc, item) => acc + item.quantity, 0);
      localStorage.setItem("cartCount", newCartCount);
  
      window.dispatchEvent(new Event("cartUpdated"));
  };

    useEffect(() => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    }, [cart, setTotalPrice]);

    const updateQuantity = (id, newQuantity) => {
      setCart((prevCart) => {
          const updatedCart = prevCart.map((item) =>
              item._id === id ? { ...item, quantity: Math.max(1, Number(newQuantity)) } : item
          );

          localStorage.setItem("cart", JSON.stringify(updatedCart));

          
          const newCartCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
          localStorage.setItem("cartCount", newCartCount);
          window.dispatchEvent(new Event("cartUpdated")); 

          return updatedCart;
      });
  };


    return (
      <div className='w-full py-[20px] flex flex-col items-center'>
        {cart.length === 0 ? (
        <p className=" w-[70%] flex flex-col items-center gap-[10px] text-[20px] border-[1px] py-[30px] border-[#a1a1a1] rounded-[10px]">
          <img src={Nodata} className='w-[120px]' />No Products in the cart.</p>
      ) : (<>
        <div className=' w-full flex justify-between items-center text-[19px] py-[8px] px-[20px] '>
            
            <p>Products</p>
            <p className='w-[18%] flex justify-center'>Title</p>
            <p className= ''>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Remove</p>
          </div>
          <div className=' w-full flex flex-col justify-between items-center text-[18px]  px-[10px] '>
           { cart.map((item, index) => (
            <div key={index}  className='w-full flex  justify-between items-center border-b-[1px] border-t-[1px] py-[10px] border-[#c2c0c0]'>
            <div className='w-[50%] flex justify-between items-center'>
              <img src={`http://localhost:2000/view/${item.filename}`}className='w-[100px] h-[80px]' />
            <p className='px-[20px] text-center'>{item.ProductName}</p>
            <p className='w-[25%] flex justify-center px-[10px]'>$ {item.price}</p></div>
            <div className='w-[50%] flex gap-[80px] items-center'>
              <input type="number"  
              className='w-[60px] h-[30px] ml-[50px] border-[#bdbdbd] border-[2px] outline-none rounded-[5px] text-center'  
                value={item.quantity}
                onChange={(e) => updateQuantity(item._id, e.target.value)}
               />
            <p className=''>$ {(item.price * item.quantity).toFixed(2)}</p>
            <RxCross2  className='text-[22px] cursor-pointer' onClick={() => removeItem(item._id)}/>
            </div>
            
            </div>
           ))}
            
          </div>
          </>)}
          <div className='w-full py-[30px]'>
         <Link to={'/product'} className='no-underline text-inherit'> <button className='px-[15px] py-[5px]  [@media(min-width:500px)]:text-[17px] text-[15px] rounded-[10px] border-2 hover:border-[#7BD001] bg-[black] hover:text-[#7BD001]  text-[white] border-[white] cursor-pointer duration-200 ease-initial'>
         Back To Product
   </button> </Link></div>
      </div>
    )
  }






import React, { useEffect, useState } from 'react'
import img1 from '../Assets/home/service.jpeg';
import img2 from '../Assets/herosectimg1.png';
import { BsCart3 } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


export const NewArrival = () => {
  const arrivalarr = [
    { id: 301, img: img1, Name: "Cactus Flower", Price: '10.22' },
    { id: 302, img: img2, Name: "Cactus Flower", Price: '10.22' },
    { id: 303, img: img1, Name: "Cactus Flower", Price: '10.22' },
    { id: 304, img: img2, Name: "Cactus Flower", Price: '10.22' },
    { id: 301, img: img1, Name: "Cactus Flower", Price: '10.22' },
    { id: 301, img: img1, Name: "Cactus Flower", Price: '10.22' },
    { id: 301, img: img1, Name: "Cactus Flower", Price: '10.22' },

  ]; 
      const [cartCount, setCartCount] = useState(
        () => parseInt(localStorage.getItem("cartCount")) || 0
      );
    
      const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
      });
    
      useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", cartCount);
        window.dispatchEvent(new Event("cartUpdated")); // Notify other components
      }, [cart, cartCount]);


      const addToCart = (id) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === id);
          if (existingItem) {
            return prevCart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            const newItem = arrivalarr.find((item) => item.id === id);
            return [...prevCart, { ...newItem, quantity: 1 }];
          }
        });
      
        setCartCount(cartCount + 1);
      };
    
    
 
    return (
      <div className="py-[40px] flex flex-col items-center gap-[40px]">
      <p className="text-[26px] text-[#087620]">TOP PRODUCTS</p>
      <div className="w-[85%] m-0">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            100: { slidesPerView: 1, spaceBetween: 20 },
            400: { slidesPerView: 2, spaceBetween: 30 },
            700: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination]}
          className="h-[320px]"
        >
          {arrivalarr.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="w-full mx-[20px] pb-[15px] rounded-[8px] shadow-[0_2px_10px_#272626] relative group overflow-hidden">
                <img
                  src={product.img}
                  className="w-full h-[200px] rounded-t-[7px] hover:scale-105 transition ease-in-out duration-400"
                  alt='could not load image'
                />
                <p className="w-full text-[20px] indent-[15px] text-[black] text-center hover:text-[#087620] py-[5px]">
                  {product.Name}
                </p>
                <p className="w-full text-[20px] indent-[15px] text-[black] text-center hover:text-[#087620]">
                  ${product.Price}
                </p>
                {/* <button
                  onClick={() => addToCart(product.id)}
                  className="w-full min-h-[40px] absolute bottom-[10px] bg-[black] py-[10px] text-[white] cursor-pointer flex justify-center gap-[15px] invisible group-hover:visible ease-in-out duration-400"
                >
                  <BsCart3 /> ADD TO CART
                </button> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>)  
}

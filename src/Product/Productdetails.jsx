import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import img1 from '../Assets/home/service.jpeg';
import img2 from '../Assets/herosectimg1.png';
import { FaStar, FaRegStar } from "react-icons/fa";

export const Productdetails = () => {
    const { id } = useParams(); // Get the id from the URL params
    const parsedId = parseInt(id); // Parse the id to an integer
    
    const productdata = {
      1: { id: 1, img: img1, Name: "Cactus Flower", Price: 10.22, category: "Herbs", rating: 4 },
      2: { id: 2, img: img2, Name: "Bouquet", Price: 15.99, category: "Bouquet", rating: 5 },
      3: { id: 3, img: img1, Name: "Bonsai plants", Price: 25.49, category: "Bonsai plants", rating: 3 },
      4: { id: 4, img: img2, Name: "Cacti", Price: 8.75, category: "Cacti", rating: 4 },
      5: { id: 5, img: img1, Name: "Foliage Plants", Price: 12.30, category: "Foliage Plants", rating: 5 },
      6: { id: 6, img: img2, Name: "Flowering Plants", Price: 18.99, category: "Flowering Plants", rating: 4 },
      7: { id: 7, img: img1, Name: "Indoor Plants", Price: 20.49, category: "Indoor Plants", rating: 3 },
      8: { id: 8, img: img2, Name: "Mosses", Price: 5.99, category: "Mosses", rating: 3 },
      9: { id: 9, img: img1, Name: "Cactus Flower", Price: 10.22, category: "Herbs", rating: 4 },
      10: { id: 10, img: img2, Name: "Bouquet", Price: 15.99, category: "Bouquet", rating: 5 }
    };
  
    const [cart, setCart] = useState(() => {
      return JSON.parse(localStorage.getItem("cart")) || [];
    });
  
    const [cartCount, setCartCount] = useState(() => {
      return parseInt(localStorage.getItem("cartCount")) || 0;
    });
  
    useEffect(() => {
      // Update the localStorage whenever cart or cartCount changes
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("cartCount", cartCount);
      window.dispatchEvent(new Event("cartUpdated")); // Notify other components
    }, [cart, cartCount]);
  
    const addToCart = (id) => {
      const parsedId = parseInt(id); // Ensure the id is parsed as an integer
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === parsedId);
  
        if (existingItem) {
          // If the item already exists, update its quantity
          return prevCart.map((item) =>
            item.id === parsedId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Otherwise, add the new item to the cart
          const newItem = productdata[parsedId];
          return [...prevCart, { ...newItem, quantity: 1 }];
        }
      });
    };
  
    // Calculate the cart count after cart state update
    useEffect(() => {
      setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
    }, [cart]);
  
    const { img, Name, Price, category, rating } = productdata[parsedId] ?? {};
  
    const renderStars = (rating) => {
      let stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          i <= rating ? (
            <FaStar key={i} className="text-[#e7e405] text-[17px] mx-[3px]" /> // Filled star
          ) : (
            <FaRegStar key={i} className="text-[#706e6e]  text-[17px]" /> // Empty star
          )
        );
      }
      return stars;
    };
  
    return (
      <div className="w-full min-h-100vh relative flex flex-col justify-center items-center py-[60px] px-[120px]">
        <div className="w-full flex gap-[60px]">
          <div className="w-[40%] flex justify-center">
            <p className="h-[340px] overflow-hidden shadow-[0_2px_10px_#272626] rounded-[5px]">
              <img src={img} className="w-[350px] h-[340px] hover:scale-105 ease-initial duration-300" />
            </p>
          </div>
          <div className="w-[60%] flex flex-col gap-[6px] divide-y-[2px] divide-[#cccbcb]">
            <div className="flex flex-col gap-[6px]">
              <p className="w-full text-[20px] text-[#383737] leading-[1.6] text-justify">
                <span className="text-[#087620]">Name :</span> {Name}
              </p>
              <p className="w-full text-[20px] text-[#383737] leading-[1.6] text-justify">
                <span className="text-[#087620]">Price :</span> $ {Price}
              </p>
              <div className="w-full text-[20px] flex items-center gap-[2px] text-[#383737] leading-[1.6] text-justify">
                <span className="text-[#087620]">Ratings : </span>{renderStars(rating)}
              </div>
              <p className="w-full text-[20px] text-[#383737] leading-[1.6] text-justify">
                <span className="text-[#087620]">Plant Type :</span> {category}
              </p>
              <p className="w-full text-[17px] text-[#383737] leading-[1.5] text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis vel ea nesciunt facilis? Suscipit tenetur eaque vero. Reiciendis nemo doloribus, aspernatur optio, dolore nam, sequi similique veritatis quibusdam minus quo!
              </p>
  
              <button
                className="w-[180px] cursor-pointer py-[8px] flex justify-center text-[16px] my-[20px] text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300"
                onClick={() => addToCart(parsedId)} // Pass parsedId to addToCart
              >
                ADD TO CART
              </button>
            </div>
            <div className="w-full py-[10px] flex flex-col gap-[8px] text-[16px] text-[#979696]">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 5 days.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';

export const Productdetails = () => {
    const [productData, setProductData] = useState(null);
    const { id } = useParams(); // Get product ID from URL

    const fetchProductData = async () => {
        try {
            const res = await axios.get(`http://localhost:2000/getproductById?objectid=${id}`);
            setProductData(res.data);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to fetch product data");
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [id]);

    // Cart handling
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const [cartCount, setCartCount] = useState(() => parseInt(localStorage.getItem("cartCount")) || 0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartCount", cartCount);
        window.dispatchEvent(new Event("cartUpdated")); // Notify other components
    }, [cart, cartCount]);

    

const addToCart = (product) => {
  setCart((prevCart) => {
    const existingItemIndex = prevCart.findIndex((item) => item._id === product._id); // Check if the item already exists in the cart

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += 1;
      return updatedCart;
    } else {
      // Item doesn't exist, add the new product to the cart
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });

  setCartCount(cartCount + 1); // Increase cart count
};
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                i <= rating ? (
                    <FaStar key={i} className="text-[#e7e405] text-[17px] mx-[3px]" />
                ) : (
                    <FaRegStar key={i} className="text-[#706e6e] text-[17px]" />
                )
            );
        }
        return stars;
    };

    if (!productData) return <div className="text-center py-[80px] text-[20px] text-[#706e6e] ">Loading...</div>;

    const { filename, ProductName, price, PlantType, Rating, description } = productData;

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center py-[60px] px-[120px]">
            <div className="w-full flex gap-[60px]">
                {/* Product Image */}
                <div className="w-[40%] flex justify-center">
                    <div className="h-[340px] overflow-hidden shadow-lg rounded-[5px]">
                        <img
                            src={`http://localhost:2000/view/${filename}`}
                            className="w-[400px] h-[350px] hover:scale-105 transition-all duration-300"
                            alt={ProductName}
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="w-[60%] flex flex-col gap-[15px] divide-y-[2px] divide-[#cccbcb]">
                    <div className="flex flex-col gap-[15px]">
                        <p className="text-[20px] text-[#383737]">
                            <span className="text-[#087620] font-bold">Name:</span> {ProductName}
                        </p>
                        <p className="text-[20px] text-[#383737]">
                            <span className="text-[#087620] font-bold">Price:</span> $ {price.toFixed(2)}
                        </p>
                        <div className="text-[20px] flex items-center gap-[5px] text-[#383737]">
                            <span className="text-[#087620] font-bold">Ratings:</span>
                            {Rating ? renderStars(Rating) : "No ratings available"}
                        </div>
                        <p className="text-[20px] text-[#383737]">
                            <span className="text-[#087620] font-bold">Plant Type:</span> {PlantType}
                        </p>
                        <p className="text-[17px] text-[#383737] leading-[1.5]">{description}</p>

                        {/* Add to Cart Button */}
                     <Link to={'/Cartsection'} className='no-underline text-inherit'>  <button
  className="w-[180px] cursor-pointer py-[8px] flex justify-center text-[16px] my-[20px] text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300"
  onClick={() => addToCart(productData)} // Pass the entire productData object
>
  ADD TO CART
</button></Link> 
                    </div>

                    {/* Additional Info */}
                    <div className="w-full py-[10px] flex flex-col gap-[8px] text-[16px] text-[#979696]">
                        <p>✅ 100% Original product.</p>
                        <p>💵 Cash on delivery is available on this product.</p>
                        <p>🔄 Easy return and exchange policy within 5 days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

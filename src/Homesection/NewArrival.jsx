import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


export const NewArrival = () => {
  
    
      const[Popular,setPopular]=useState([])
  


      const Fetchpopulardata=async()=>{
        await axios.get("http://localhost:2000/getproduct",)
        .then((res)=>{
          const popularProducts = res.data.filter(product => product.isPopular === true);
          setPopular(popularProducts);
        })
        .catch((err)=> toast.error(err.res.data.message))
        .finally()
    }
    
    useEffect(()=>{
      Fetchpopulardata();
    },[Popular])

    
 
    return (
      <div className="py-[35px] flex flex-col items-center gap-[40px]">
      <p className="[@media(min-width:900px)]:text-[26px] [@media(min-width:600px)]:text-[24px] [@media(min-width:250px)]:text-[22px] text-[#087620]">TOP PRODUCTS</p>
      <div className="[@media(min-width:900px)]:w-[85%] [@media(min-width:750px)]:w-[90%] [@media(min-width:550px)]:w-[80%] [@media(min-width:450px)]:w-[90%] [@media(min-width:350px)]:w-[60%] [@media(min-width:280px)]:w-[70%]  w-[80%]  ">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            200: { slidesPerView: 1, spaceBetween: 20 },
            450: { slidesPerView: 2, spaceBetween: 30 },
            750: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination]}
          className="h-[350px] !pr-[30px] !pt-[10px]"
        >
          {Popular.map((product, index) => (
            <SwiperSlide key={product._id}>
             <div className="w-full mx-[20px] pb-[15px] rounded-[8px] shadow-[0_2px_10px_#272626] group overflow-hidden">
             <Link to={`/productdetails/${product._id}`} className='no-underline text-inherit '>  <img
                  src={`http://localhost:2000/view/${product.filename}`}
                  className="w-full h-[200px] rounded-t-[7px] hover:scale-105 transition ease-in-out duration-400"
                  alt='could not load image'
                />
                <p className="w-full [@media(min-width:900px)]:text-[20px] [@media(min-width:600px)]:text-[17px] text-[black] text-center hover:text-[#087620] p-[5px]">
                  {product.ProductName}
                </p>
                <p className="w-full [@media(min-width:900px)]:text-[20px] [@media(min-width:600px)]:text-[17px] indent-[15px] text-[black] text-center hover:text-[#087620]">
                  ${product.price}
                </p></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>)  
}

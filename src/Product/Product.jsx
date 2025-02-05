import React, { useEffect, useState } from 'react'
import Hero2 from '../Assets/Product/prodhero.png'
import Nodata from '../Assets/Product/Nodata.png'
import img1 from '../Assets/home/service.jpeg';
import img2 from '../Assets/herosectimg1.png';
import { BsCart3 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {motion}  from "framer-motion";
import { Pagination, Stack } from "@mui/material";
import axios from 'axios';

export const Product = () => {
  return (
    <div className='w-full min-h-100vh flex flex-col'>
        <ProductHero/>
        <ViewProductsection/>
    </div>
  )
}

export const ProductHero = () => {
    return (
        <div className='w-full min-h-100vh relative flex justify-center items-center bg-[black] overflow-hidden'>
        <motion.img initial={{scale:1}} animate={{scale:1.1}} transition={{duration:5,delay:1, repeat: Infinity, repeatType: "reverse"}}
          src={Hero2}  
          className="w-[100%] opacity-60" 
        />
        <div className='min-h-100vh absolute flex flex-col items-center gap-[20px]'>
          <p className='text-[38px] font-bold text-[white]'>Explore Collections</p>
          <p className='text-[32px] font-bold text-[white]'>Every plant is a step towards a greener world.</p>
            
            </div>
            
            </div>
    )
  }


  const Prodcategories = [
    "Herbs",
    "Bouquet",
    "Bonsai plants",
    "Cacti",
    "Foliage Plants",
    "Flowering Plants",
    "Indoor Plants",
    "Outdoor Plants",
  ];



  export const ViewProductsection = () => {
    
  
    const[product,setproduct]=useState([])
    const Fetchproductdata=async()=>{
      await axios.get("http://localhost:2000/getproduct",)
      .then((res)=>setproduct(res.data))
      .catch((err)=> toast.error(err.res.data.message))
      .finally()
  }
  
  useEffect(()=>{
    Fetchproductdata();
  },[])



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
            const newItem = product.find((item) => item.id === id);
            return [...prevCart, { ...newItem, quantity: 1 }];
          }
        });
      
        setCartCount(cartCount + 1);
      };

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState("relevance");
    const itemsPerPage = 9;
  
    // Handle filter toggle
    const toggleFilter = (filter) => {
      setSelectedFilters((prevFilters) =>
        prevFilters.includes(filter) ? prevFilters.filter((f) => f !== filter) : [...prevFilters, filter]
      );
      setCurrentPage(1); // Reset page when changing filters
    };
  
    // Filter products based on selected categories
    let filteredData = product.filter((item) => 
      (selectedFilters.length === 0 || selectedFilters.includes(item.PlantType)) &&
      item.ProductName
      .toLowerCase().includes(searchQuery.toLowerCase()) // 🔍 Search Filter
  );
    // Sorting Logic
    if (sortOption === "price-low-high") {
      filteredData = [...filteredData].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      filteredData = [...filteredData].sort((a, b) => b.price - a.price);
    }
  
    // Pagination Logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  
    return (
      <div className="w-full min-h-100vh py-[60px] px-[50px] flex gap-[40px]">
        {/* Sidebar with Filters */}
        <div className="w-[30%] min-h-100vh flex flex-col items-center gap-[20px]">
          <p className="w-full flex justify-center text-[20px] text-[#272626] pt-[10px] ">FILTERS</p>
          <div className='relative flex items-center  '>
            <input type="text" 
            className=' w-[250px] py-[5px] px-[15px] outline-none text-[15px] border-[2px] border-[#a7a7a7] rounded-full'
            placeholder='Search..'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoSearchSharp className='absolute right-[15px] text-[20px] text-[#858484]'/>
            </div>
          <div className="text-gray-800 flex flex-col gap-[15px] border-[2px] border-[#b4b3b3] px-[40px] py-[15px] rounded-[10px]">
          <p className="w-full  text-[16px] text-[#272626] py-[5px] ">CATEGORIES</p>
            {Prodcategories.map((category) => (
              <label key={category} className="flex items-center gap-[20px] rounded-[50px] ">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded-md checked:bg-green-500"
                  onChange={() => toggleFilter(category)}
                  checked={selectedFilters.includes(category)}
                />
                <span className="text-[18px]">{category}</span>
              </label>
            ))}
          </div>
        </div>
  
        {/* Products Section */}
        <div className="w-[70%] min-h-100vh flex flex-col">
          <div className="w-full flex justify-between px-[20px]">
           <div className='flex flex-col gap-[25px]'>
            <p className="text-[24px] underline decoration-[2px] underline-offset-8 decoration-[#087620]">
              ALL <span className="text-[#087620] text-[26px]">PRODUCTS</span>
            </p>

            </div> 
            <select id="sort"
              className="w-[180px] h-[35px] p-5 text-[#087620] bg-white shadow-sm cursor-pointer outline-none text-[15px] rounded-[5px] border-[2px] border-[#dddfdb]"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevance">Sort by: Relevance</option>
              <option value="price-low-high">Price: Low  to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
  
          {paginatedData.length === 0 ? (
            <div className="w-[80%] flex flex-col justify-center my-[20px] gap-[10px] mx-[70px] items-center py-[20px] border-[2px] border-[#087620] rounded-[13px] shadow-[0_1px_5px_#000000a6]">
              <img src={Nodata} className="w-[120px] rounded-full" />
              <p className="text-[17px] text-[black] text-center hover:text-[#087620]">
                No matching data found. Please try a different filter.
              </p>
            </div>
          ) : (
            <div className="w-full grid grid-cols-3 gap-[30px] text-center p-[30px]">
              {paginatedData.map((item, index) => (
                <div key={index} className="flex flex-col gap-[10px] items-center pb-[10px]  rounded-[8px] shadow-[0_2px_10px_#272626] relative group overflow-hidden">
                  <Link to={`/productdetails/${item._id}`} className='no-underline text-inherit '> <img src={`http://localhost:2000/view/${item.filename}`} className="w-full h-[200px] rounded-t-[7px] hover:scale-105 transition ease-initial duration-400 "/></Link>
                  {/* <p className="w-full min-h-100vh absolute bottom-[60px] text-[16px] bg-[black] py-[15px] text-[white] cursor-pointer flex justify-center gap-[15px] invisible group-hover:visible ease-in duration-400" 
              onClick={() => {setCartCount(cartCount + 1);
    addToCart(item.id);
}}>
                    <BsCart3 />ADD TO CART
                  </p> */}
                  <Link to={`/productdetails/${item._id}`} className='no-underline text-inherit '>  <p className="w-full text-[20px] indent-[15px] text-[black] text-center hover:text-[#087620]">{item.ProductName}</p>
                  <p className="w-full text-[20px] indent-[15px] text-[black] text-center hover:text-[#087620]">${item.price.toFixed(2)}</p>
                  </Link> </div>
              ))}
            </div>
          )}
  
          {/* Pagination Controls */}
          <div className="w-full flex justify-center">
     </div>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="success"
        />
      </Stack>
    </div>
 
</div>


    );
  };
  
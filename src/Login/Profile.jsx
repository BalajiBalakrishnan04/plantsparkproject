import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import logo from '../Assets/plant_logo.png'
import profilebg from '../Assets/profile/profilebg.jpeg'

export const Profile = () => {
  const initialUserData = JSON.parse(localStorage.getItem("plantsparkuserdata")) || {};
  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({ ...userData });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("plantsparkuserdata");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartCount");
    navigate("/Login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!updatedData.username || !updatedData.email || !updatedData.Mobile) {
      toast.error("All fields are required.");
      return;
    }

    try {
        await axios.put("http://localhost:2000/putuserdata", {
        email: updatedData.email,
        updatedData
      })
      .then((res) => {
                          toast.success(res.data.message) 
                          setUserData(updatedData) 
                          localStorage.setItem("plantsparkuserdata", JSON.stringify(updatedData));  
                          navigate("/profile")
                      })
                      .catch((err) => toast.error(err.response.data.message))
                      .finally(() => setIsEditing(false))
    } catch (error) {
      toast.error(error.res.data.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[black]  " >
    <img src={profilebg} className='w-full h-screen opacity-90 '  />
      <div className="min-w-100vw min-h-100vh py-[30px] flex flex-col justify-center gap-[30px] absolute z-10 bg-[#ffffffe5] rounded-[10px] shadow-[0_1px_5px_#000000a6] " >

        <div className="flex flex-col justify-center items-center gap-[20px]  ">
          <p className="flex flex-col items-center gap-[10px]">
         
            <img src={logo} className='w-[40px] '  />
            
            
     
            <span className=" text-[26px] text-[#035514]  font-semibold">PlantSpark</span>
          </p>
          
        </div>
        {!isEditing ? (
          
          <div className="w-full flex flex-col justify-center gap-[30px] px-[30px] ">
            <p className="w-full flex justify-center items-center  text-[24px] text-[#070707]">User Profile</p>
            <p className="w-full flex items-center gap-[15px] text-[22px]  ">
              <FaUser className="text-[25px] text-[#035514]" /> {userData.username}
            </p>
            <p className="w-full flex items-center gap-[15px] text-[22px] ">
              <MdEmail className="text-[25px] text-[#035514]" /> {userData.email }
            </p>
            <p className="w-full flex items-center gap-[15px] text-[22px] ">
              <IoCall className='text-[25px] text-[#035514]' /> {userData.Mobile}
            </p>
            <div className='w-full flex justify-center'>
            <button
              onClick={() => setIsEditing(true)}
              className='w-[150px] cursor-pointer py-[8px] flex justify-center text-[16px] my-[20px] text-[white] hover:border-[#7BD001] bg-[black] hover:text-[#7BD001] border-[2px] border-[#d6d5d5] rounded-[10px] ease-initial duration-300'>
            Edit Profile
            </button></div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center gap-[30px] px-[80px]">
            
            <p className="w-full flex justify-center items-center  text-[24px]  text-[#035514] ">Edit Profile</p>
            <input
              type="text"
              name="username"
              value={updatedData.username}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="text-[black] bg-transparent px-[8px] py-[5px] rounded-[5px] border-[#035514] border-2 text-[18px] outline-none"
            />
            <input
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="text-[black] bg-transparent px-[8px] py-[5px] rounded-[5px] border-[#035514] border-2 text-[18px] outline-none "
            />
            <input
              type="text"
              name="Mobile"
              value={updatedData.Mobile}
              onChange={handleInputChange}
              placeholder="Enter your mobile number"
              className="text-[black] bg-transparent px-[8px] py-[5px] rounded-[5px] border-[#035514] border-2 text-[18px] outline-none"
            />
            <div className='w-full flex justify-between'>
            <button
              onClick={handleUpdate}
              className="w-[110px]  text-[black] border-[#599603] bg-[#ffffff04] border-2 py-[5px] text-[18px] rounded-[10px]  hover:text-[#035514] hover:bg-[white] ease-in duration-200">
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="w-[110px]  text-[black] border-[red] bg-[#ffffff04] border-2 py-[5px] text-[18px] rounded-[10px]  hover:text-[red] hover:bg-[white] ease-in duration-200">
              Cancel
            </button></div>
          </div>
        )}
        <div className="w-full flex justify-between px-[30px]">
          <Link to="/" className="no-underline text-inherit">
            <p className="flex items-center gap-[10px] text-[21px] text-[black] cursor-pointer">
              <IoArrowBackCircleOutline className="text-[35px]  text-[#035514]" />
              Back
            </p>
          </Link>
          <p
            onClick={handleLogout}
            className="flex items-center gap-[10px] text-[21px] text-[black] cursor-pointer">
            <HiOutlineLogout className=" text-[30px] text-[#035514]" />
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

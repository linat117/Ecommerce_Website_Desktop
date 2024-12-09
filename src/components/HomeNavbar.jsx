  import {useState, useEffect, useRef } from "react";
  import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";

//import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for list items
import { Link } from "react-router-dom";
const HomeNavbar = ({cartCount}) => {
  //logout
  const handleLogout = () => {
    // Clear all local storage or session data
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
  
    // Optionally, clear the entire localStorage/sessionStorage
    localStorage.clear(); 
    sessionStorage.clear();
  // Reset user state in context
  setUser(null);
    // Redirect to login
    navigate("/login");
  };
  //dropdown 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //to make the dropdown closes when you click on the outside of the dropdown 
  const dropdownRef = useRef(null);
    // Close dropdown when clicking outside
useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 
   
    return ( 
        <>
         <div className="w-screen h-20 border p-7 overflow-hidden">
<div className="flex  w-[1250px] h-9 ml-[8rem]  mr-[8rem] p-1">
<div className="text-[18px] font-poppins font-semibold">Exclusive</div>
<div className="ml-[12rem]">
    <ul className="flex space-x-10 font-poppins">
        <li><a href="/home">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign up</a></li>
    </ul>
</div>
<div className="flex ml-[14rem]" ref={dropdownRef}>
    <input type="text" placeholder="what are you looking for?" className="bg-gray-50 h-8 p-2 w-60 rounded-lg text-[12px] font-poppins"/>
    <IoIosSearch className="ml-[-2rem] mt-[0.5rem] mr-[1rem] text-[20px]"/>
    <Link to="">
          <div className="relative">
            
          
          </div>
        </Link>
<CiHeart className="text-[26px] mt-[0.3rem] ml-[1rem]"/>
<Link to={'/cart'}><BsCart2 className="text-[23px] mt-[0.3rem] ml-[1rem]"/></Link><span>{cartCount}</span>
<FaUserCircle className="text-red-600 w-6 h-6 ml-[1rem] mt-[0.3rem]"
 onClick={() => setIsDropdownOpen((prev) => !prev)}
 />
  {isDropdownOpen && (
              <div className="absolute ml-[10rem] mt-8 w-52 bg-[#000000]/[10%] backdrop-blur-xl backdrop-opacity-95  rounded-  z-50">
                <ul className="py-2 font-poppins text-[13px] text-white">
                <a href="/manage_account">
                  <li className="flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   
                  < FaRegUser className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> <p className="">Manage my Account</p> 
                  
                  </li>
                  </a>
                  <li className="flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <PiShoppingBagOpenDuotone className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> My Orders
                  </li>
                  <li className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                  <MdOutlineCancel className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/>  My Cancellations
                  </li>
                  <li className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <IoIosStarOutline className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> My Reviews
                  </li>
                  <li
                  onClick={handleLogout}
                   className=" flex px-4 py-2 hover:bg-red-600 cursor-pointer">
                   <SlLogout className="mt-[0.1rem] text-[16px] mr-[0.5rem]"/> Logout
                  </li>
                </ul>
              </div>
            )}

</div>
</div>
    </div>
        </>
     );
}
 
export default HomeNavbar;
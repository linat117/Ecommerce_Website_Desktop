import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "../components/SideBar.jsx";
import EditProfileForm from "./EditProfileForm.jsx";
const ManageAccount = () => {
    const [selectedSection, setSelectedSection] = useState('profile');

    const renderSection = () => {
        switch (selectedSection) {
            case 'profile':
                return <EditProfileForm />;
            case 'address':
                return <AddressBook />;
            case 'payments':
                return <MyPayments />;
            // Add other cases for settings, orders, etc.
            default:
                return <EditProfileForm />;
        }
    };
    return ( 
        <>
        <div>
           <Header/>
              {/*Account page Navbar startted*/}
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
<div className="flex ml-[14rem] ">
    <input type="text" placeholder="what are you looking for?" className="bg-gray-50 h-8 p-2 w-60 rounded-lg text-[12px] font-poppins"/>
    <IoIosSearch className="ml-[-2rem] mt-[0.5rem] mr-[1rem] text-[20px]"/>
<CiHeart className="text-[26px] mt-[0.3rem] ml-[1rem]"/>
<BsCart2 className="text-[23px] mt-[0.3rem] ml-[1rem]"/>
<FaUserCircle className="text-red-600 w-6 h-6 ml-[1rem] mt-[0.3rem]"/>

</div>
</div>
    </div> 
    <div className="ml-[10rem] mt-[2rem]">
<div className="flex">
   <p> Home</p>  &nbsp;&nbsp;&nbsp;<p> /</p> &nbsp;&nbsp;&nbsp;<p className="font-semibold font-poppins mt-[0.1rem]">My Account</p> 
</div>
    <div className="flex mt-[4rem]">
            <Sidebar setSelectedSection={setSelectedSection} />
            <div className="w-3/4 p-8 bg-white">
                 {renderSection()}
            </div>
        </div>
        </div>
    <Footer/>
        </div>
        </>
     );
}
 
export default ManageAccount;
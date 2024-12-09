import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { FaCcMastercard } from "react-icons/fa6";
import HomeNavbar from "../components/HomeNavbar";
const Checkout = () => {
    return ( 
        <>
        <div>
           <Header/>
              {/*Checkout page Navbar startted*/}
              <HomeNavbar/>
    <div className="ml-[9rem] mr-[9rem]">
<div className="flex mt-[1rem]">
    <p className="text-gray-400">Product</p> &nbsp;  &nbsp;/ &nbsp; &nbsp;<p className="text-gray-400">Product Detail</p> &nbsp; &nbsp;/ &nbsp; &nbsp;Buy Now
</div>
<div  className="mt-[2rem] space-y-3 mb-[4rem]">
<div className="text-xl font-poppins"> Billing Details</div>
<div className="flex">
    <div>
<p className="font-poppins text-gray-400">First Name*</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400">Company Name</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400" >Street Address*</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400">Apartment,floor, etc (optional)</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400">Town/City*</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400">Phone Number*</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/>
<p className="font-poppins text-gray-400">Email Address*</p>
<input type="text" className="bg-gray-100 w-[30rem] h-8 rounded mt-[0.7rem]"/><br/>
  
  <div className="flex mt-[0.9rem]"> 
    <input type="checkbox" className="w-4 h-4"/> 
    <p className="mt-[-0.2rem] ml-[0.5rem] font-poppins">Save this information for faster check-out next time</p>
    </div>
    </div>
    <div className="ml-[4rem] mt-[2rem] space-y-6">
        <div className="flex space-x-60">
<p>LCD Monitor</p><p>$650</p>
</div>
<div className="flex space-x-60">
<p>HI Gamepad</p><p>$1100</p>
</div>
<div className="flex space-x-64">
<p>Subtotal:</p><p>$1750</p>
</div>
<hr/>
<div className="flex space-x-64">
<p>Shipping:</p><p>free</p>
</div>
<hr/>
<div className="flex space-x-72">
<p>Total:</p><p>$1750</p>
</div>
<div className="flex space-x-3">
<input type="radio" className="w-4 h-4"/>
<p className="mt-[-0.3rem] ml-[1rem] ">Bank</p>
<p className=" flex">
<LiaCcVisa/>
<FaCcMastercard/>
</p>
</div>
<div className="flex">
<input type="radio" className="w-4 h-4"/>
<p className="mt-[-0.3rem] ml-[1rem] ">Cash on delivery</p>

</div>
<div className="flex space-x-4">
<input type="" className="border border-gray-700 h-10 w-[16rem]  rounded  p-2" placeholder="Coupon Code"/>
<button className="bg-red-500/[36] text-white font-poppins p-2 px-7 rounded ">Apply Coupon</button>
</div>
<button className="bg-red-500/[36] text-white font-poppins p-2 px-7 rounded ">Place Order</button>
    </div>
</div>
</div>
        </div>

    <Footer/>
        </div>
        </>
     );
}
 
export default Checkout;
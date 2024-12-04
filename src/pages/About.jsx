import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../components/Footer";
const About = () => {

    return ( 
        <>
        <div className="overflow-x-hidden">
            <Header/>
            {/*nav bar section for about us page*/}
            <div className="w-screen h-20 border p-7 overflow-hidden">
<div className="flex  w-[1250px] h-9 ml-[8rem]  mr-[8rem] p-1">
<div className="text-[18px] font-poppins font-semibold">Exclusive</div>
<div className="ml-[12rem]">
    <ul className="flex space-x-10 font-poppins">
        <li><a href="/home">Home</a></li>
        <li>Contact</li>
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
   <p> Home</p>  &nbsp;&nbsp;&nbsp;<p> /</p> &nbsp;&nbsp;&nbsp;<p className="font-semibold font-poppins mt-[0.1rem]">About</p> 
</div>
<div className="flex mt-[3rem]">
    <div className="mt-[7rem]">
        <div>
            <h1 className="text-[32px] font-poppins font-semibold">Our Story</h1>
        </div>
        <div className="w-[30rem] leading-[28px] font-poppins text-[14px] mt-[1rem]">
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
    </div>
    <div className="w-[49.3rem] h-[35rem] bg-[#EB7EA8] ml-[5.7rem] "> 
        <img src="aboutFirst.png" className="ml-[10rem] mt-[4.3rem]"/>
    </div>
</div>
<div className="flex mt-[5rem] space-x-16">
    <div className="w-64 h-56 border border-gray-500 rounded bg-white hover:bg-red-500 active:bg-red-500 
                hover:text-white active:text-white 
                transition-all">
        <div className="w-20 h-20 rounded-full bg-gray-400 hover:bg-gray-100 active:bg-gray-100 p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black hover:bg-white active:bg-white p-3">
            <BsShop className="text-[40px]  text-white hover:text-black active:text-black "/>
            </div>
        </div>
        <div className="ml-[5.3rem] mt-[1rem] font-poppins font-semibold text-[28px]"> 10.5K</div>
        <div className="font-poppins text-[14px] ml-[3rem] mt-[">Sellers active in our site</div>
    
    </div>
    <div className="w-64 h-56 border border-gray-500 rounded hover:bg-red-500 active:bg-red-500 
                hover:text-white active:text-white 
                transition-all">
        <div className="w-20 h-20 rounded-full bg-gray-400 bg-gray-400 hover:bg-gray-100 active:bg-gray-100 p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black hover:bg-white  active:bg-white p-3">
            <RiMoneyDollarCircleLine className="text-[40px] hover:text-black active:text-black  text-white"/>
            </div>
        </div>
        <div className="ml-[6rem] mt-[1rem] font-poppins font-semibold text-[28px]"> 33K</div>
        <div className="font-poppins text-[14px] ml-[3rem] mt-[">Monthly product sale</div>
    
    </div>
    <div className="w-64 h-56 border border-gray-500 rounded hover:bg-red-500 active:bg-red-500 
                hover:text-white active:text-white 
                transition-all">
        <div className="w-20 h-20 rounded-full bg-gray-400 bg-gray-400 hover:bg-gray-100 active:bg-gray-100 p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black hover:text-black active:text-black  p-3">
            < FiUsers className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[5.3rem] mt-[1rem] font-poppins font-semibold text-[28px]"> 45.5K</div>
        <div className="font-poppins text-[14px] ml-[2rem] mt-[">Customer active in our site</div>
    
    </div>
    <div className="w-64 h-56 border border-gray-500 rounded hover:bg-red-500 active:bg-red-500 
                hover:text-white active:text-white 
                transition-all">
        <div className="w-20 h-20 rounded-full bg-gray-400 bg-gray-400 hover:bg-gray-100 active:bg-gray-100 p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black hover:text-black active:text-black  p-3">
            <FaSackDollar className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[6rem] mt-[1rem] font-poppins font-semibold text-[28px]"> 25K</div>
        <div className="font-poppins text-[14px] ml-[2rem] mt-[">Anual gross sale in our site</div>
    </div>
</div>
{/*teams section*/}
<div className="mt-[3rem] flex space-x-8">
    <div className=" w-[24rem] h-[34rem] ">
        <div className="w-[24rem] h-[25rem] bg-gray-200"></div>
        <div className="mt-[1rem]">
            <p className="text-[24px] font-poppins font-semibold">Tom Cruise</p>
            <p>Founder & Chairman</p>
<div className="flex text-[20px] space-x-2 mt-[1rem] "><CiTwitter/><IoLogoInstagram /><RiLinkedinLine className="mt-[-0.1rem]"/></div>
        </div>
    </div>
    <div className=" w-[24rem] h-[34rem] ">
        <div className="w-[24rem] h-[25rem] bg-gray-200"></div>
        <div className="mt-[1rem]">
            <p className="text-[24px] font-poppins font-semibold">Tom Cruise</p>
            <p>Founder & Chairman</p>
<div className="flex text-[20px] space-x-2 mt-[1rem] "><CiTwitter/><IoLogoInstagram /><RiLinkedinLine className="mt-[-0.1rem]"/></div>
        </div>
    </div>
    <div className=" w-[24rem] h-[34rem] ">
        <div className="w-[24rem] h-[25rem] bg-gray-200"></div>
        <div className="mt-[1rem]">
            <p className="text-[24px] font-poppins font-semibold">Tom Cruise</p>
            <p>Founder & Chairman</p>
<div className="flex text-[20px] space-x-2 mt-[1rem] "><CiTwitter/><IoLogoInstagram /><RiLinkedinLine className="mt-[-0.1rem]"/></div>
        </div>
    </div>
</div>
<div className="flex mt-[5rem] space-x-40">
    <div className="w-72 h-56  rounded bg-white ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black  p-3">
            <TbTruckDelivery className="text-[40px]  text-white  "/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> FREE AND FAST DELIVERY</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">Free delivery for all orders over $140</div>
    
    </div>
    <div className="w-72 h-56  rounded ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black  p-3">
            <RiCustomerServiceLine className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> 24/7 CUSTOMER SERVICE</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">Friendly 24/7 customer support</div>
    
    </div>
    <div className="w-72 h-56  rounded ">
        <div className="w-20 h-20 rounded-full bg-gray-400  p-2 pl-2 pt-2 ml-[5rem] mt-[2rem]">
            <div className="w-16 h-16 rounded-full bg-black   p-3">
            < AiOutlineSafetyCertificate  className="text-[40px]  text-white"/>
            </div>
        </div>
        <div className="ml-[1rem] mt-[1rem] font-poppins font-semibold text-[16px]"> MONEY BACK GUARANTEE</div>
        <div className="font-poppins text-[14px] ml-[rem] mt-[">we return money within 30 days</div>
    
    </div>
    
</div>
            </div>
            <Footer/>
        </div>
        </>
     );
}
 
export default About;
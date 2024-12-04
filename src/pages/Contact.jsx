import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Footer from "../components/Footer";
const Contact = () => {
    return ( 
        <>
        <div>
            <Header/>
            {/*Contact Navbar startted*/}
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
   <p> Home</p>  &nbsp;&nbsp;&nbsp;<p> /</p> &nbsp;&nbsp;&nbsp;<p className="font-semibold font-poppins mt-[0.1rem]">Contact</p> 
</div>
<div className="flex mt-[4rem] space-x-16">
    <div className=" w-[24rem] h-[28rem] pt-5 shadow-md">
        <div className="ml-[1rem]">
            <div className="flex space-x-2 mt-[1rem] mb-[1rem]">
                <div className="w-8 h-8 bg-red-600 rounded-full p-2"><MdPhone className="text-white"/></div>
                <div className="font-poppins">Call To Us</div>
            </div>
            <div><p className="font-poppins text-[14px] mb-[1rem]">We are available 24/7, 7 days a week.</p></div>
            <div><p className="font-poppins text-[14px] mb-[2rem]">Phone:+8801611112222</p></div>
        </div>
        <hr className="mx-[1rem] "/>
        <div>
        <div className="ml-[1rem] mr-[5rem]">
            <div className="flex space-x-2 mt-[2rem] mb-[1rem]">
                <div className="w-8 h-8 bg-red-600 rounded-full p-2"><MdMailOutline className="text-white"/></div>
                <div className="font-poppins">Write To Us</div>
            </div>
            <div><p className="font-poppins text-[14px] mb-[1rem]">Fill out our form and we will contact you within 24 hours</p></div>
            <div><p className="font-poppins text-[14px] mb-[2rem]">Emails: customer@exclusive.com</p></div>
       
            <div><p className="font-poppins text-[14px] mb-[2rem]">Emails: support@exclusive.com</p></div>
            </div>
        </div>
    </div>
    <div className="shadow-md w-[48rem] h-[28rem]">
<div className="flex mt-[3rem] ml-[2rem] mr-[2rem] space-x-4">
    <div className="bg-gray-100 w-[14rem] h-[3rem] rounded-lg"><input placeholder="Your Name *" className="bg-gray-100 pt-2 pl-2" /></div>
    <div className="bg-gray-100 w-[14rem] h-[3rem] rounded-lg"><input placeholder="Your Email *" className="bg-gray-100 pt-2 pl-2" /></div>
    <div className="bg-gray-100 w-[14rem] h-[3rem] rounded-lg"><input placeholder="Your Phone *" className="bg-gray-100 pt-2 pl-2" /></div>
</div>
<div className="bg-gray-100 rounded-lg ml-[2rem] w-[44rem] h-[15rem] mt-[1rem] pt-2 pl-2">
<textarea className="w-[44rem] h-[15rem] bg-gray-100 rounded-lg" placeholder=" Your message"></textarea>
</div>
<div>
    <button className="bg-red-600 p-2 px-6 rounded-lg mt-[2rem] ml-[37rem] text-[14px] text-white font-poppins">Send Message</button>
</div>
    </div>
</div>


    </div>
    <Footer/>
        </div>
        
        </>
     );
}
 
export default Contact;
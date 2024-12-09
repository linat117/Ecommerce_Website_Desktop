import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
const Footer = () => {
    return ( 
        <>
        <div className="absolute bg-black w-screen h-84 text-[#FAFAFA] font-poppins overflow-x-hidden   p-16 pl-36">
<div className="flex space-x-20">
<div className=" w-[180px]">
    <ul className="space-y-3">
        <li className="font-semibold">Exclusive</li>
        <li>Subscribe</li>
        <li className="text-[12px]">Get 10% off you first order</li>
        <li className="flex">
            <input className="w-40 h-8 border bg-black text-[12px] pl-2" placeholder="Enter your email"/>
       <VscSend className="ml-[-2rem] mt-[0.5rem]"/>
        </li>
    </ul>
</div>
<div className="w-44  w-[180px]">
<ul className="space-y-3">
        <li>Support</li>
        <li className="text-[12px]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</li>
        <li className="text-[12px]">exclusive@gmail.com</li>
        <li className="text-[12px]">+88015-88888-9999</li>
    </ul>
</div>
<div className=" w-[180px]">
<ul className="space-y-3">
        <li >Account</li>
        <li className="text-[12px]">My Account</li>
        <li className="text-[12px]">Login / Register</li>
        <li className="text-[12px]">Cart</li>
        <li className="text-[12px]">Cart</li>
        <li className="text-[12px]">Wishlist</li>
        <li className="text-[12px]">Shop</li>
    </ul>
</div>
<div className=" w-[180px]">
<ul className="space-y-3">
        <li>Quick Link</li>
        <li className="text-[12px]">Privacy policy</li>
        <li className="text-[12px]">Terms Of Use</li>
        <li className="text-[12px]">FAQ</li>
        <li className="text-[12px]">Contact</li>
    </ul>
</div>
<div className=" w-[200px]">
<ul className="space-y-3">
        <li>Download App</li>
        <li className="text-[12px]">Save $3 with App New User Only</li>
        <li><img src="barcode.png"/></li>
        <li className="flex text-white space-x-3">
            <FaFacebookF className="text-xl"/>
            <CiTwitter className="text-xl"/>
            <IoLogoInstagram className="text-xl"/>
            <RiLinkedinLine className="text-xl"/>
        </li>
    </ul>
</div>

</div>
<div className="pt-[20px] ml-[24rem]">
<p className="text-[13px] text-gray-100"> &copy; Copyright Rimel 2022.All right reserved</p>
</div>
   </div>
        </>
     );
}
 
export default Footer;
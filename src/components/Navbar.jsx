import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
    return ( 
    <>
    <div className="w-screen h-20 shadow-md p-7">
<div className="flex  w-120 h-9 ml-[8rem]  mr-[8rem] p-1">
<div className="text-[18px] font-poppins font-semibold">Exclusive</div>
<div className="ml-[17rem]">
    <ul className="flex space-x-11 font-poppins">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li><a href="/signup">Sign up</a></li>
    </ul>
</div>
<div className="flex ml-[16rem] ">
    <input type="text" placeholder="what are you looking for?" className="bg-gray-50 h-8 p-2 w-60 rounded-lg text-[12px] font-poppins"/>
    <IoIosSearch className="ml-[-2rem] mt-[0.5rem] text-[20px]"/>
</div>
</div>
    </div>
    </>
    );
}
 
export default Navbar;
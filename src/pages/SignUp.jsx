import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
    return ( 
        <>
        <div>
            <Header/>
            <Navbar/>
            <div className="flex  mt-[2.5rem] mb-[3rem] w-screen h-[520px]">
                <div className="w-[835px]  bg-[#CBE4E8]">
                    <img src="LoginImg.png" className="px-[170px]"/>
                </div>
                <div className="w-[530px] ">
                   <div className="p-20">
                   <h1 className="font-poppins text-2xl font-semibold">Create an account</h1>
                  <p className="mt-[0.2rem]">Enter you detail below</p>
                  <input className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  placeholder="Name"/>
                  <input className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  placeholder="Email or Phone Number"/>
                  <input className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  placeholder="Password"/>
                    <button className="bg-red-600 w-[330px] h-10 rounded-sm mt-[1.6rem] text-white text-[14px]">Create Account</button>
                   
                    <button className=" w-[330px] h-10 rounded-sm mt-[1rem] border border-gray-400 text-black text-[14px] p-2 pl-20 flex"><FcGoogle className="w-6 h-6"/><p className="ml-[0.5rem]">Sign up with Google</p></button>
                    <p className="text-gray-600 ml-[2.5rem] text-[13px] font-poppins mt-[0.4rem]">Already have account?&nbsp;  <a  href="/login" className="underline">  Log In</a></p>
                   </div>
                </div>

            </div>
            <Footer/>
        </div>
        </>
     );
}
 
export default SignUp;
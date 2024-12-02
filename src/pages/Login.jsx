import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
const Login = () => {
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
                   <div className="p-24">
                   <h1 className="font-poppins text-2xl font-semibold">Log in to Exclusive</h1>
                  <p className="mt-[0.2rem]">Enter you detail below</p>
                  <input className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  placeholder="Email or Phone Number"/>
                  <input className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  placeholder="Password"/>
                 
                 <div className="flex mt-[1.5rem]">
                    <button className="bg-red-600 w-[120px] h-10 rounded-md text-white text-[14px]">Log In</button>
                    <p className="text-red-600 ml-[5.5rem] text-[14px] font-poppins mt-[0.4rem]">Forget password?</p>
                 </div>
                   </div>
                </div>

            </div>
            <Footer/>
        </div>
        
        </>
     );
}
 
export default Login;
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // To handle redirection after successful login

    const handleLogin = async (e) => {
        e.preventDefault();

        // Call the login API
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                     username: "mor_2314",
                      password:"83r5^_" })
            });

            const data = await response.json();

            if (data.token) {
                // Store token in localStorage
                localStorage.setItem('authToken', data.token);

                // Redirect user to the dashboard or home page
                navigate('/home');
            } else {
                setErrorMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
            console.error(error);
        }
    };


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
                  <input 
                  className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]" 
                   placeholder="Email or Phone Number"
                   name="email"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                                />
                  <input 
                  className="border-b-2 border-transparent border-gray-300 outline-none  w-[330px] h-12 mt-[0.5rem]"  
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                 
                 <div className="flex mt-[1.5rem]">
                    <button 
                    className="bg-red-600 w-[120px] h-10 rounded-md text-white text-[14px]"
                    onClick={handleLogin}>Log In</button>
                    <p className="text-red-600 ml-[5.5rem] text-[14px] font-poppins mt-[0.4rem]">Forget password?</p>
                 </div>
                 {errorMessage && (
                                <p className="text-red-500 mt-4">{errorMessage}</p>
                            )}
                   </div>
                </div>

            </div>
            <Footer/>
        </div>
        
        </>
     );
}
 
export default Login;
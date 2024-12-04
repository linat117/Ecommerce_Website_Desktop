import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [selectedSection, setSelectedSection] = useState('profile');

    return (
        <div className="w-64   h-screen">
             <div className='font-poppins text-[14px] font-semibold'>Manage My Account</div>
            <div className=" ml-[2rem] mt-[1rem] space-y-2">
                <button
                    onClick={() => { setSelectedSection('profile');  }}
                    className="font-poppins text-[14px] text-gray-400 hover:text-red-600 active:text-red-600 focus:text-red-600"
                >
                    My Profile
                </button><br/>
                <button
                    onClick={() => { setSelectedSection('address'); }}
                    className="font-poppins text-[14px]  text-gray-400 hover:text-red-600 active:text-red-600 focus:text-red-600 "
                >
                    Address Book
                </button><br/>
                <button
                    onClick={() => { setSelectedSection('payments');  }}
                    className=" font-poppins text-[14px] text-gray-400 hover:text-red-600 active:text-red-600 focus:text-red-600   "
                >
                    My Payment Options
                </button><br/>
                
            </div>
            <div className='font-poppins mt-[1rem] text-[14px] font-semibold'>My Orders</div>
            <div className=" ml-[2rem] mt-[1rem] space-y-2">
                <button
                    onClick={() => { setSelectedSection('profile');  }}
                    className="font-poppins text-[14px] text-gray-400 hover:text-red-600 active:text-red-600 focus:text-red-600"
                >
                    My Returns
                </button><br/>
                <button
                    onClick={() => { setSelectedSection('address'); }}
                    className="font-poppins text-[14px]  text-gray-400 hover:text-red-600 active:text-red-600 focus:text-red-600 "
                >
                   My Cancellation
                </button><br/>
               
                
            </div>
            
            <div className='font-poppins text-[14px] mt-[1rem] font-semibold'>My WishList</div>
           
        </div>
        
    );
};

export default Sidebar;

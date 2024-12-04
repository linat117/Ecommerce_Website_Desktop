import React, { useState } from "react";

const AccountDropdown = () => {
  // State to toggle the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle logout action
  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear session, redirect to login page)
    console.log("User logged out");
  };

  return (
    <div className="relative">
      {/* Account Icon or Button */}
      <button onClick={toggleDropdown} className="bg-gray-800 text-white p-2 rounded-full">
        <i className="fas fa-user"></i> {/* You can use an icon for the account */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="text-gray-700">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Manage My Account</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">My Order</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">My Cancellation</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">My Reviews</li>
            <li
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 cursor-pointer text-red-600"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;

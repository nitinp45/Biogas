import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'; 

export const AdminNavbar = () => {
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const navigate = useNavigate();

  
  const fetchUserData = () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);
        setUserName(decodedToken.sub);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setUserName(""); // In case token decoding fails
    }
  };

  // Run the fetchUserData on initial render and listen for storage change (to update user data if token changes)
  useEffect(() => {
    fetchUserData(); // Fetch user data when component mounts

    // Update user data if token changes (i.e., other tabs log out)
    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  const profileImage =
    "https://th.bing.com/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setUserName("");
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 bg-gray-800 p-4 shadow-md w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Biogas Portal Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full focus:outline-none"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-2 px-4 text-gray-700">
                  <div className="font-semibold">{userName}</div>
                </div>
                <div className="border-t border-gray-200">
                  <button
                    onClick={handleLogout} // Attach logout functionality
                    className="w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-white p-4 shadow-md bg-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Biogas Portal Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-black text-lg">
          <li><Link to="/" className="hover:underline cursor-pointer">Home</Link></li>
          <li><Link to="/aboutus" className="hover:underline cursor-pointer">About</Link></li>
          <li><Link to="/contactus" className="hover:underline cursor-pointer">Contact Us</Link></li>
        </ul>

        {/* Login & Signup Buttons */}
        <div className="relative flex space-x-4 mt-4 md:mt-0">
          {/* Login Dropdown */}
          <div className="relative">
            <button
              className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-green-600"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
              Login ▼
            </button>

            {/* Dropdown Menu */}
            {isLoginOpen && (
              <div className="absolute top-12 left-0 bg-white border shadow-md rounded-md w-48">
                <ul className="text-black text-left">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/login?role=customer">Customer</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/login?role=admin">Admin</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/login?role=waste-contributor">Waste Contributor</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <Link to="/login?role=producer">Producer</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sign Up Button */}
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>

        {/* Hamburger Menu (for mobile) */}
        <div className="md:hidden flex mt-2">
          <button className="text-black text-lg">☰</button>
        </div>
      </div>
    </nav>
  );
};

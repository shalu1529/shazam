import React from 'react';
import logo from '../assets/logo.svg'; // Adjust the logo path accordingly
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons
import { FaApple } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white flex justify-between items-center px-8 py-3">
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-8">
        {/* Logo and SHAZAM */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">SHAZAM</h1>
        </div>

        {/* Navigation Links */}
        <Link to="/" className=" font-bold hover:text-blue-200">GET THE APP</Link>
        <Link to="/" className="font-bold hover:text-blue-200">CONCERTS</Link>
        <Link to="/" className="font-bold hover:text-blue-200">CHARTS</Link>
        <Link to="/" className= "font-bold hover:text-blue-200">RADIO SPINS</Link>
      </div>

      {/* Right Section: Search Icon and Connect Button */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <FaSearch className="text-white cursor-pointer hover:text-blue-200" />

        {/* Connect Button */}
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 flex">
          CONNECT <span className="text-blue-400 ml-1 flex items-center">
          <FaApple className="text-blue-400 mr-1" />
           Music</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

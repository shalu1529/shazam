// import React from 'react';
// import logo from '../assets/logo.svg'; // Adjust the logo path accordingly
// import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons
// import { FaApple } from "react-icons/fa";

// function Navbar() {
//   return (
//     <nav className="bg-blue-500 text-white flex justify-between items-center px-8 py-3">
//       {/* Left Section: Logo and Links */}
//       <div className="flex items-center space-x-8">
//         {/* Logo and SHAZAM */}
//         <div className="flex items-center">
//           <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
//           <h1 className="text-2xl font-bold">SHAZAM</h1>
//         </div>

//         {/* Navigation Links */}
//         <Link to="/get-app" className=" font-bold hover:text-blue-200">GET THE APP</Link>
//         <Link to="/concert" className="font-bold hover:text-blue-200">CONCERTS</Link>
//         <Link to="/charts" className="font-bold hover:text-blue-200">CHARTS</Link>
//         <Link to="/radio" className= "font-bold hover:text-blue-200">RADIO SPINS</Link>
//       </div>

//       {/* Right Section: Search Icon and Connect Button */}
//       <div className="flex items-center space-x-4">
//         {/* Search Icon */}
//         <FaSearch className="text-white cursor-pointer hover:text-blue-200" />

//         {/* Connect Button */}
//         <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 flex">
//           CONNECT <span className="text-blue-400 ml-1 flex items-center">
//           <FaApple className="text-blue-400 mr-1" />
//            Music</span>
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';


import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [bgColor, setBgColor] = useState('bg-blue-500'); // default color
  const [textColor, setTextColor] = useState('text-white'); // default text color

  useEffect(() => {
    // Update navbar colors based on the current route
    switch (location.pathname) {
      case '/get-app':
        setBgColor('bg-white');
        setTextColor('text-black');
        break;
      case '/concert':
        setBgColor('bg-white');
        setTextColor('text-black');
        break;
      case '/charts':
        setBgColor('bg-gray-500');
        setTextColor('text-white');
        break;
      case '/radio':
        setBgColor('bg-[#0324c8]');
        setTextColor('text-white');
        break;
      default:
        setBgColor('bg-blue-500');
        setTextColor('text-white');
        break;
    }
  }, [location.pathname]); // Re-run the effect whenever the pathname changes

  return (
    <nav className={`${bgColor} ${textColor} flex justify-between items-center px-8 py-3`}>
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-8">
        {/* Logo and SHAZAM */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">SHAZAM</h1>
        </div>

        {/* Navigation Links */}
        <Link to="/get-app" className={`font-bold hover:text-blue-200 ${location.pathname === '/get-app' ? 'underline' : ''}`}>
          GET THE APP
        </Link>
        <Link to="/concert" className={`font-bold hover:text-blue-200 ${location.pathname === '/concert' ? 'underline' : ''}`}>
          CONCERTS
        </Link>
        <Link to="/charts" className={`font-bold hover:text-blue-200 ${location.pathname === '/charts' ? 'underline' : ''}`}>
          CHARTS
        </Link>
        <Link to="/radio" className={`font-bold hover:text-blue-200 ${location.pathname === '/radio' ? 'underline' : ''}`}>
          RADIO SPINS
        </Link>
      </div>

      {/* Right Section: Search Icon and Connect Button */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <FaSearch className={`cursor-pointer hover:text-blue-200 ${textColor}`} />

        {/* Connect Button */}
        <button className={`bg-white text-blue-500 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 flex ${bgColor === 'bg-white' ? 'text-black' : 'text-blue-500'}`}>
          CONNECT
          <span className="text-blue-400 ml-1 flex items-center">
            <FaApple className="text-blue-400 mr-1" />
            Music
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

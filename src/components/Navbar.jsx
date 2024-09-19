import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg'; // White Shazam logo
import logoBlack from '../assets/shazamBlack.svg'; // Black Shazam logo
import { Link, useLocation, useNavigate } from 'react-router-dom'; // useNavigate for navigation
import { FaSearch, FaBars, FaTimes, FaApple } from 'react-icons/fa';
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Firebase auth imports
import { auth } from '../firebase'; // Import the auth instance
import { musicData } from '../tempDate'; // Import song data

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [bgColor, setBgColor] = useState(''); // Default background color
  const [textColor, setTextColor] = useState('text-white'); // Default text color
  const [logoImage, setLogoImage] = useState(logo); // Default logo (white)
  const [showSearch, setShowSearch] = useState(false); // Controls search input visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controls mobile menu visibility
  const [searchQuery, setSearchQuery] = useState(''); // State for storing search query
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track user's login status
  const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility
  const searchRef = useRef(null); // Ref to the search input

  useEffect(() => {
    // Listen for changes to user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserLoggedIn(true); // User is logged in
      } else {
        setIsUserLoggedIn(false); // User is logged out
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        // Only apply scroll logic on the homepage
        if (window.scrollY > 10) {
          setBgColor('bg-white');
          setTextColor('text-black');
          setLogoImage(logoBlack); // Switch to black logo when scrolling
        } else {
          setBgColor('bg-tansparent');
          setTextColor('text-white');
          setLogoImage(logo); // Default white logo
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    // Update navbar colors based on the current route
    switch (location.pathname) {
      case '/get-app':
      case '/concert':
        setBgColor('bg-white');
        setTextColor('text-black');
        setLogoImage(logoBlack);
        break;
      case '/charts':
        setBgColor('bg-gray-600');
        setTextColor('text-white');
        break;
      case '/radio':
        setBgColor('bg-[#0324c8]');
        setTextColor('text-white');
        setLogoImage(logo);
        break;
      default:
        setBgColor('bg-transparent');
        setTextColor('text-white');
        setLogoImage(logo);
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    // Function to handle clicks outside of the search input
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false); // Hide input if clicked outside
      }
    }

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit when Enter is pressed
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Find the song by name
    const foundSong = musicData.data.find((song) =>
      song.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (foundSong) {
      // Redirect to the song's detail page if found
      navigate(`/song/${foundSong.id}`);
    } else {
      alert('Song not found!');
    }

    setShowSearch(false); // Hide search bar after searching
  };

  // Handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login'); // Redirect to login page after logging out
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <nav className={`${bgColor} ${textColor} flex justify-between items-center px-8 py-3 fixed top-0 w-full z-50 transition-all duration-300 mb-6`}>
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-8">
        {/* Logo and SHAZAM */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Shazam Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold custom-font">SHAZAM</h1>
          </Link>
        </div>

        {/* Navigation Links - Hidden on smaller screens */}
        <div className="hidden md:flex items-center space-x-8">
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
      </div>

      {/* Right Section: Search Icon and Hamburger Menu for Mobile */}
      <div className="flex items-center space-x-4">
        {/* Search Icon or Input Field */}
        {showSearch ? (
          <form onSubmit={handleSearchSubmit} className="relative" ref={searchRef}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a song"
              className={`border-2 border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none text-black`}
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </form>
        ) : (
          <FaSearch
            className={`cursor-pointer hover:text-blue-200 ${textColor}`}
            onClick={() => setShowSearch(true)}
          />
        )}

        {/* Display CONNECT or SHAZAM based on login status */}
        {!isUserLoggedIn ? (
          <button onClick={() => navigate('/login')} className={`font-bold py-2 px-4 rounded-lg hidden md:flex ${bgColor === 'bg-white' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white text-blue-500 hover:bg-blue-100'}`}>
            CONNECT
            <span className="ml-1 flex items-center">
              <FaApple className={`mr-1 ${bgColor === 'bg-white' ? 'text-white' : 'text-blue-400'}`} />
              Music
            </span>
          </button>
        ) : (
          <div className="relative">
            {/* SHAZAM button with hover effect */}
            <button
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className={`font-bold py-2 px-4 rounded-lg hidden md:flex ${bgColor === 'bg-white' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white text-blue-500 hover:bg-blue-100'}`}
            >
              SHAZAM
              <span className="ml-1 flex items-center">
              <FaApple className={`mr-1 ${bgColor === 'bg-white' ? 'text-white' : 'text-blue-400'}`} />
              Music
            </span>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50"
              >
                <Link to="/wishlist" className=" text-black block px-4 py-2 hover:bg-gray-200">
                  Wishlist
                </Link>
                <button onClick={handleLogout} className=" text-black block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Hamburger Menu Icon or Close Icon - Visible on small screens */}
        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black text-white p-8 z-50 flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <img src={logoImage} alt="Shazam Logo" className="h-8 w-8" />
            <FaTimes className="text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          <Link to="/get-app" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Download Shazam
          </Link>
          <Link to="/apps" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Apps
          </Link>
          <Link to="/concert" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Concerts
          </Link>
          <Link to="/charts" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Charts
          </Link>
          <Link to="/radio" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Radio Spins
          </Link>
          <Link to="/help" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
            Help
          </Link>
          <div className="mt-auto">
            <p>Connect to Apple Music to play songs in full within Shazam.</p>
            {!isUserLoggedIn ? (
              <button
                onClick={() => navigate('/login')}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg mt-4 w-full flex justify-center items-center"
              >
                CONNECT <FaApple className="ml-2" /> Music
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-gray-800 text-white py-2 px-4 rounded-lg mt-4 w-full flex justify-center items-center"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

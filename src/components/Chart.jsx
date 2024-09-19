import React, { useState } from "react";
import playBtn from "../assets/playBtn.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { musicData, countryData } from "../tempDate"; // Assuming data is stored here
import PlayAudio from "./MusicPlayer"; // Assuming you have a PlayAudio component for playing songs
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";

import { useAuth } from "../hooks/useAuth"; // Custom hook to get auth status


import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";

const Chart = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    countryData.countries[0].name
  );
  const [selectedCity, setSelectedCity] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);
  const [cities, setCities] = useState(countryData.countries[0].cities);
  const [filteredSongs, setFilteredSongs] = useState(musicData.data);
  const [selectedSong, setSelectedSong] = useState(musicData.data[0]);
  const [visibleSongs, setVisibleSongs] = useState(50);
  const [playingSong, setPlayingSong] = useState(null); // Track the current playing song


  const isAuthenticated = useAuth(); // Hook to check if the user is logged in
  


  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const isInWishlist = (song) => wishlist.some(item => item.id === song.id);

  // Function to toggle wishlist
  const handleWishlistToggle = (song) => {
    if (!isAuthenticated) {
      // Redirect to login if not logged in
      navigate("/login");
      return;
    }
    if (isInWishlist(song)) {
      dispatch(removeFromWishlist(song));
    } else {
      dispatch(addToWishlist(song));
    }
  };

  const navigate = useNavigate();
  // Function to handle country selection
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);

    // Find the selected country and its cities
    const selectedCountryData = countryData.countries.find(
      (c) => c.name === country
    );
    setCities(selectedCountryData ? selectedCountryData.cities : []);
    setSelectedCity("");

    // Update songs based on the new country selection
    fetchSongs(selectedCountryData ? selectedCountryData.listid : "");
  };

  // Function to fetch songs based on selected country or city
  const fetchSongs = (listid) => {
    // Filter songs locally based on listid
    const filtered = listid
      ? musicData.data.filter((song) => song.attributes.listid === listid)
      : musicData.data;
    setFilteredSongs(filtered);
  };

  // Function to handle city selection
  const handleCityChange = (city) => {
    setSelectedCity(city);
    setIsCitiesDropdownOpen(false);

    // Update songs based on the new city selection
    fetchSongs(city.listid);
  };

  // Function to load more songs
  const handleShowMore = () => {
    setVisibleSongs((prev) => prev + 50); // Load 50 more songs on each click
  };

  // Handle play/pause functionality
  const handlePlayPause = (song) => {
    if (!song.attributes.previews || song.attributes.previews.length === 0) {
      console.log("No audio available for this song");
      return;
    }
    if (playingSong?.id === song.id) {
      setPlayingSong(null); // Pause if the same song is clicked
    } else {
      setPlayingSong(song); // Play the clicked song
      setSelectedSong(song); // Show selected song on the right side
    }
  };

  const nextSong = () => {
    const currentIndex = filteredSongs.findIndex(
      (song) => song.id === playingSong?.id
    );
    if (currentIndex < filteredSongs.length - 1) {
      handlePlayPause(filteredSongs[currentIndex + 1]);
    }
  };

  const prevSong = () => {
    const currentIndex = filteredSongs.findIndex(
      (song) => song.id === playingSong?.id
    );
    if (currentIndex > 0) {
      handlePlayPause(filteredSongs[currentIndex - 1]);
    }
  };

  const handleSongClick = (songId) => {
    if (!isAuthenticated) {
      // Redirect to login if not logged in
      navigate("/login");
      return;
    }
    navigate(`/song/${songId}`); // Redirect to the single song page with the song ID
  };

  return (
    <div>
      {/* Charts Section */}
      <div className="relative w-full h-90 bg-gray-700 text-white p-4 pt-20">
        {/* Country Dropdown */}
        <div className="relative inline-block ml-10">
          <button
            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
            className="px-24 py-2 bg-gray-600 text-white rounded-md flex items-center space-x-2"
          >
            <span>{selectedCountry}</span>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
          {isCountryDropdownOpen && (
            <div className="absolute top-full mt-1 bg-white text-black rounded shadow-lg w-full max-h-40 overflow-y-auto">
              {countryData.countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => handleCountryChange(country.name)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  {country.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Heading */}
        <div className="mt-6 flex ml-10">
          <img src={playBtn} alt="Play Button" />
          <div className="ml-4">
            <h1 className="text-2xl">{selectedCountry}</h1>
            <h2 className="text-4xl font-bold">Top 200</h2>
            <p className="mt-2">
              The most Shazamed tracks in {selectedCountry} this week
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-20 ml-10 flex space-x-4">
          <button className="px-4 py-2 bg-white text-black font-bold rounded-full">
            TOP 200
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white font-bold rounded-full">
            DISCOVERY
          </button>
          <div className="relative inline-block">
            <button
              onClick={() => setIsCitiesDropdownOpen(!isCitiesDropdownOpen)}
              className="px-4 py-2 bg-gray-600 text-white font-bold rounded-full flex items-center space-x-2"
            >
              <span>{selectedCity ? selectedCity.name : "CITIES"}</span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            {isCitiesDropdownOpen && (
              <div className="absolute top-full mt-1 bg-white text-black rounded shadow-lg w-full max-h-40 overflow-y-auto">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityChange(city)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    {city.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between p-4 bg-gray-100">
    
        <div
          className="md:w-[60%] text-white p-10 rounded-lg relative h-auto md:h-[60vh] flex flex-col items-center justify-center mr-10"
          style={{
            backgroundColor: `#${selectedSong.attributes.artwork.bgColor}`,
          }}
        >
          <img
            src={selectedSong.attributes.artwork.url.replace(
              "{w}x{h}",
              "250x250"
            )}
            alt={selectedSong.attributes.albumName}
            className="rounded-lg mb-4 items-center mt-2 "
          />

          <div className="flex flex-col justify-between w-full h-full mt-4">
            <div className="flex flex-col items-start ">
              <h1 className="text-1xl ">
                #{musicData.data.indexOf(selectedSong) + 1} Top 200
              </h1>
              <h4 className="text-xl ">{selectedSong.attributes.name}</h4>
              <p className="text-sm ">{selectedSong.attributes.artistName}</p>
            </div>
            <button className=" flex bg-white hover:bg-blue-600 text-black px-2 py-1 md:px-4 md:py-2  text-sm md:text-base rounded-full absolute bottom-4 right-4 ">
              LISTEN ON
              <span className="ml-1 flex items-center">
                <FaApple className="mr-1 text-black text-lg md:text-base" />
                Music
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 md:pl-6 overflow max-h-screen mt-4">
          {filteredSongs.slice(0, visibleSongs).map((song, index) => (
            <div
              key={song.id}
              className="flex items-center mb-4 border-b border-gray-200 pb-4 cursor-pointer group"
              onClick={() => handlePlayPause(song)}
            >
              {/* Rank Number */}
              <div className="w-8 text-xl font-semibold">{index + 1}</div>

              {/* Song Info */}
              <div className="flex items-center">
                <div className="relative mr-4">
                  <img
                    src={song.attributes.artwork.url.replace(
                      "{w}x{h}",
                      "60x60"
                    )}
                    alt={song.attributes.albumName}
                    className="rounded-lg"
                  />
                  {/* <button className="absolute inset-0 flex justify-center items-center text-white text-2xl">
                    {playingSong?.id === song.id ? (
                      <ion-icon name="pause-circle-outline"></ion-icon>
                    ) : (
                      <ion-icon name="play-circle-outline"></ion-icon>
                    )}
                  </button> */}
                  <button
                    className="absolute inset-0 flex justify-center items-center rounded-full text-white text-2xl"
                    onClick={() => handlePlayPause(song)}
                  >
                    {playingSong?.id === song.id ? (
                      <FaPause size={20} />
                    ) : (
                      <FaPlay size={20} />
                    )}
                  </button>
                </div>
                <div onClick={() => handleSongClick(song.id)}>
                  <h3 className="text-sm text-black font-bold">
                    {song.attributes.name}
                  </h3>
                  <p className="text-xs text-black">
                    {song.attributes.artistName}
                  </p>
                </div>
              </div>

            
             {/* Heart Icon */}
             <div style={{ left: '500px' }} className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <button onClick={(e) => { e.stopPropagation(); handleWishlistToggle(song); }}>
    {isInWishlist(song) ? <FaHeart size={20} className="text-red-500" /> : <FaRegHeart size={20} className="text-gray-500" />}
  </button>
</div>

            </div>
          ))}
          {visibleSongs < filteredSongs.length && (
            <button
              onClick={handleShowMore}
              className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Show More
            </button>
          )}
        </div>
      </div>

      {/* Music Player */}
      {playingSong && (
        <PlayAudio song={playingSong} nextSong={nextSong} prevSong={prevSong} />
      )}
    </div>
  );
};

export default Chart;



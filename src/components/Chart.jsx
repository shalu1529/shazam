// import React, { useState } from "react";
// import { musicData } from "../tempDate"; // Assuming your data is in tempDate.js

// const Charts = () => {
//   // State to track the currently selected song
//   const [selectedSong, setSelectedSong] = useState(musicData.data[0]);
  
//   // State to control the number of songs displayed
//   const [visibleSongs, setVisibleSongs] = useState(50); // Initially display 50 songs

//   // Function to load more songs
//   const handleShowMore = () => {
//     setVisibleSongs((prev) => prev + 50); // Load 50 more songs on each click
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-100">
//       {/* Left section: List of songs */}
//       <div className="flex-1 md:pr-6 max-h-screen overflow-y-auto scrollbar-hide">
//         {musicData.data.slice(0, visibleSongs).map((song, index) => (
//           <div
//             key={song.id}
//             className="flex items-center mb-4 border-b border-gray-200 pb-4 cursor-pointer"
//             onClick={() => setSelectedSong(song)} // Update the selected song on click
//           >
//             {/* Rank Number */}
//             <div className="w-8 text-xl font-semibold">{index + 1}</div>

//             {/* Song Info */}
//             <div className="flex items-center">
//               {/* Song Artwork and Play Button */}
//               <div className="relative mr-4">
//                 <img
//                   src={song.attributes.artwork.url.replace("{w}x{h}", "60x60")}
//                   alt={song.attributes.albumName}
//                   className="rounded-lg"
//                 />
//                 <button className="absolute inset-0 flex justify-center items-center text-white text-2xl">
//                   <ion-icon name="play-circle-outline"></ion-icon>
//                 </button>
//               </div>

//               {/* Song Details */}
//               <div>
//                 <h3 className="text-sm font-bold">{song.attributes.name}</h3>
//                 <p className="text-xs text-gray-500">{song.attributes.artistName}</p>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* "Show More" Button */}
//         {visibleSongs < musicData.data.length && (
//           <button
//             onClick={handleShowMore}
//             className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
//           >
//             Show More
//           </button>
//         )}
//       </div>

//       {/* Right section: Featured song */}
//       <div className="md:w-[60%]  text-white p-10 rounded-lg relative h-auto md:h-[60vh] flex flex-col items-center justify-center mr-10"
//        style={{ backgroundColor: `#${selectedSong.attributes.artwork.bgColor}` }}>
//         <img
//           src={selectedSong.attributes.artwork.url.replace("{w}x{h}", "250x250")}
//           alt={selectedSong.attributes.albumName}
//           className="rounded-lg mb-4 items-center mt-2"
//         />
        
//         <div className="flex flex-col justify-between w-full h-full mt-4">
//           <div className="flex flex-col items-start ">
//             <h1 className="text-1xl ">
//               #{musicData.data.indexOf(selectedSong) + 1} Top 200
//             </h1>
//             <h4 className="text-xl ">{selectedSong.attributes.name}</h4>
//             <p className="text-sm ">{selectedSong.attributes.artistName}</p>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg absolute bottom-4 right-4">
//             LISTEN ON <ion-icon name="musical-notes-outline" className="ml-2"></ion-icon>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;





// import React, { useState } from 'react';
// import playBtn from '../assets/playBtn.svg'

// const RadioHeader = () => {
//   const [selectedCountry, setSelectedCountry] = useState('India');
//   const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
//   const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);

//   const countries = ['India', 'USA', 'UK'];
//   const cities = ['Mumbai', 'Delhi', 'Bangalore'];

//   return (
//     <div className="relative w-full h-80 bg-gray-700 text-white p-4">
//       {/* Country Dropdown */}
//       <div className="relative inline-block ml-10">
//         <button
//           onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
//           className="px-24 py-2 bg-gray-600 text-white rounded-md flex items-center space-x-2"
//         >
//           <span>{selectedCountry}</span>
//           <ion-icon name="chevron-down-outline"></ion-icon>
//         </button>
//         {isCountryDropdownOpen && (
//           <div className="absolute top-full mt-1 bg-white text-black rounded shadow-lg w-full">
//             {countries.map((country) => (
//               <button
//                 key={country}
//                 onClick={() => {
//                   setSelectedCountry(country);
//                   setIsCountryDropdownOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-200"
//               >
//                 {country}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Main Heading */}
//       <div className="mt-6 flex ml-10">
//       <img src={playBtn} alt ="" />
      
//         <div className='ml-4'>
//         <h1 className="text-2xl ">{selectedCountry}</h1>
//         <h2 className="text-4xl  font-bold">Top 200</h2>
//         <p className='mt-2'>The most Shazamed tracks in {selectedCountry} this week</p>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="mt-20 ml-10 flex space-x-4">
//         <button className="px-4 py-2 bg-white text-black font-bold rounded-full">TOP 200</button>
//         <button className="px-4 py-2 bg-gray-600 text-white font-bold rounded-full">DISCOVERY</button>
//         <div className="relative inline-block">
//           <button
//             onClick={() => setIsCitiesDropdownOpen(!isCitiesDropdownOpen)}
//             className="px-4 py-2 bg-gray-600 text-white font-bold rounded-full flex items-center space-x-2"
//           >
//             <span>CITIES</span>
//             <ion-icon name="chevron-down-outline"></ion-icon>
//           </button>
//           {isCitiesDropdownOpen && (
//             <div className="absolute top-full mt-1 bg-white text-black rounded shadow-lg w-full">
//               {cities.map((city) => (
//                 <button
//                   key={city}
//                   onClick={() => setIsCitiesDropdownOpen(false)}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-200"
//                 >
//                   {city}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Download Button */}
//       <div className="absolute bottom-4 right-4">
//         <button className="px-4 py-2 bg-white text-black font-bold rounded flex items-center space-x-2">
//           <span>DOWNLOAD CSV</span>
//           <ion-icon name="download-outline"></ion-icon>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RadioHeader;




import React, { useState } from "react";
import playBtn from "../assets/playBtn.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { musicData, countryData } from "../tempDate"; // Assuming data is stored here
import PlayAudio from "./MusicPlayer"; // Assuming you have a PlayAudio component for playing songs
import { useNavigate } from "react-router-dom";
import {  FaApple } from 'react-icons/fa';

const Chart = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData.countries[0].name);
  const [selectedCity, setSelectedCity] = useState("");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false);
  const [cities, setCities] = useState(countryData.countries[0].cities);
  const [filteredSongs, setFilteredSongs] = useState(musicData.data);
  const [selectedSong, setSelectedSong] = useState(musicData.data[0]);
  const [visibleSongs, setVisibleSongs] = useState(50);
  const [playingSong, setPlayingSong] = useState(null); // Track the current playing song
  

  const navigate = useNavigate();
  // Function to handle country selection
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);

    // Find the selected country and its cities
    const selectedCountryData = countryData.countries.find((c) => c.name === country);
    setCities(selectedCountryData ? selectedCountryData.cities : []);
    setSelectedCity("");

    // Update songs based on the new country selection
    fetchSongs(selectedCountryData ? selectedCountryData.listid : "");
  };

  // Function to fetch songs based on selected country or city
  const fetchSongs = (listid) => {
    // Filter songs locally based on listid
    const filtered = listid
      ? musicData.data.filter((song) => song.listid === listid)
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
    const currentIndex = filteredSongs.findIndex((song) => song.id === playingSong?.id);
    if (currentIndex < filteredSongs.length - 1) {
      handlePlayPause(filteredSongs[currentIndex + 1]);
    }
  };

  const prevSong = () => {
    const currentIndex = filteredSongs.findIndex((song) => song.id === playingSong?.id);
    if (currentIndex > 0) {
      handlePlayPause(filteredSongs[currentIndex - 1]);
    }
  };

  const handleSongClick = (songId) => {
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

        {/* Download Button */}
        <div className="absolute bottom-4 right-4">
          <button className="px-4 py-2 bg-white text-black font-bold rounded flex items-center space-x-2">
            <span>DOWNLOAD CSV</span>
            <ion-icon name="download-outline"></ion-icon>
          </button>
        </div>
      </div>







      <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-100">
        {/* Left section: List of songs */}
        <div className="flex-1 md:pr-6 max-h-screen overflow-y-auto scrollbar-hide">
          {filteredSongs.slice(0, visibleSongs).map((song, index) => (
            <div
              key={song.id}
              className="flex items-center mb-4 border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => handlePlayPause(song)}
            >
              {/* Rank Number */}
              <div className="w-8 text-xl font-semibold">{index + 1}</div>

              {/* Song Info */}
              <div className="flex items-center">
                <div className="relative mr-4">
                  <img
                    src={song.attributes.artwork.url.replace("{w}x{h}", "60x60")}
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
                  <h3 className="text-sm text-black font-bold">{song.attributes.name}</h3>
                  <p className="text-xs text-black">{song.attributes.artistName}</p>
                </div>
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

        <div
          className="md:w-[60%] text-white p-10 rounded-lg relative h-auto md:h-[60vh] flex flex-col items-center justify-center mr-10"
          style={{ backgroundColor: `#${selectedSong.attributes.artwork.bgColor}` }}
        >
          <img
            src={selectedSong.attributes.artwork.url.replace("{w}x{h}", "250x250")}
            alt={selectedSong.attributes.albumName}
            className="rounded-lg mb-4 items-center mt-2"
          />

          <div className="flex flex-col justify-between w-full h-full mt-4">
            <div className="flex flex-col items-start ">
              <h1 className="text-1xl ">
                #{musicData.data.indexOf(selectedSong) + 1} Top 200
              </h1>
              <h4 className="text-xl ">{selectedSong.attributes.name}</h4>
              <p className="text-sm ">{selectedSong.attributes.artistName}</p>
            </div>
            <button className=" flex bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-full absolute bottom-4 right-4 ">
              LISTEN ON 
              <span className="ml-1 flex items-center">
            <FaApple className="mr-1 text-black" />
            Music
          </span>
            </button>
          </div>
        </div>

      </div>





        {/* Music Player */}
        {playingSong && <PlayAudio song={playingSong} nextSong={nextSong} prevSong={prevSong} />}
      </div>
  
  );
};

export default Chart;



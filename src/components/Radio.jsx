// import React from 'react';
// import radioicn from '../assets/radioicon.svg'

// function Radio() {
//   return (
//     <div className="relative w-full h-screen text-white">
//       {/* Background Image with limited height (slightly more than half) */}
//       <div className="relative w-full h-[50vh]">
//         <img
//           src="https://assets.shazam.com/website/images/radiospins/spins.webp"
//           alt="Background"
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
//           style={{ objectFit: 'cover', overflow: 'hidden' }}
//         />

//         {/* Background Gradient Overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(to right, black 0%, black 2%, var(--color-gray-300) 0%, var(--color-gray-300) 100%)`,
//             zIndex: -1,
//             pointerEvents: 'none',
//           }}
//         ></div>
//       </div>

//       {/* The remaining part of the screen (solid background color) */}
//       <div className=" h-[40vh]"></div>

//       {/* Content Container (Centers the content vertically in the screen) */}
//       <div className="absolute top-0 w-full h-full flex flex-col items-center  space-y-8 pt-32">
//         {/* Title and Subtitle */}
//         <img src ={radioicn} alt ="radio"/>
//         <h1 className="text-5xl font-bold">Top 200 on Radio</h1>
//         <p className="text-lg">Tracks with the most airplay in the world this week</p>

//         {/* Buttons for Top 200 and Genres */}
//         <div className="flex space-x-4">
//           <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
//             TOP 200
//           </button>
//           <button className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold">
//             GENRES <span className="ml-2">&#9662;</span> {/* Down arrow */}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Radio;


// import React from 'react';
// import logo from '../assets/logo.svg'


// function Radio() {

  

//   return (
//     <div className="relative w-full h-screen text-white">
//       {/* Background Image */}
//       <div className="relative w-full h-[50vh]">
//         <img
//           src="https://assets.shazam.com/website/images/radiospins/spins.webp"
//           alt="Background"
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
//           style={{ objectFit: 'cover', overflow: 'hidden' }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="absolute top-0 w-full h-full flex flex-col items-center space-y-6 pt-20">
//         {/* Shazam Icon (Direct SVG) */}
//         <img
//         src ={logo}
//           className="w-[72px] h-[72px] md:w-[64px] md:h-[64px] z-10"
          
        
//         />
          
//         {/* Title and Subtitle */}
//         <h1 className="text-5xl ">Top 200 on Radio</h1>
//         <p className="text-lg">Tracks with the most airplay in the world this week</p>

//         {/* Buttons for Top 200 and Genres */}
//         <div className="flex space-x-4">
//           <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
//             TOP 200
//           </button>
//           <button className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold">
//             GENRES <span className="ml-2">&#9662;</span> {/* Down arrow */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Radio;




import React, { useState } from "react";
import { musicData } from "../tempDate"; // Import your music data
import logo from '../assets/logo.svg' // Adjust the path according to your project

const Radio = () => {
  // State to track the currently selected song
  const [selectedSong, setSelectedSong] = useState(musicData.data[0]);

  // State to track the selected genre
  const [selectedGenre, setSelectedGenre] = useState("");

  // State to control the number of songs displayed per genre
  const [visibleSongs, setVisibleSongs] = useState(50); // Initially display 50 songs per genre

  // State to control the genre dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Extract unique genres from music data
  const uniqueGenres = [
    ...new Set(
      musicData.data.flatMap((song) => song.attributes.genreNames)
    ),
  ];

  // Filter songs based on selected genre
  const filteredSongs = selectedGenre
    ? musicData.data.filter((song) =>
        song.attributes.genreNames.includes(selectedGenre)
      )
    : musicData.data;

  // Function to load more songs
  const handleShowMore = () => {
    setVisibleSongs((prev) => prev + 50); // Load 50 more songs on each click
  };

  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div className="relative w-full h-[50vh]">
        <img
          src="https://assets.shazam.com/website/images/radiospins/spins.webp"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none"
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>

      {/* Content Container */}
      <div className="absolute top-0 w-full h-full flex flex-col items-center space-y-6 pt-20">
        {/* Shazam Icon */}
        <img src={logo} className="w-[72px] h-[72px] md:w-[64px] md:h-[64px] z-10" />

        {/* Title and Subtitle */}
        <h1 className="text-5xl">Top 200 on Radio</h1>
        <p className="text-lg">Tracks with the most airplay in the world this week</p>

        {/* Buttons for Top 200 and Genres */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
            TOP 200
          </button>

          {/* Genre Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold flex items-center"
            >
              GENRES <span className="ml-2">&#9662;</span> {/* Down arrow */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 bg-white text-black rounded-md shadow-lg z-20 w-full">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    setSelectedGenre("");
                    setIsDropdownOpen(false);
                  }}
                >
                  All Genres
                </button>
                {uniqueGenres.map((genre) => (
                  <button
                    key={genre}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setSelectedGenre(genre);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with Songs List */}
      <div className="flex flex-col md:flex-row justify-between p-4 bg-gray-100">
        {/* Left Section */}
        <div className="flex-1 md:pr-6 max-h-screen overflow-y-auto scrollbar-hide">
          {/* Songs List Filtered by Selected Genre */}
          {filteredSongs.slice(0, visibleSongs).map((song, index) => (
            <div
              key={song.id}
              className="flex items-center mb-4 border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => setSelectedSong(song)} // Update the selected song on click
            >
              {/* Rank Number */}
              <div className="w-8 text-xl font-semibold text-black">{index + 1}</div>

              {/* Song Info */}
              <div className="flex items-center">
                {/* Song Artwork and Play Button */}
                <div className="relative mr-4">
                  <img
                    src={song.attributes.artwork.url.replace("{w}x{h}", "60x60")}
                    alt={song.attributes.albumName}
                    className="rounded-lg"
                  />
                  <button className="absolute inset-0 flex justify-center items-center text-white text-2xl">
                    <ion-icon name="play-circle-outline"></ion-icon>
                  </button>
                </div>

                {/* Song Details */}
                <div>
                  <h3 className="text-sm text-black font-bold">{song.attributes.name}</h3>
                  <p className="text-xs text-black">{song.attributes.artistName}</p>
                </div>
              </div>
            </div>
          ))}

          {/* "Show More" Button */}
          {visibleSongs < filteredSongs.length && (
            <button
              onClick={handleShowMore}
              className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Show More
            </button>
          )}
        </div>

        {/* Right Section: Featured Song */}
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
                #{filteredSongs.indexOf(selectedSong) + 1} Top 200
              </h1>
              <h4 className="text-xl ">{selectedSong.attributes.name}</h4>
              <p className="text-sm ">{selectedSong.attributes.artistName}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg absolute bottom-4 right-4">
              LISTEN ON <ion-icon name="musical-notes-outline" className="ml-2"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radio;

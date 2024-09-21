import React, { useState, useEffect } from "react";
import { FaPlay, FaPause,FaApple } from "react-icons/fa";
import { musicData } from "../tempDate"; 
import logo from "../assets/logo.svg"; 
import PlayAudio from "./MusicPlayer";
import { useNavigate } from "react-router-dom"; // Import useNavigate


import { useAuth } from "../hooks/useAuth"; // Custom hook to get auth status


import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../redux/wishlistSlice";




const Radio = () => {

  const isAuthenticated = useAuth();


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




  const [selectedSong, setSelectedSong] = useState(musicData.data[0]); // Default song for the display section
  const [playingSong, setPlayingSong] = useState(null); // Handles currently playing song
  const [selectedGenre, setSelectedGenre] = useState("");
  const [visibleSongs, setVisibleSongs] = useState(50);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate(); // Use navigate to programmatically redirect

  const uniqueGenres = [
    ...new Set(musicData.data.flatMap((song) => song.attributes.genreNames)),
  ];

  const filteredSongs = selectedGenre
    ? musicData.data.filter((song) =>
        song.attributes.genreNames.includes(selectedGenre)
      )
    : musicData.data;

  const handleShowMore = () => {
    setVisibleSongs((prev) => prev + 50);
  };

  const handlePlayPause = (song) => {
    if (playingSong?.id === song.id) {
      setPlayingSong(null); // Pause song if clicked again
    } else {
      setSelectedSong(song); // Set new song for display
      setPlayingSong(song);  // Start playing the selected song
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

  // New function for handling navigation to the single song page
  const handleSongClick = (songId) => {

    if (!isAuthenticated) {
      // Redirect to login if not logged in
      navigate("/login");
      return;
    }
    navigate(`/song/${songId}`); // Redirect to the single song page with the song ID
  };

  return (
    <div className="relative w-full h-90 text-white">
      <div className="relative w-full h-[65vh]">
        <img
          src="https://assets.shazam.com/website/images/radiospins/spins.webp"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      </div>

      <div className="absolute top-0 w-full h-full flex flex-col items-center space-y-6 pt-20">
        <img src={logo} className="w-[72px] h-[72px]" alt="Logo" />
        <h1 className="text-3xl md:text-5xl">Top 200 on Radio</h1>
        <p className="text-lg">
          Tracks with the most airplay in the world this week
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-black bg-white rounded-full font-bold">
            TOP 200
          </button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 text-white bg-blue-600 rounded-full font-bold"
            >
              GENRES <span className="ml-2">&#9662;</span>
            </button>
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

      <div className="flex flex-col md:flex-row-reverse justify-between p-4 ">
          {/* This section should always show the selected or default song */}
          <div
          className="md:w-[60%] text-white p-10 rounded-lg relative h-auto md:h-[60vh] flex flex-col items-center justify-center mr-10 mt-10"
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
            className="rounded-lg  mt-8"
          />
          <div className="flex flex-col justify-between w-full h-full mt-8">
            <div className="flex flex-col items-start">
              <h1 className="text-1xl">
                #{filteredSongs.indexOf(selectedSong) + 1} Top 200
              </h1>
              <h4 className="text-xl ">{selectedSong.attributes.name}</h4>
              <p className="text-sm ">{selectedSong.attributes.artistName}</p>
            </div>
            

            <button className=" flex bg-white hover:bg-blue-600 text-black px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-full absolute bottom-4 right-4 ">
              LISTEN ON 
              <span className="ml-1 flex items-center">
            <FaApple className="mr-1 text-black text-lg md:text-base" />
            Music
          </span>
            </button>
          </div>
        </div>
        <div className="flex-1 md:pr-6 max-h-screen overflow scrollbar-hide mt-4">
          {filteredSongs.slice(0, visibleSongs).map((song, index) => (
            <div
              key={song.id}
              className="flex items-center mb-4 border-b border-gray-200 pb-4 cursor-pointer group"
            >
              <div className="w-8 text-xl font-semibold text-black">
                {index + 1}
              </div>
              <div className="flex items-center">
                <div className="relative mr-4">
                  <img
                    src={song.attributes.artwork.url.replace("{w}x{h}", "70x70")}
                    alt={song.attributes.albumName}
                    className="rounded-lg"
                  />
                  <button
                    className="absolute inset-0 flex justify-center items-center rounded-full bg-black-rgba text-2xl"
                    onClick={() => handlePlayPause(song)}
                  >
                    {playingSong?.id === song.id ? (
                      <FaPause size={20} />
                    ) : (
                      <FaPlay size={20} />
                    )}
                  </button>
                </div>

                {/* Clicking on the song name will navigate to the single song page */}
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

      {/* PlayAudio component should render only when a song is playing */}
      {playingSong && (
        <PlayAudio song={playingSong} nextSong={nextSong} prevSong={prevSong} />
      )}
    </div>
  );
};

export default Radio;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromWishlist } from "../redux/wishlistSlice";
// import { FaHeart } from "react-icons/fa";

// const Playlist = () => {
//   const wishlist = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();

//   return (
//     <div className="p-6"> {/* Added padding to bring the content down */}
//       <h2 className="text-3xl font-bold mb-6">Playlist</h2> 
      
//       {wishlist.length === 0 ? (
//         <p className="text-gray-500">No songs in playlist</p> 
//       ) : (
//         <ul className="space-y-6"> {/* Added vertical spacing between list items */}
//           {wishlist.map((song) => (
//             <li key={song.id} className="flex items-center justify-between border-b border-gray-200 pb-4"> {/* Added border and padding */}
//               <div className="flex items-center space-x-4"> {/* Space between image and song details */}
//                 <img
//                   src={song.attributes.artwork.url.replace("{w}x{h}", "70x70")}
//                   alt={song.attributes.albumName}
//                   className="rounded-lg w-16 h-16"  /* Sized image to 70x70px */
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{song.attributes.name}</h3> {/* Styled song name */}
//                   <p className="text-sm text-gray-600">{song.attributes.artistName}</p> {/* Styled artist name */}
//                 </div>
//               </div>
//               <button
//                 onClick={() => dispatch(removeFromWishlist(song))}
//                 className="text-red-500 hover:text-red-600"  /* Added hover effect */
//               >
//                 <FaHeart className="w-6 h-6" /> {/* Sized heart icon */}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Playlist;



import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { FaHeart, FaPlay, FaPause } from "react-icons/fa";
import PlayAudio from "./MusicPlayer"; // Assuming PlayAudio is your audio player component

const Playlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  
  const [playingSong, setPlayingSong] = useState(null); // State for currently playing song
  
  const handlePlayPause = (song) => {
    if (playingSong?.id === song.id) {
      setPlayingSong(null); // Pause if the same song is clicked
    } else {
      setPlayingSong(song); // Play the clicked song
    }
  };
  
  const nextSong = () => {
    const currentIndex = wishlist.findIndex(song => song.id === playingSong?.id);
    if (currentIndex < wishlist.length - 1) {
      setPlayingSong(wishlist[currentIndex + 1]); // Play next song
    }
  };

  const prevSong = () => {
    const currentIndex = wishlist.findIndex(song => song.id === playingSong?.id);
    if (currentIndex > 0) {
      setPlayingSong(wishlist[currentIndex - 1]); // Play previous song
    }
  };

  return (
    <div className="p-6"> {/* Added padding to bring the content down */}
      <h2 className="text-3xl font-bold mb-6">Playlist</h2> 
      
      {wishlist.length === 0 ? (
        <p className="text-gray-500">No songs in playlist</p> 
      ) : (
        <ul className="space-y-6"> {/* Added vertical spacing between list items */}
          {wishlist.map((song) => (
            <li 
              key={song.id} 
              className="flex items-center justify-between border-b border-gray-200 pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={song.attributes.artwork.url.replace("{w}x{h}", "70x70")}
                  alt={song.attributes.albumName}
                  className="rounded-lg w-16 h-16"
                />
                <div>
                  <h3 className="text-xl font-semibold">{song.attributes.name}</h3>
                  <p className="text-sm text-gray-600">{song.attributes.artistName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={() => handlePlayPause(song)}>
                  {playingSong?.id === song.id ? (
                    <FaPause className="text-black w-6 h-6" />
                  ) : (
                    <FaPlay className="text-black w-6 h-6" />
                  )}
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(song))}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaHeart className="w-6 h-6" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Music Player */}
      {playingSong && (
        <PlayAudio song={playingSong} nextSong={nextSong} prevSong={prevSong} />
      )}
    </div>
  );
};

export default Playlist;

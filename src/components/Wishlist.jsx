import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="p-6"> {/* Added padding to bring the content down */}
      <h2 className="text-3xl font-bold mb-6">Wishlist</h2> 
      
      {wishlist.length === 0 ? (
        <p className="text-gray-500">No songs in wishlist</p> 
      ) : (
        <ul className="space-y-6"> {/* Added vertical spacing between list items */}
          {wishlist.map((song) => (
            <li key={song.id} className="flex items-center justify-between border-b border-gray-200 pb-4"> {/* Added border and padding */}
              <div className="flex items-center space-x-4"> {/* Space between image and song details */}
                <img
                  src={song.attributes.artwork.url.replace("{w}x{h}", "70x70")}
                  alt={song.attributes.albumName}
                  className="rounded-lg w-16 h-16"  /* Sized image to 70x70px */
                />
                <div>
                  <h3 className="text-xl font-semibold">{song.attributes.name}</h3> {/* Styled song name */}
                  <p className="text-sm text-gray-600">{song.attributes.artistName}</p> {/* Styled artist name */}
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromWishlist(song))}
                className="text-red-500 hover:text-red-600"  /* Added hover effect */
              >
                <FaHeart className="w-6 h-6" /> {/* Sized heart icon */}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

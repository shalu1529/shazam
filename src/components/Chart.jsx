import React, { useState, useEffect } from 'react';

const Chart = () => {
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'IN', name: 'India' },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const fetchSongsByCountry = async () => {
      const data = await fetchTopSongs(); // Modify API call to fetch based on `selectedCountry`
      setSongs(data.songs);
    };
    fetchSongsByCountry();
  }, [selectedCountry]);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div>
      <div className="country-selector">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="bg-gray-200 p-2 rounded-md"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} onClick={() => playSong(song)} className="song-item cursor-pointer">
            <img src={song.album_art_url} alt={song.title} className="w-12 h-12" />
            <div>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="music-player fixed bottom-0 w-full bg-gray-800 p-4">
        {currentSong ? (
          <div className="flex items-center">
            <img src={currentSong.album_art_url} alt={currentSong.title} className="w-16 h-16" />
            <div className="ml-4">
              <h3>{currentSong.title}</h3>
              <p>{currentSong.artist}</p>
            </div>
            <audio controls src={currentSong.preview_url} className="ml-auto">
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <p>No song is playing</p>
        )}
      </div>
    </div>
  );
};

export default Chart;

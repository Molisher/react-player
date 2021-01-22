import React, { useState, useRef } from "react";

import { Song, Player, Library, NavBar } from "./components";

import data from "./utils";

import { GlobalStyle } from "./globalStyles";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const audioRef = useRef(null);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animation: 0,
  });

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animation,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <>
      <GlobalStyle />
      <div
        className="App"
        style={{
          marginLeft: libraryOpen ? "15%" : "",
          transition: "all 0.5s ease",
        }}
      >
        <NavBar libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
        <Song currentSong={currentSong} />
        <Player
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          songs={songs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryOpen={libraryOpen}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndHandler}
        />
      </div>
    </>
  );
}

export default App;

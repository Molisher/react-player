import React from "react";

import {
  LibrarySongContainer,
  LibrarySongDescription,
} from "./styles/LibrarySong";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSong = songs.map((outerSong) => {
      if (outerSong.id === song.id) {
        return {
          ...outerSong,
          active: true,
        };
      } else {
        return {
          ...outerSong,
          active: false,
        };
      }
    });
    setSongs(newSong);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <LibrarySongContainer onClick={songSelectHandler} active={song.active}>
      <img src={song.cover} alt={song.name} />
      <LibrarySongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </LibrarySongDescription>
    </LibrarySongContainer>
  );
};

export default LibrarySong;

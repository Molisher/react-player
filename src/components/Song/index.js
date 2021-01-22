import React from "react";

import { SongContainer } from "./styles/Song";

const Song = ({ currentSong }) => {
  return (
    <SongContainer>
      <img src={currentSong.cover} alt="Song cover" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongContainer>
  );
};

export default Song;

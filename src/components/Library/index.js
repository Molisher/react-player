import React from "react";

import { default as LibrarySong } from "../LibrarySong";

import { LibraryContainer, LibraryList } from "./styles/Library";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryOpen,
}) => {
  return (
    <LibraryContainer libraryOpen={libraryOpen}>
      <h2>Library</h2>
      <LibraryList>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            songs={songs}
          />
        ))}
      </LibraryList>
    </LibraryContainer>
  );
};

export default Library;

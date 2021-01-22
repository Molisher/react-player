import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayerContainer,
  TimeControl,
  PlayControls,
  InputTrack,
  InputTrackAnimate,
} from "./styles/Player";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  currentSong,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map((outerSong) => {
      if (outerSong.id === nextPrev.id) {
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
  };
  const playSongHandle = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "back") {
      if (currentIndex - 1 < 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (isPlaying) audioRef.current.play();
  };
  return (
    <PlayerContainer>
      <TimeControl>
        <p>{getTime(songInfo.currentTime)}</p>
        <InputTrack color={currentSong.color}>
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <InputTrackAnimate time={songInfo.animation} />
        </InputTrack>

        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </TimeControl>
      <PlayControls>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("back")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandle}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("forward")}
        />
      </PlayControls>
    </PlayerContainer>
  );
};

export default Player;

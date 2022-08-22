import React, { useContext } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import { Songs } from "../Context";

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrevious = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div>
      <H5AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        volume={0.5}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
}

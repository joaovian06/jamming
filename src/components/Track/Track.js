import React from 'react';

function Track({track}) {
  return (
    <div>
      <h3>{track.songName}</h3>
      <p>{track.artist}</p>
      <span>{track.album}</span>
    </div>
  );
};

export default Track;
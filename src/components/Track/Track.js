import React from 'react';
import './Track.scss'

function Track({track}) {
  return (
    <div className='Track-container'>
      <h3 className='Track-name'>{track.songName}</h3>
      <div className='Track-info'>
        <h4>{track.album} | {track.artist}</h4>
      </div>
      <span>+</span>
    </div>
  );
};

export default Track;
import React from 'react';
import './Track.scss'

function Track({track}) {
  return (
    <div className='track-container'>
      <h3 className='track-name'>{track.songName}</h3>
      <div className='track-info'>
        <h4>{track.album} | {track.artist}</h4>
      </div>
      <span>+</span>
    </div>
  );
};

export default Track;
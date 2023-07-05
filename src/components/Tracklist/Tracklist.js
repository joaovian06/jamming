import React from 'react';
import Track from '../Track/Track'
import './Tracklist.scss'

const Tracklist = ({tracks}) => {
  return (
    <div>
      <h2 className='title'>Results</h2>
      {tracks.map((track) => {
        return <Track track={track} key={track.id}></Track>
      })}
    </div>
  );
};

export default Tracklist;
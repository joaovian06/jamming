import React from 'react';
import Track from '../Track/Track'

const Tracklist = ({tracks}) => {
  return (
    <div>
      {tracks.map((track) => {
        return <Track track={track} key={track.id}></Track>
      })}
    </div>
  );
};

export default Tracklist;
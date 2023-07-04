import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.scss'

function Playlist() {
  return(
    <div className="PlaylistContent">
      <input placeholder='playlist name'/>
      <Tracklist></Tracklist>
      <button>Save to Spotify!</button>
    </div>
  );
};

export default Playlist;
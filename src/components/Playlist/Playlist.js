import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.scss'

function Playlist() {
  return(
    <div className="PlaylistContent">
      <input className="Playlist-input" placeholder='playlist name'/>
      <Tracklist></Tracklist>
      <button className="Playlist-save-button">Save to Spotify!</button>
    </div>
  );
};

export default Playlist;
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './Playlist.scss'

function Playlist({playlist}) {
  return(
    <div className="PlaylistContent">
      <input className="Playlist-input" placeholder='playlist name' value={playlist.name}/>
      <Tracklist tracks={playlist.tracks}></Tracklist>
      <button className="Playlist-save-button">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
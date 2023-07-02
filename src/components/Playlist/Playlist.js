import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist() {
  return(
    <div>
      <input placeholder='playlist name'/>
      <Tracklist></Tracklist>
      <button>Save to Spotify!</button>
    </div>
  );
};

export default Playlist;
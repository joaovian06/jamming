import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults() {
  return(
    <div>
      <input placeholder='Search for songs'/>
      <Tracklist></Tracklist>
    </div>
  );
};

export default SearchResults;
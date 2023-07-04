import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.scss'

function SearchResults() {
  return(
    <div className="searchResultsContainer">
      <Tracklist></Tracklist>
    </div>
  );
};

export default SearchResults;
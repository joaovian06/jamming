import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import './SearchResults.scss'

const SearchResults = ({tracks}) => {
  return(
    <div className="searchResultsContainer">
      <h2 className='title'>Results</h2>
      <Tracklist tracks={tracks}></Tracklist>
    </div>
  );
};

export default SearchResults;
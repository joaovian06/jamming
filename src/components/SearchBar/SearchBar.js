import React from "react";
import styles from './SearchBar.scss'

function SearchBar() {
  return(
    <div className='searchContainer'>
      <input className='searchInput' placeholder='Search for songs...'/>
      <button className="searchButton">Search</button>
    </div>
  );
};

export default SearchBar;
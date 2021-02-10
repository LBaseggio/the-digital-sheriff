import React from "react";
import "../SearchBar/SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={props.searchSuspect}
        placeholder="Search suspect by name."
      />
    </div>
  );
}
export default SearchBar;

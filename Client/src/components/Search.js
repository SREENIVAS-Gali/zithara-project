import React from "react";

import { CiSearch } from "react-icons/ci";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by Name/Location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searcInputEl"
      />
      <CiSearch/>
    </div>
  );
};
export default Search;

import React from "react";

const Search = ({ search, setSearch }) => {

  return (
    <div>
      <input
        placeholder="SearchBar"
        type="Text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;

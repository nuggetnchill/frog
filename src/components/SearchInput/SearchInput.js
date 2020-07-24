import React from "react";

import "./SearchInput.css";

const SearchInput = ({ searchfield, searchChange }) => {
  return (
    <div className='container'>
      <input
        className='search-input'
        type='search'
        placeholder='Type your name here...'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchInput;

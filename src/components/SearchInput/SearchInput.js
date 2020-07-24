import React from "react";

import "./SearchInput.css";

const SearchInput = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 flex justify-center container'>
      <input
        className='pa3 ba bg-washed-blue search-input'
        type='search'
        placeholder='Type your name here...'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchInput;

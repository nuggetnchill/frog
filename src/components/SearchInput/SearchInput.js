import React from 'react';

import './SearchInput.css';

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  onChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return (
      <div className='container'>
        <input
          className='search-bar'
          type='search'
          placeholder='Type your name here...'
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchInput;

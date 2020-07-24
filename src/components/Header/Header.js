import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='header'>
          What Frog are you?{' '}
          <span role='img' aria-label='frog'>
            🐸
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

import "./Header.css";

const Header = (props) => {
  return (
    <div className='container'>
      <h1 className='f1 purple flex justify-center header'>
        What Frog Are You?{" "}
        <span role='img' aria-label='frog'>
          🐸
        </span>
      </h1>
      {props.children}
    </div>
  );
};

export default Header;

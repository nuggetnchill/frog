import React from "react";

import "./FrogCard.css";

const FrogCard = ({ name }) => {
  // const src = `//cdn.jsdelivr.net/(frog images folder/${this,props.name}.jpeg`; for the IMAGE

  return (
    <div className='FrogCard'>
      {/* <img alt={`pic of frog ${name}`}>`image of frog ${name}` </img> */}
      <h2 className='frog-name'>{name}</h2>
    </div>
  );
};

export default FrogCard;

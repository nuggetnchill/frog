import React from "react";

import "./FrogCard.css";

const FrogCard = ({ name }) => {
  return (
    <div className='FrogCard'>
      <img
        alt={`pic of frog ${name}`}
        src={require(`../../assets/frog-pics/${name}.jpg`)}
      />
      <h2 className='frog-name'>{name}</h2>
    </div>
  );
};

export default FrogCard;

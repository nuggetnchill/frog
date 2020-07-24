import React from "react";

import "./FrogCard.css";

const FrogCard = ({ name }) => {
  return (
    <div className=' br2 pa3 ma2 grow bw2 shadow-3 frog-card'>
      <img
        className='br2'
        alt={`pic of frog ${name}`}
        src={require(`../../assets/frog-pics/${name}.jpg`)}
      />
      <h2 className='flex justify-center washed-yellow frog-name'>{name}</h2>
    </div>
  );
};

export default FrogCard;

import React from "react";

import FrogCard from "../FrogCard/FrogCard";

import "./FrogList.css";

const FrogList = ({ frogs }) => {
  return (
    <div className='container'>
      <div className='frog-list'>
        {frogs.map((user, i) => {
          return <FrogCard key={i} name={frogs[i].name} />;
        })}
      </div>
    </div>
  );
};

export default FrogList;

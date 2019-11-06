import React from 'react';

import './characterCard.scss';

const CharacterCard = ({ img, name }) => {
  return (
    <div className='characterCard'>
      <img width='100px' src={img} alt={name} />
      <div className='characterName'> {name} </div>
    </div>
  );
};

export default CharacterCard;

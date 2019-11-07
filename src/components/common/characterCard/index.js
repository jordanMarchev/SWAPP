import React from 'react';

import './characterCard.scss';

const CharacterCard = ({ id, img, name, history, nav }) => {
  const onOpenCharacter = () => {
    history.push(`/${nav}/${id}`);
  };
  return (
    <div className='characterCard' onClick={() => onOpenCharacter()}>
      <img src={img} alt={name} />
      <div className='characterName'> {name} </div>
    </div>
  );
};

export default CharacterCard;

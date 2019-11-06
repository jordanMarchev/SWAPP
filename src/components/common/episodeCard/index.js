import React from 'react';

import './episodeCard.scss';

const EpisodeCard = ({ title, p, img }) => {
  return (
    <div className='episodeCard'>
      <div className='episodeImg'>
        <img width={'202px'} src={img} />
      </div>
      <div className='episodeInfo'>
        <div className='episodeContext'>
          <h3 className='episodeTitle'>{title}</h3>
          <p className='episodeParagraph'>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;

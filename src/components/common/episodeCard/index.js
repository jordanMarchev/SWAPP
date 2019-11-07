import React from 'react';

import './episodeCard.scss';

const EpisodeCard = ({ id, title, p, img, history }) => {
  const onOpenEpisode = () => {
    history.push(`/episodes/${id}`);
  };
  return (
    <div className='episodeCard' onClick={() => onOpenEpisode()}>
      <div className='episodeImg'>
        <img width={'202px'} src={img} alt={title} />
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

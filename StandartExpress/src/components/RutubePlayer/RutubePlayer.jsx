import React from 'react';
import './RutubePlayer.scss';

function RutubePlayer() {
  const videoId = 'ead5264b0f2af5211dd588eebe9c1374';
  
  return (
    <>
    <div className="rutube-player-container">
      <iframe 
        src={`https://rutube.ru/play/embed/${videoId}`}
        allowFullScreen
        title="Rutube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
    </>
  );
};

export default RutubePlayer;
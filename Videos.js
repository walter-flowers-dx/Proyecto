import React from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=LU1NQJNFSIM';

  return (
    <div>
      <h1>VIDEOS</h1>
      <ReactPlayer
        url={youtubeVideoUrl}
        width="640px"
        height="360px"
        controls={true}
      />
    </div>
  );
};

export default Videos;

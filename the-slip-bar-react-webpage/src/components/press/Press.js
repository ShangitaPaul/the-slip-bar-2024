import React from 'react';
import '../../styles/Press.css';

const Press = () => {
  return (
    <div>
      <h1>Press Page</h1>
      <div className="video-container">
        <h2 className="video-title">First Video</h2>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-container">
        <h2 className="video-title">Second Video</h2>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/YOUR_SECOND_VIDEO_ID_HERE"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Press;

import React from 'react';

const VideoItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;


  return (
    <li className="card mb-4 shadow" onClick={() => this.onVideoSelect(this.video)}>
      <img className="card-img-top" src={imageUrl} />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </li>
  )
};

export default VideoItem;
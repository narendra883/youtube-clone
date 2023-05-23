import React from 'react'
import {Link} from 'react-router-dom'
import './VideoThumbnail.css'
// VideoThumbnail component
const VideoThumbnail = ({ video }) => {
  return (
    <div className='video'>
    <div className="video-thumbnail">
      <Link to={`/video/${video.postId}`}>
        <div className='thumbnail'>
          <img className='image' src={video.submission.thumbnail} alt={video.submission.title} />
          
        </div>
      </Link>
    </div>
    </div>
  );
};

export default VideoThumbnail

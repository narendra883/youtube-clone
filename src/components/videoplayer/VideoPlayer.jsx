import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import './VideoPlayer.css';

function VideoPlayer({videos}) {
    const { id } = useParams();
    const video = videos.find((video) => video.postId === id);
  
    if (!video) {
      return <div>Video not found.</div>;
    }
    
  
    return (
      <>
      <div className="videoplayer-container">
        <ReactPlayer className="videos" url={video.submission.mediaUrl} controls   />
      </div>
      <div className='thumbnail-content'>
            <h2 className='title'>{video.submission.title}</h2>
            <p className='description'>{video.submission.description}</p>
      </div>
      

      
      </>
    );
  };  
export default VideoPlayer

import React from 'react'
import VideoThumbnail from '../videothumbnail/VideoThumbnail'
import './VideoList.css'

function VideoList({ videos }) {
  return (
    <>
    <div className="video-container">
    {videos.map((video) => (
      <VideoThumbnail className="video" key={video.postId} video={video} />
    ))}
  </div>
  </>
    
  )
}

export default VideoList

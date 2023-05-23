import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoList from './components/videolist/VideoList';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://internship-service.onrender.com/videos?page=${currentPage}`
        );
        const data = await response.json();
        setVideos(data.data.posts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchVideos();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];

    for (let i = 0; i < 10; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <div>
      <div className='title-container'>
        <h1><span>You</span>tube</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<VideoList videos={videos} />} />
          <Route path="/video/:id" element={<VideoPlayer videos={videos} />} />
        </Routes>
      </Router>
    
      <div className='pagination-container'>
        <div className="pagination">
          <button onClick={goToPreviousPage}>prev</button>
          {renderPaginationButtons()}
          <button onClick={goToNextPage}>next</button>
        </div>
      </div>
    </div>
  );
};

export default App;

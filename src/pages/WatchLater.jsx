import React from 'react';
import { FaClock, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function WatchLater() {
  const { videos, watchLaterIds } = useApp();
  const navigate = useNavigate();
  const watchLaterVideos = videos.filter((v) => watchLaterIds.includes(v.id));

  return (
    <div className="page-container">
      <div className="playlist-banner watchlater-banner">
        <div className="playlist-banner-left">
          <div className="playlist-banner-icon-box">
            <FaClock size={36} color="#3b82f6" />
          </div>
          <div className="playlist-banner-text">
            <h2>Watch Later</h2>
            <p className="playlist-stats">
              {watchLaterVideos.length} {watchLaterVideos.length === 1 ? 'video' : 'videos'} • Curated Study & Tutorial Queue
            </p>
            {watchLaterVideos.length > 0 && (
              <button 
                className="play-all-btn"
                onClick={() => navigate(`/watch/${watchLaterVideos[0].id}`)}
              >
                <FaPlay size={12} />
                <span>Play All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="video-grid-section">
        {watchLaterVideos.length === 0 ? (
          <div className="empty-sub-card">
            <h3>Your Watch Later queue is empty</h3>
            <p>Save videos to watch later by clicking the "Watch Later" button on any video card.</p>
          </div>
        ) : (
          <div className="video-grid">
            {watchLaterVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default WatchLater;

import React from 'react';
import { FaHeart, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function LikedVideos() {
  const { videos, likedVideoIds } = useApp();
  const navigate = useNavigate();
  const likedVideos = videos.filter((v) => likedVideoIds.includes(v.id));

  return (
    <div className="page-container">
      <div className="playlist-banner liked-banner">
        <div className="playlist-banner-left">
          <div className="playlist-banner-icon-box">
            <FaHeart size={36} color="#ef4444" />
          </div>
          <div className="playlist-banner-text">
            <h2>Liked Videos</h2>
            <p className="playlist-stats">
              {likedVideos.length} {likedVideos.length === 1 ? 'video' : 'videos'} • Auto-updated via Context API & localStorage
            </p>
            {likedVideos.length > 0 && (
              <button 
                className="play-all-btn"
                onClick={() => navigate(`/watch/${likedVideos[0].id}`)}
              >
                <FaPlay size={12} />
                <span>Play All</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="video-grid-section">
        {likedVideos.length === 0 ? (
          <div className="empty-sub-card">
            <h3>No liked videos yet</h3>
            <p>Click the heart icon on any video to add it to your Liked collection.</p>
          </div>
        ) : (
          <div className="video-grid">
            {likedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default LikedVideos;

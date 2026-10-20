import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function Playlists() {
  const { videos, likedVideoIds, watchLaterIds } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const watchLaterVideos = videos.filter((v) => watchLaterIds.includes(v.id));
  const likedVideos = videos.filter((v) => likedVideoIds.includes(v.id));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Playlists</h2>
        <p>Your saved collections, Watch Later, and Liked Videos</p>
      </div>

      {/* Playlist Overview Cards */}
      <div className="playlist-cards-grid">
        {/* Watch Later Card */}
        <div 
          className={`playlist-box-card ${activeTab === 'watch-later' ? 'active' : ''}`}
          onClick={() => setActiveTab('watch-later')}
        >
          <div className="playlist-thumb-box">
            <img 
              src={watchLaterVideos[0]?.thumbnail || videos[0].thumbnail} 
              alt="Watch Later" 
              className="playlist-box-img"
            />
            <div className="playlist-box-badge">
              <MdOutlineWatchLater size={20} />
              <span>{watchLaterVideos.length} videos</span>
            </div>
          </div>
          <div className="playlist-box-info">
            <div className="playlist-box-title-row">
              <h4>Watch Later</h4>
              <span className="privacy-pill"><FaLock size={10} /> Private</span>
            </div>
            <p className="playlist-box-meta">Updated today • Auto Queue</p>
            <Link to="/watch-later" className="view-playlist-btn">
              Open Full Playlist &gt;
            </Link>
          </div>
        </div>

        {/* Liked Videos Card */}
        <div 
          className={`playlist-box-card ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          <div className="playlist-thumb-box">
            <img 
              src={likedVideos[0]?.thumbnail || videos[1].thumbnail} 
              alt="Liked Videos" 
              className="playlist-box-img"
            />
            <div className="playlist-box-badge">
              <AiOutlineLike size={20} />
              <span>{likedVideos.length} videos</span>
            </div>
          </div>
          <div className="playlist-box-info">
            <div className="playlist-box-title-row">
              <h4>Liked Videos</h4>
              <span className="privacy-pill"><FaLock size={10} /> Private</span>
            </div>
            <p className="playlist-box-meta">Synchronized in real-time</p>
            <Link to="/liked" className="view-playlist-btn">
              Open Full Playlist &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Tab Filter Toggle */}
      <div className="playlist-tab-controls">
        <button 
          className={`playlist-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Items ({watchLaterVideos.length + likedVideos.length})
        </button>
        <button 
          className={`playlist-tab-btn ${activeTab === 'watch-later' ? 'active' : ''}`}
          onClick={() => setActiveTab('watch-later')}
        >
          Watch Later ({watchLaterVideos.length})
        </button>
        <button 
          className={`playlist-tab-btn ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          Liked Videos ({likedVideos.length})
        </button>
      </div>

      {/* Active Tab Content */}
      <section className="video-grid-section" style={{ marginTop: '20px' }}>
        <div className="video-grid">
          {activeTab === 'watch-later' && (
            watchLaterVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          )}

          {activeTab === 'liked' && (
            likedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))
          )}

          {activeTab === 'all' && (
            [...watchLaterVideos, ...likedVideos]
              .filter((v, idx, arr) => arr.findIndex((t) => t.id === v.id) === idx)
              .map((video) => (
                <VideoCard key={video.id} video={video} />
              ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Playlists;

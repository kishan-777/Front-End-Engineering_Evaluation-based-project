import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { FaLock } from 'react-icons/fa';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function Playlists({ likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  // Active selected playlist tab: 'all' | 'watch-later' | 'liked'
  const [activeTab, setActiveTab] = useState('all');

  const watchLaterVideos = VIDEOS.slice(0, 4);
  const likedVideos = VIDEOS.filter((v) => likedVideoIds.includes(v.id));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Playlists</h2>
        <p>Your saved playlists, collections, Watch Later, and Liked Videos</p>
      </div>

      {/* Playlist Category Cards Overview */}
      <div className="playlist-cards-grid">
        {/* Category 1: Watch Later */}
        <div 
          className={`playlist-box-card ${activeTab === 'watch-later' ? 'active' : ''}`}
          onClick={() => setActiveTab('watch-later')}
        >
          <div className="playlist-thumb-box">
            <img 
              src={watchLaterVideos[0]?.thumbnail || VIDEOS[0].thumbnail} 
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
            <p className="playlist-box-meta">Updated today • Auto Playlist</p>
            <Link to="/watch-later" className="view-playlist-btn">
              Open Full Playlist &gt;
            </Link>
          </div>
        </div>

        {/* Category 2: Liked Videos */}
        <div 
          className={`playlist-box-card ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          <div className="playlist-thumb-box">
            <img 
              src={likedVideos[0]?.thumbnail || VIDEOS[1].thumbnail} 
              alt="Liked Videos" 
              className="playlist-box-img"
            />
            <div className="playlist-box-badge liked-badge">
              <AiOutlineLike size={20} />
              <span>{likedVideos.length} videos</span>
            </div>
          </div>
          <div className="playlist-box-info">
            <div className="playlist-box-title-row">
              <h4>Liked Videos</h4>
              <span className="privacy-pill"><FaLock size={10} /> Private</span>
            </div>
            <p className="playlist-box-meta">{likedVideos.length} liked videos</p>
            <Link to="/liked" className="view-playlist-btn">
              Open Full Playlist &gt;
            </Link>
          </div>
        </div>
      </div>

      {/* Playlist Content Display */}
      <section className="video-grid-section" style={{ marginTop: '32px' }}>
        {/* Tab 1: Watch Later */}
        {(activeTab === 'all' || activeTab === 'watch-later') && (
          <div className="playlist-section-block">
            <div className="playlist-section-header">
              <div className="playlist-sec-title">
                <MdOutlineWatchLater size={22} color="#3ea6ff" />
                <h3>Watch Later ({watchLaterVideos.length} Videos)</h3>
              </div>
              <Link to="/watch-later" className="see-all-link">See all &gt;</Link>
            </div>
            <div className="video-grid">
              {watchLaterVideos.map((video) => (
                <VideoCard 
                  key={video.id}
                  video={video}
                  isLiked={likedVideoIds.includes(video.id)}
                  onToggleLike={onToggleLike}
                  isSubscribed={subscribedChannels.includes(video.channelName)}
                  onToggleSubscribe={onToggleSubscribe}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Liked Videos */}
        {(activeTab === 'all' || activeTab === 'liked') && (
          <div className="playlist-section-block" style={{ marginTop: '36px' }}>
            <div className="playlist-section-header">
              <div className="playlist-sec-title">
                <AiOutlineLike size={22} color="#ff4757" />
                <h3>Liked Videos ({likedVideos.length} Videos)</h3>
              </div>
              <Link to="/liked" className="see-all-link">See all &gt;</Link>
            </div>
            {likedVideos.length === 0 ? (
              <div className="empty-state-card">
                <p>No liked videos in this playlist yet.</p>
              </div>
            ) : (
              <div className="video-grid">
                {likedVideos.map((video) => (
                  <VideoCard 
                    key={video.id}
                    video={video}
                    isLiked={true}
                    onToggleLike={onToggleLike}
                    isSubscribed={subscribedChannels.includes(video.channelName)}
                    onToggleSubscribe={onToggleSubscribe}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default Playlists;

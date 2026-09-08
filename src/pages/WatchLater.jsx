import React from 'react';
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function WatchLater({ likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  // Videos saved to Watch Later
  const watchLaterVideos = VIDEOS.slice(0, 4);

  return (
    <div className="page-container">
      <div className="playlist-banner-header">
        <div className="playlist-cover-card">
          <img 
            src={watchLaterVideos[0]?.thumbnail} 
            alt="Watch Later Playlist" 
            className="playlist-cover-img"
          />
          <div className="playlist-cover-overlay">
            <MdOutlinePlaylistPlay size={28} />
            <span>{watchLaterVideos.length} videos</span>
          </div>
        </div>

        <div className="playlist-header-meta">
          <h2>Watch Later</h2>
          <p className="playlist-subtitle">Auto-saved playlist • Private • {watchLaterVideos.length} videos</p>
          <div className="playlist-badges-row">
            <span className="playlist-tag"><FaLock size={10} style={{ marginRight: '4px' }} /> Private</span>
            <span className="playlist-tag">Updated today</span>
          </div>
          <p className="playlist-desc">Videos you have saved to watch later at your convenience.</p>
        </div>
      </div>

      <section className="video-grid-section" style={{ marginTop: '24px' }}>
        <h3 className="section-title">Saved Videos in Watch Later ({watchLaterVideos.length})</h3>
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
      </section>
    </div>
  );
}

export default WatchLater;

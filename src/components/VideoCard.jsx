import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FaPlay, FaHeart, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

function VideoCard({ 
  video, 
  isLiked, 
  onToggleLike, 
  isSubscribed, 
  onToggleSubscribe 
}) {
  const handleOpenVideo = () => {
    window.open(video.videoUrl, '_blank');
  };

  return (
    <div className="video-card">
      {/* Thumbnail Container */}
      <div className="thumbnail-container" onClick={handleOpenVideo}>
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="thumbnail-img"
          loading="lazy"
        />

        {/* Duration Badge */}
        <span className="duration-badge">{video.duration}</span>

        {/* Hover Overlay with Play Icon */}
        <div className="thumbnail-overlay">
          <div className="play-circle">
            <FaPlay size={14} className="play-icon" />
          </div>
          <span className="open-yt-text">
            Watch on YouTube <FaExternalLinkAlt size={10} style={{ marginLeft: '4px' }} />
          </span>
        </div>
      </div>

      {/* Video Information Row */}
      <div className="video-info-container">
        {/* Channel Avatar */}
        <img 
          src={video.channelAvatar} 
          alt={video.channelName} 
          className="channel-avatar" 
          title={"Visit " + video.channelName + " on YouTube"}
          onClick={(e) => {
            e.stopPropagation();
            const ch = (video.channelName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            window.open(`https://www.youtube.com/@${ch}`, '_blank');
          }}
        />

        {/* Title, Metadata & Actions */}
        <div className="video-details">
          <h3 
            className="video-title" 
            onClick={handleOpenVideo}
            title={video.title}
          >
            {video.title}
          </h3>

          <div 
            className="channel-name-row"
            onClick={(e) => {
              e.stopPropagation();
              const ch = (video.channelName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
              window.open(`https://www.youtube.com/@${ch}`, '_blank');
            }}
            style={{ cursor: 'pointer' }}
            title={"Visit " + video.channelName + " on YouTube"}
          >
            <span className="channel-name">{video.channelName}</span>
            {video.verified && (
              <MdVerified 
                size={14} 
                className="verified-icon" 
                title="Verified Channel"
              />
            )}
          </div>

          <div className="video-metadata">
            <span>{video.views}</span>
            <span className="meta-dot">•</span>
            <span>{video.timestamp}</span>
          </div>

          {/* Interactive Card Action Bar */}
          <div className="card-actions-row">
            {/* Like Toggle */}
            <button 
              className={`card-action-btn like-btn ${isLiked ? 'liked' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike(video.id);
              }}
              title={isLiked ? "Unlike video" : "Like video"}
            >
              {isLiked ? (
                <FaHeart size={14} className="heart-filled" />
              ) : (
                <FaRegHeart size={14} />
              )}
              <span>{isLiked ? 'Liked' : (video.likes || 'Like')}</span>
            </button>

            {/* Subscribe Toggle */}
            <button 
              className={`card-action-btn subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleSubscribe(video.channelName);
              }}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

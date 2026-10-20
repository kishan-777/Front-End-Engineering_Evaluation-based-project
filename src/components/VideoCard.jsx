import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { FaPlay, FaHeart, FaRegHeart, FaClock, FaCheck } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function VideoCard({ video }) {
  const navigate = useNavigate();
  const { 
    likedVideoIds, 
    watchLaterIds, 
    subscribedChannels, 
    toggleLike, 
    toggleWatchLater, 
    toggleSubscribe 
  } = useApp();

  const isLiked = likedVideoIds.includes(video.id);
  const isSaved = watchLaterIds.includes(video.id);
  const isSubscribed = subscribedChannels.includes(video.channelName);

  const handleOpenVideo = () => {
    navigate(`/watch/${video.slug || video.id}`);
  };

  const handleOpenChannel = (e) => {
    e.stopPropagation();
    navigate(`/channel/${video.channelId || video.channelName}`);
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
            Play Video
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
          title={`Visit ${video.channelName} channel`}
          onClick={handleOpenChannel}
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

          <div className="channel-name-row" onClick={handleOpenChannel} title={`Visit ${video.channelName}`}>
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
                toggleLike(video.id);
              }}
              title={isLiked ? "Unlike video" : "Like video"}
            >
              {isLiked ? (
                <>
                  <FaHeart size={13} color="#ef4444" />
                  <span>Liked</span>
                </>
              ) : (
                <>
                  <FaRegHeart size={13} />
                  <span>Like</span>
                </>
              )}
            </button>

            {/* Watch Later Quick Toggle */}
            <button
              className={`card-action-btn save-btn ${isSaved ? 'saved' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleWatchLater(video.id);
              }}
              title="Save to Watch Later"
            >
              {isSaved ? (
                <>
                  <FaCheck size={11} color="#3b82f6" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <FaClock size={11} />
                  <span>Watch Later</span>
                </>
              )}
            </button>

            {/* Subscribe Toggle */}
            <button 
              className={`card-action-btn subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleSubscribe(video.channelName);
              }}
              title={isSubscribed ? "Subscribed" : "Subscribe"}
            >
              <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

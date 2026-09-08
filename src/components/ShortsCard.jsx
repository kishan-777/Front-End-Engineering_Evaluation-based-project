import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaPlay, FaHeart, FaRegHeart, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * ShortsCard Component
 * Displays vertical 9:16 aspect ratio thumbnail for YouTube Shorts.
 */
function ShortsCard({ short, isLiked, onToggleLike }) {
  const handleOpenShort = () => {
    window.open(short.videoUrl, '_blank');
  };

  return (
    <div className="shorts-card">
      <div className="shorts-thumbnail-wrapper" onClick={handleOpenShort}>
        <img 
          src={short.thumbnail} 
          alt={short.title} 
          className="shorts-img"
          loading="lazy"
        />

        <div className="shorts-badge-top">
          <SiYoutubeshorts size={16} color="#ff0000" />
          <span>Shorts</span>
        </div>

        <div className="shorts-overlay">
          <div className="shorts-play-btn">
            <FaPlay size={14} />
          </div>
          <span className="shorts-open-text">
            Play Short <FaExternalLinkAlt size={10} style={{ marginLeft: '4px' }} />
          </span>
        </div>
      </div>

      <div className="shorts-details">
        <div className="shorts-title-row" style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
          <img 
            src={short.channelAvatar} 
            alt={short.channelName} 
            className="channel-img-sm"
            style={{ width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0, marginTop: '2px' }}
            title={"Visit " + short.channelName}
          />
          <h4 className="shorts-title" onClick={handleOpenShort} title={short.title}>
            {short.title}
          </h4>
        </div>
        <div className="shorts-meta-row" style={{ paddingLeft: '32px' }}>
          <span className="shorts-views">{short.views}</span>
          <button 
            className={`shorts-like-btn ${isLiked ? 'liked' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike(short.id);
            }}
            title={isLiked ? "Unlike" : "Like"}
          >
            {isLiked ? <FaHeart size={12} /> : <FaRegHeart size={12} />}
            <span>{isLiked ? 'Liked' : (short.likes || 'Like')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortsCard;

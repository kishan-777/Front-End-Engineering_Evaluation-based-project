import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function ShortsCard({ short }) {
  const navigate = useNavigate();
  const { likedVideoIds, toggleLike } = useApp();
  const isLiked = likedVideoIds.includes(short.id);

  const handleOpenShort = () => {
    navigate('/shorts');
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
            Play Short
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
            title={short.channelName}
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
              toggleLike(short.id);
            }}
            title={isLiked ? "Unlike" : "Like"}
          >
            {isLiked ? <FaHeart size={12} color="#ef4444" /> : <FaRegHeart size={12} />}
            <span>{isLiked ? 'Liked' : (short.likes || 'Like')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortsCard;

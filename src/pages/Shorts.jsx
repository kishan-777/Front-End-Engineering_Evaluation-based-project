import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHeart, FaRegHeart, FaRegCommentDots, FaShare, FaExternalLinkAlt } from 'react-icons/fa';
import { SHORTS } from '../data/videoData';

function Shorts({ likedVideoIds, onToggleLike }) {
  const handleOpenShort = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="shorts-page-container">
      <div className="shorts-feed-column">
        {SHORTS.map((short) => {
          const isLiked = likedVideoIds.includes(short.id);
          return (
            <div key={short.id} className="shorts-stream-item">
              <div 
                className="shorts-video-viewport" 
                onClick={() => handleOpenShort(short.videoUrl)}
              >
                <img 
                  src={short.thumbnail} 
                  alt={short.title} 
                  className="shorts-full-img"
                />

                <div className="shorts-top-bar">
                  <div className="shorts-brand">
                    <SiYoutubeshorts size={20} color="#ff0000" />
                    <span>Shorts</span>
                  </div>
                  <span className="watch-yt-badge">
                    Open on YouTube <FaExternalLinkAlt size={10} style={{ marginLeft: '4px' }} />
                  </span>
                </div>

                <div className="shorts-overlay-bottom">
                  <div className="shorts-channel-row">
                    <img 
                      src={short.channelAvatar} 
                      alt={short.channelName} 
                      className="shorts-channel-pic"
                    />
                    <span className="shorts-channel-text">@{short.channelName}</span>
                    <button className="shorts-sub-btn">Subscribe</button>
                  </div>
                  <h3 className="shorts-stream-title">{short.title}</h3>
                </div>
              </div>

              {/* Action Sidebar for Short */}
              <div className="shorts-action-bar">
                <button 
                  className={`shorts-circle-action ${isLiked ? 'active' : ''}`}
                  onClick={() => onToggleLike(short.id)}
                  title={isLiked ? "Unlike" : "Like"}
                >
                  {isLiked ? <FaHeart size={20} color="#ff4757" /> : <FaRegHeart size={20} />}
                  <span>{isLiked ? 'Liked' : short.likes}</span>
                </button>

                <button 
                  className="shorts-circle-action" 
                  onClick={() => handleOpenShort(short.videoUrl)}
                  title="Comments"
                >
                  <FaRegCommentDots size={20} />
                  <span>{short.comments}</span>
                </button>

                <button 
                  className="shorts-circle-action" 
                  onClick={() => handleOpenShort(short.videoUrl)}
                  title="Share"
                >
                  <FaShare size={18} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shorts;

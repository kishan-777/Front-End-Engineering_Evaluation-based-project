import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHeart, FaRegHeart, FaRegCommentDots, FaShare } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function Shorts() {
  const { shorts, likedVideoIds, toggleLike, subscribedChannels, toggleSubscribe } = useApp();

  const handleShareShort = (short) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(short.videoUrl);
      toast.success('Shorts link copied to clipboard! 📋');
    } else {
      toast.info(`Shorts link: ${short.videoUrl}`);
    }
  };

  return (
    <div className="shorts-page-container">
      <div className="shorts-feed-column">
        {shorts.map((short) => {
          const isLiked = likedVideoIds.includes(short.id);
          const isSubbed = subscribedChannels.includes(short.channelName);

          return (
            <div key={short.id} className="shorts-stream-item">
              <div 
                className="shorts-video-viewport" 
                onClick={() => window.open(short.videoUrl, '_blank')}
                title="Click to watch on YouTube Shorts"
              >
                <img 
                  src={short.thumbnail} 
                  alt={short.title} 
                  className="shorts-full-img"
                />

                <div className="shorts-top-bar">
                  <div className="shorts-brand">
                    <SiYoutubeshorts size={20} color="#dc2626" />
                    <span>Shorts</span>
                  </div>
                  <span className="watch-yt-badge">
                    HD Reel
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
                    <button 
                      className={`shorts-sub-btn ${isSubbed ? 'subbed' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubscribe(short.channelName);
                      }}
                    >
                      {isSubbed ? 'Subscribed' : 'Subscribe'}
                    </button>
                  </div>
                  <h3 className="shorts-stream-title">{short.title}</h3>
                </div>
              </div>

              {/* Action Sidebar for Short */}
              <div className="shorts-action-bar">
                <button 
                  className={`shorts-circle-action ${isLiked ? 'active' : ''}`}
                  onClick={() => toggleLike(short.id)}
                  title={isLiked ? "Unlike" : "Like"}
                >
                  {isLiked ? <FaHeart size={20} color="#ef4444" /> : <FaRegHeart size={20} />}
                  <span>{isLiked ? 'Liked' : short.likes}</span>
                </button>

                <button 
                  className="shorts-circle-action" 
                  onClick={() => toast.info(`Viewing comments for ${short.title}`)}
                  title="Comments"
                >
                  <FaRegCommentDots size={20} />
                  <span>{short.comments}</span>
                </button>

                <button 
                  className="shorts-circle-action" 
                  onClick={() => handleShareShort(short)}
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

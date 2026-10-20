import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHeart, FaRegHeart, FaRegCommentDots, FaShare, FaPlay, FaPause } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function Shorts() {
  const { shorts, likedVideoIds, toggleLike, subscribedChannels, toggleSubscribe } = useApp();
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');
  
  // Track which short is currently actively playing in-app
  const [playingShortId, setPlayingShortId] = useState(() => queryId || (shorts[0] && shorts[0].id));

  // Auto-scroll to target short if passed in query param
  useEffect(() => {
    if (queryId) {
      setPlayingShortId(queryId);
      const targetElement = document.getElementById(`short-${queryId}`);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [queryId]);

  const handleShareShort = (short) => {
    const shareUrl = `${window.location.origin}/shorts?id=${short.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Shorts link copied to clipboard! 📋', { toastId: `share_short_${short.id}` });
    } else {
      toast.info(`Shorts link: ${shareUrl}`, { toastId: `share_short_${short.id}` });
    }
  };

  return (
    <div className="shorts-page-container">
      <div className="shorts-feed-column">
        {shorts.map((short) => {
          const isLiked = likedVideoIds.includes(short.id);
          const isSubbed = subscribedChannels.includes(short.channelName);
          const isPlaying = playingShortId === short.id;

          return (
            <div key={short.id} id={`short-${short.id}`} className="shorts-stream-item">
              <div 
                className="shorts-video-viewport" 
                onClick={() => setPlayingShortId(isPlaying ? null : short.id)}
                title={isPlaying ? "Click to pause short" : "Click to play short in-app"}
              >
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${short.youtubeId}?autoplay=1&loop=1&playlist=${short.youtubeId}&controls=1&modestbranding=1&rel=0`}
                    title={short.title}
                    className="shorts-iframe-player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img 
                      src={short.thumbnail} 
                      alt={short.title} 
                      className="shorts-full-img"
                    />

                    <div className="shorts-play-overlay">
                      <div className="shorts-play-circle">
                        <FaPlay size={20} color="#ffffff" style={{ marginLeft: '3px' }} />
                      </div>
                      <span className="shorts-play-hint">Click to Stream In-App</span>
                    </div>

                    <div className="shorts-top-bar">
                      <div className="shorts-brand">
                        <SiYoutubeshorts size={20} color="#dc2626" />
                        <span>Shorts</span>
                      </div>
                      <span className="watch-yt-badge">
                        HD 1080p
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
                  </>
                )}
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
                  onClick={() => toast.info(`Viewing ${short.comments} comments for "${short.title}"`, { toastId: `cmt_${short.id}` })}
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

                <button 
                  className={`shorts-circle-action ${isPlaying ? 'active' : ''}`}
                  onClick={() => setPlayingShortId(isPlaying ? null : short.id)}
                  title={isPlaying ? "Pause In-App Player" : "Play In-App Player"}
                >
                  {isPlaying ? <FaPause size={16} color="#3ea6ff" /> : <FaPlay size={16} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
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

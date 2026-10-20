import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHeart, FaRegHeart, FaRegCommentDots, FaShare, FaPlay, FaPause, FaPaperPlane } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function Shorts() {
  const { 
    shorts, 
    likedVideoIds, 
    toggleLike, 
    subscribedChannels, 
    toggleSubscribe,
    comments,
    addComment,
    currentUser
  } = useApp();
  
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get('id');
  
  // Track which short is currently actively playing in-app
  const [playingShortId, setPlayingShortId] = useState(() => queryId || (shorts[0] && shorts[0].id));
  
  // Track which short has comments drawer open
  const [activeCommentShortId, setActiveCommentShortId] = useState(null);
  const [commentInput, setCommentInput] = useState('');

  // 1. Auto-scroll to target short if passed in query param
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

  // 2. High-Performance IntersectionObserver: Auto-play visible short and pause previous
  useEffect(() => {
    const observerOptions = {
      root: null, // browser viewport
      threshold: 0.65 // triggers when 65% of short is centered
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleId = entry.target.getAttribute('data-short-id');
          if (visibleId) {
            setPlayingShortId(visibleId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.shorts-stream-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [shorts]);

  const handleShareShort = (short) => {
    const shareUrl = `${window.location.origin}/shorts?id=${short.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Shorts link copied to clipboard! 📋', { toastId: `share_short_${short.id}` });
    }
  };

  const handlePostShortComment = (shortId) => {
    if (!commentInput.trim()) return;
    addComment(shortId, commentInput.trim());
    setCommentInput('');
  };

  return (
    <div className="shorts-page-container">
      <div className="shorts-feed-column">
        {shorts.map((short) => {
          const isLiked = likedVideoIds.includes(short.id);
          const isSubbed = subscribedChannels.includes(short.channelName);
          const isPlaying = playingShortId === short.id;
          const isCommentsOpen = activeCommentShortId === short.id;
          const shortComments = comments[short.id] || [
            { id: 'sc1', author: 'Aryan Mehta', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&auto=format&fit=crop&q=80', timestamp: '1 day ago', text: 'Insane video! Loved the pacing and edits.', likes: 84 },
            { id: 'sc2', author: 'Neha Sharma', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=80', timestamp: '3 days ago', text: 'Watching this on loop, great content!', likes: 42 }
          ];

          return (
            <div 
              key={short.id} 
              id={`short-${short.id}`} 
              data-short-id={short.id}
              className="shorts-stream-item"
            >
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
                      <span className="shorts-play-hint">Playing In-App</span>
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

                {/* Interactive In-App Comments Drawer Overlay for this Short */}
                {isCommentsOpen && (
                  <div 
                    className="shorts-comments-overlay"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="shorts-comments-header">
                      <h4>Comments ({shortComments.length})</h4>
                      <button 
                        className="shorts-close-cmt-btn"
                        onClick={() => setActiveCommentShortId(null)}
                        aria-label="Close comments"
                      >
                        <IoClose size={20} />
                      </button>
                    </div>

                    <div className="shorts-comments-body">
                      {shortComments.map((cmt) => (
                        <div key={cmt.id} className="shorts-comment-row">
                          <img src={cmt.avatar} alt={cmt.author} className="shorts-cmt-avatar" />
                          <div className="shorts-cmt-content">
                            <div className="shorts-cmt-meta">
                              <strong>{cmt.author}</strong>
                              <span>{cmt.timestamp}</span>
                            </div>
                            <p>{cmt.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <form 
                      className="shorts-cmt-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handlePostShortComment(short.id);
                      }}
                    >
                      <input 
                        type="text"
                        placeholder="Add a comment..."
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        autoFocus
                      />
                      <button type="submit" disabled={!commentInput.trim()}>
                        <FaPaperPlane size={13} />
                      </button>
                    </form>
                  </div>
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
                  className={`shorts-circle-action ${isCommentsOpen ? 'active' : ''}`}
                  onClick={() => setActiveCommentShortId(isCommentsOpen ? null : short.id)}
                  title="Open Comments"
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

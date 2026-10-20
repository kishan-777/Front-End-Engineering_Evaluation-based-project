import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaHeart, 
  FaRegHeart, 
  FaShare, 
  FaClock, 
  FaCheckCircle, 
  FaThumbsUp, 
  FaSortAmountDown,
  FaPlay
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function WatchPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    videos, 
    likedVideoIds, 
    watchLaterIds, 
    subscribedChannels, 
    comments, 
    toggleLike, 
    toggleWatchLater, 
    toggleSubscribe, 
    addToHistory, 
    addComment,
    isAutoplayEnabled,
    toggleAutoplay,
    currentUser 
  } = useApp();

  // Find active video by slug or id from route params
  const currentVideo = videos.find((v) => v.slug === id || v.id === id) || videos[0];

  // Comment input state & ref
  const [commentText, setCommentText] = useState('');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [sortBy, setSortBy] = useState('newest'); // 'newest' | 'top'
  const commentInputRef = useRef(null);

  // Automatically log video to Watch History upon mounting/switching
  useEffect(() => {
    if (currentVideo) {
      addToHistory(currentVideo.id);
      window.scrollTo(0, 0);
    }
  }, [id, currentVideo]);

  const isLiked = likedVideoIds.includes(currentVideo.id);
  const isSaved = watchLaterIds.includes(currentVideo.id);
  const isSubscribed = subscribedChannels.includes(currentVideo.channelName);

  // Comments for this specific video
  const videoComments = comments[currentVideo.id] || [];

  // Sort comments
  const sortedComments = [...videoComments].sort((a, b) => {
    if (sortBy === 'top') return b.likes - a.likes;
    return b.id.localeCompare(a.id);
  });

  // Handle Comment Submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(currentVideo.id, commentText);
    setCommentText('');
  };

  // Handle Share to Clipboard
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      toast.success('Video link copied to clipboard! 📋');
    } else {
      toast.info(`Share link: ${url}`);
    }
  };

  // Filter recommendations: same category first, excluding active video
  const recommendations = videos
    .filter((v) => v.id !== currentVideo.id)
    .sort((a, b) => {
      if (a.category === currentVideo.category && b.category !== currentVideo.category) return -1;
      if (b.category === currentVideo.category && a.category !== currentVideo.category) return 1;
      return 0;
    })
    .slice(0, 8);

  return (
    <div className="watch-page-container">
      {/* LEFT COLUMN: Video Player, Meta, Details, & Comments */}
      <div className="watch-main-column">
        
        {/* 1. Embedded YouTube Player */}
        <div className="player-aspect-wrapper">
          <iframe
            className="embedded-video-frame"
            src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=${isAutoplayEnabled ? 1 : 0}&rel=0&modestbranding=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* 2. Video Title */}
        <h1 className="watch-video-title">{currentVideo.title}</h1>

        {/* 3. Channel Bar & Interactive Action Buttons */}
        <div className="watch-actions-bar">
          <div 
            className="watch-channel-info" 
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(`/channel/${currentVideo.channelId || currentVideo.channelName}`)}
            title={`Visit ${currentVideo.channelName} Channel Page`}
          >
            <img 
              src={currentVideo.channelAvatar} 
              alt={currentVideo.channelName} 
              className="watch-channel-avatar"
            />
            <div className="watch-channel-meta">
              <div className="watch-channel-title-row">
                <span className="watch-channel-name">{currentVideo.channelName}</span>
                {currentVideo.verified && <FaCheckCircle className="verified-badge-icon" />}
              </div>
              <span className="watch-subscriber-count">
                {currentVideo.subscribers || '1M subscribers'}
              </span>
            </div>

            <button
              className={`watch-subscribe-btn ${isSubscribed ? 'subscribed' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleSubscribe(currentVideo.channelName);
              }}
            >
              {isSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          {/* Action Pills */}
          <div className="watch-pill-actions">
            <button 
              className={`watch-action-pill ${isLiked ? 'active' : ''}`}
              onClick={() => toggleLike(currentVideo.id)}
              title={isLiked ? "Unlike video" : "Like video"}
            >
              {isLiked ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
              <span>{isLiked ? 'Liked' : currentVideo.likes || 'Like'}</span>
            </button>

            <button 
              className={`watch-action-pill ${isSaved ? 'active' : ''}`}
              onClick={() => toggleWatchLater(currentVideo.id)}
              title="Save to Watch Later"
            >
              <FaClock color={isSaved ? '#3b82f6' : 'currentColor'} />
              <span>{isSaved ? 'Saved' : 'Watch Later'}</span>
            </button>

            <button 
              className="watch-action-pill"
              onClick={handleShare}
              title="Share video link"
            >
              <FaShare />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* 4. Description Box */}
        <div 
          className={`watch-description-box ${isDescriptionExpanded ? 'expanded' : ''}`}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
        >
          <div className="watch-description-stats">
            <span>{currentVideo.views}</span>
            <span>•</span>
            <span>{currentVideo.timestamp}</span>
            <span className="watch-category-tag">#{currentVideo.category.replace(/\s+/g, '')}</span>
          </div>
          <p className="watch-description-text">
            {currentVideo.description}
          </p>
          <span className="watch-description-toggle">
            {isDescriptionExpanded ? 'Show less' : '...more'}
          </span>
        </div>

        {/* 5. Interactive Comments Section */}
        <div className="watch-comments-section">
          <div className="comments-header">
            <h3>{videoComments.length} Comments</h3>
            <button 
              className="comments-sort-btn"
              onClick={() => setSortBy(sortBy === 'top' ? 'newest' : 'top')}
              title="Change sort order"
            >
              <FaSortAmountDown />
              <span>Sort by ({sortBy === 'top' ? 'Top comments' : 'Newest'})</span>
            </button>
          </div>

          {/* Comment Form (Controlled with useRef auto-focus) */}
          <form onSubmit={handleCommentSubmit} className="comment-input-form">
            <img 
              src={currentUser.avatar || "/images/user_avatar.svg"} 
              alt={currentUser.name} 
              className="comment-author-avatar"
              onError={(e) => {
                e.currentTarget.src = "/images/user_avatar.svg";
              }}
            />
            <div className="comment-field-wrapper">
              <input
                ref={commentInputRef}
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              {commentText && (
                <div className="comment-form-actions">
                  <button 
                    type="button" 
                    className="comment-cancel-btn"
                    onClick={() => setCommentText('')}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="comment-submit-btn"
                    disabled={!commentText.trim()}
                  >
                    Comment
                  </button>
                </div>
              )}
            </div>
          </form>

          {/* Comment List */}
          <div className="comments-list">
            {sortedComments.length === 0 ? (
              <p className="no-comments-msg">No comments yet. Be the first to start the discussion!</p>
            ) : (
              sortedComments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <img src={comment.avatar} alt={comment.author} className="comment-item-avatar" />
                  <div className="comment-item-content">
                    <div className="comment-meta">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-timestamp">{comment.timestamp}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <div className="comment-item-actions">
                      <button className="comment-like-btn">
                        <FaThumbsUp size={12} />
                        <span>{comment.likes || 0}</span>
                      </button>
                      <button 
                        className="comment-reply-btn"
                        onClick={() => {
                          if (commentInputRef.current) {
                            commentInputRef.current.focus();
                            setCommentText(`@${comment.author} `);
                          }
                        }}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Up-Next Recommendations Queue */}
      <div className="watch-recommendations-column">
        <div className="recommendations-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 className="recommendations-header" style={{ margin: 0 }}>Up Next</h3>
          <div className="autoplay-control-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Autoplay</span>
            <button 
              className={`autoplay-toggle-switch ${isAutoplayEnabled ? 'on' : 'off'}`}
              onClick={toggleAutoplay}
              title={isAutoplayEnabled ? "Autoplay is on" : "Autoplay is off"}
              type="button"
              style={{
                width: '36px',
                height: '20px',
                borderRadius: '10px',
                background: isAutoplayEnabled ? '#3ea6ff' : '#4b5563',
                border: 'none',
                position: 'relative',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                padding: '2px'
              }}
            >
              <span 
                style={{
                  display: 'block',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  transform: isAutoplayEnabled ? 'translateX(16px)' : 'translateX(0px)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>
          </div>
        </div>

        <div className="recommendations-list">
          {recommendations.map((item) => (
            <div 
              key={item.id} 
              className="recommendation-card"
              onClick={() => navigate(`/watch/${item.slug || item.id}`)}
            >
              <div className="recommendation-thumb-wrapper">
                <img src={item.thumbnail} alt={item.title} className="recommendation-thumb" />
                <span className="recommendation-duration">{item.duration}</span>
                <div className="recommendation-play-hover">
                  <FaPlay size={10} color="#fff" />
                </div>
              </div>
              <div className="recommendation-details">
                <h4 className="recommendation-title">{item.title}</h4>
                <div className="recommendation-channel-row">
                  <span>{item.channelName}</span>
                  {item.verified && <FaCheckCircle size={10} className="verified-badge-icon" />}
                </div>
                <div className="recommendation-stats">
                  <span>{item.views}</span>
                  <span>•</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchPage;

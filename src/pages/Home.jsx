import React from 'react';
import { SiYoutubeshorts } from 'react-icons/si';
import { IoSearchOutline } from 'react-icons/io5';
import CategoryChips from '../components/CategoryChips';
import VideoCard from '../components/VideoCard';
import ShortsCard from '../components/ShortsCard';
import { CATEGORIES, SHORTS } from '../data/videoData';

function Home({ 
  videos, 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onClearSearch,
  likedVideoIds,
  onToggleLike,
  subscribedChannels,
  onToggleSubscribe
}) {
  return (
    <div className="page-container">
      {/* Category Filter Chips */}
      <CategoryChips 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      {/* Active Search Results Header */}
      {searchQuery && (
        <div className="search-status-bar">
          <div className="search-status-left">
            <IoSearchOutline size={18} color="#3ea6ff" />
            <span>
              Results for <strong>"{searchQuery}"</strong> ({videos.length} {videos.length === 1 ? 'video' : 'videos'} found)
            </span>
          </div>
          <button className="clear-filter-btn" onClick={onClearSearch}>
            Clear Search
          </button>
        </div>
      )}

      {/* YouTube Shorts Shelf (visible on Home when not searching deep) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="shorts-shelf-section">
          <div className="shelf-header">
            <div className="shelf-title-box">
              <SiYoutubeshorts size={24} color="#ff0000" />
              <h2>Shorts</h2>
            </div>
          </div>
          
          <div className="shorts-grid">
            {SHORTS.slice(0, 6).map((short) => (
              <ShortsCard 
                key={short.id}
                short={short}
                isLiked={likedVideoIds.includes(short.id)}
                onToggleLike={onToggleLike}
              />
            ))}
          </div>
        </section>
      )}

      {/* Zero Results State */}
      {videos.length === 0 ? (
        <div className="zero-search-card">
          <div className="zero-search-icon">🔍</div>
          <h3>No local videos found for "{searchQuery}"</h3>
          <p>We couldn't find any videos matching your search!</p>
          <button className="reset-filter-btn" onClick={onClearSearch}>
            Clear Search
          </button>
        </div>
      ) : (
        /* Video Feed Grid */
        <section className="video-grid-section">
          {selectedCategory !== 'All' && (
            <h3 className="section-title">Videos in "{selectedCategory}"</h3>
          )}
          <div className="video-grid">
            {videos.map((video) => (
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
      )}
    </div>
  );
}

export default Home;

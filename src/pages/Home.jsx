import React, { useMemo, useState, useEffect } from 'react';
import { SiYoutubeshorts } from 'react-icons/si';
import { IoSearchOutline } from 'react-icons/io5';
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoryChips from '../components/CategoryChips';
import VideoCard from '../components/VideoCard';
import ShortsCard from '../components/ShortsCard';
import { useApp } from '../context/AppContext';

const INITIAL_BATCH_SIZE = 8;
const BATCH_INCREMENT = 6;

function Home() {
  const { 
    videos: allVideos, 
    shorts: allShorts, 
    categories, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory 
  } = useApp();

  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);

  // Optimized Search & Category Filtering with useMemo
  const filteredVideos = useMemo(() => {
    return allVideos.filter((video) => {
      const matchesCategory = selectedCategory === 'All' || 
        video.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const textToSearch = `${video.title} ${video.channelName} ${video.category} ${video.description || ''}`.toLowerCase();
      
      const words = textToSearch.split(/[^a-z0-9]+/);
      const matchesSearch = q.includes(' ')
        ? textToSearch.includes(q)
        : words.some((w) => w.startsWith(q)) || textToSearch.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [allVideos, selectedCategory, searchQuery]);

  // Reset pagination count whenever category or search filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_SIZE);
  }, [selectedCategory, searchQuery]);

  // Sliced array for Infinite Scroll (Classroom requirement - Mr. Shubham Kumar G15)
  const displayedVideos = useMemo(() => {
    return filteredVideos.slice(0, visibleCount);
  }, [filteredVideos, visibleCount]);

  const hasMore = displayedVideos.length < filteredVideos.length;

  const fetchMoreVideos = () => {
    // Smooth delay simulation for infinite loading feel
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + BATCH_INCREMENT, filteredVideos.length));
    }, 350);
  };

  return (
    <div className="page-container">
      {/* Category Filter Chips */}
      <CategoryChips 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Active Search Results Header */}
      {searchQuery && (
        <div className="search-status-bar">
          <div className="search-status-left">
            <IoSearchOutline size={18} color="#3ea6ff" />
            <span>
              Results for <strong>"{searchQuery}"</strong> ({filteredVideos.length} {filteredVideos.length === 1 ? 'video' : 'videos'} found)
            </span>
          </div>
          <button className="clear-filter-btn" onClick={() => setSearchQuery('')}>
            Clear Search
          </button>
        </div>
      )}

      {/* YouTube Shorts Shelf (visible on Home when not searching) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="shorts-shelf-section">
          <div className="shelf-header">
            <div className="shelf-title-box">
              <SiYoutubeshorts size={24} color="#dc2626" />
              <h2>Shorts</h2>
            </div>
          </div>
          
          <div className="shorts-grid">
            {allShorts.map((short) => (
              <ShortsCard key={short.id} short={short} />
            ))}
          </div>
        </section>
      )}

      {/* Zero Results State */}
      {filteredVideos.length === 0 ? (
        <div className="zero-search-card">
          <div className="zero-search-icon">🔍</div>
          <h3>No videos found for "{searchQuery}"</h3>
          <p>Try searching for different keywords such as React, DSA, Gaming, Latent, or Music.</p>
          <button className="reset-filter-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        /* Video Feed Grid with Infinite Scroll */
        <section className="video-grid-section">
          {selectedCategory !== 'All' && (
            <h3 className="section-title">Videos in "{selectedCategory}"</h3>
          )}
          
          <InfiniteScroll
            dataLength={displayedVideos.length}
            next={fetchMoreVideos}
            hasMore={hasMore}
            loader={
              <div className="infinite-scroll-loader">
                <div className="infinite-spinner" />
                <span>Loading more videos...</span>
              </div>
            }
            endMessage={
              <div className="infinite-scroll-end">
                <span>✓ All {filteredVideos.length} videos loaded</span>
              </div>
            }
            style={{ overflow: 'visible' }}
          >
            <div className="video-grid">
              {displayedVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </InfiniteScroll>
        </section>
      )}
    </div>
  );
}

export default Home;

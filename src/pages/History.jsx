import React, { useState } from 'react';
import { MdDeleteOutline, MdHistory } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function History({ likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  // Diverse realistic watch history across categories
  const [historyVideos, setHistoryVideos] = useState([
    VIDEOS[0],  // React Course
    VIDEOS[11], // GTA 5 Bank Robbery
    VIDEOS[7],  // Bhool Bhulaiyaa 3 Title Track
    VIDEOS[2],  // System Design
    VIDEOS[9],  // 100 Days as Warden
    VIDEOS[5],  // $1 vs $250M Island
  ]);

  const handleClearHistory = () => {
    setHistoryVideos([]);
  };

  return (
    <div className="page-container">
      <div className="page-header-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2>Watch History</h2>
          <p>Videos you recently watched on PheW TuBe Platform ({historyVideos.length} videos)</p>
        </div>
        {historyVideos.length > 0 && (
          <button 
            className="clear-filter-btn" 
            onClick={handleClearHistory}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            title="Clear all watch history"
          >
            <MdDeleteOutline size={18} />
            Clear All History
          </button>
        )}
      </div>

      {historyVideos.length === 0 ? (
        <div className="empty-state-card">
          <MdHistory size={48} color="#888" style={{ marginBottom: '12px' }} />
          <h3>Watch history is empty</h3>
          <p>Videos you watch will show up here to help you pick up where you left off.</p>
        </div>
      ) : (
        <div className="video-grid">
          {historyVideos.map((video) => (
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
      )}
    </div>
  );
}

export default History;

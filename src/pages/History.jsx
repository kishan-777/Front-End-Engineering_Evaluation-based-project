import React from 'react';
import { MdHistory, MdDeleteOutline } from 'react-icons/md';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function History() {
  const { videos, watchHistory, clearHistory } = useApp();

  // Map watch history to actual video objects with watched timestamp
  const historyVideos = watchHistory
    .map((item) => {
      const v = videos.find((vid) => vid.id === item.id);
      return v ? { ...v, watchedAt: item.watchedAt } : null;
    })
    .filter(Boolean);

  return (
    <div className="page-container">
      <div className="page-header-box history-header-box">
        <div>
          <h2>Watch History</h2>
          <p>Videos you have recently watched ({historyVideos.length} items logged)</p>
        </div>
        {historyVideos.length > 0 && (
          <button className="clear-history-btn" onClick={clearHistory}>
            <MdDeleteOutline size={18} />
            <span>Clear All History</span>
          </button>
        )}
      </div>

      <section className="video-grid-section">
        {historyVideos.length === 0 ? (
          <div className="empty-sub-card">
            <div className="empty-icon-box">
              <MdHistory size={48} color="#6b7280" />
            </div>
            <h3>No watch history yet</h3>
            <p>Videos you watch on PheW TuBe will appear here automatically.</p>
          </div>
        ) : (
          <div className="video-grid">
            {historyVideos.map((video) => (
              <VideoCard key={video.id + '_' + (video.watchedAt || '')} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default History;

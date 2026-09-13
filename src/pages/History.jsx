import React from 'react';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function History({ likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  // Simulating watch history with first 6 videos
  const historyVideos = VIDEOS.slice(0, 6);

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Watch History</h2>
        <p>Videos you recently watched on PheW TuBe Platform</p>
      </div>

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
    </div>
  );
}

export default History;

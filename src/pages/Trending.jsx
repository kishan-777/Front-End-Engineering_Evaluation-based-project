import React from 'react';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function Trending({ title, likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  const trendingVideos = VIDEOS.filter((v) => v.views.includes('M'));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>{title || 'Trending Content'}</h2>
        <p>Most popular and trending videos across the globe</p>
      </div>

      <div className="video-grid">
        {trendingVideos.map((video) => (
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

export default Trending;

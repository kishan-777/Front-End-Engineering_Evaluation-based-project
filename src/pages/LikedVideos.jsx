import React from 'react';
import VideoCard from '../components/VideoCard';
import { VIDEOS } from '../data/videoData';

function LikedVideos({ likedVideoIds, onToggleLike, subscribedChannels, onToggleSubscribe }) {
  const likedVideos = VIDEOS.filter((v) => likedVideoIds.includes(v.id));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Liked Videos ({likedVideos.length})</h2>
        <p>Auto-playlist of all videos you have liked</p>
      </div>

      {likedVideos.length === 0 ? (
        <div className="empty-state-card">
          <h3>No liked videos yet</h3>
          <p>Click the heart icon on any video or short to save it to this playlist.</p>
        </div>
      ) : (
        <div className="video-grid">
          {likedVideos.map((video) => (
            <VideoCard 
              key={video.id}
              video={video}
              isLiked={true}
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

export default LikedVideos;

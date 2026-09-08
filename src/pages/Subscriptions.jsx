import React from 'react';
import VideoCard from '../components/VideoCard';
import { CHANNELS, VIDEOS } from '../data/videoData';

function Subscriptions({ 
  subscribedChannels, 
  likedVideoIds, 
  onToggleLike, 
  onToggleSubscribe 
}) {
  const subbedVideos = VIDEOS.filter((v) => subscribedChannels.includes(v.channelName));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Subscribed Channels Feed</h2>
        <p>Latest videos from the channels you follow ({subscribedChannels.length} channels)</p>
      </div>

      <div className="channels-pill-row">
        {CHANNELS.map((ch) => {
          const isSubbed = subscribedChannels.includes(ch.name);
          const handleOpenChannel = () => {
            if (ch.channelUrl) {
              window.open(ch.channelUrl, '_blank');
            }
          };

          return (
            <div key={ch.id} className={`channel-card-badge ${isSubbed ? 'active' : ''}`}>
              <div 
                className="channel-badge-main-click"
                onClick={handleOpenChannel}
                title={"Visit " + ch.name + " on YouTube"}
              >
                <img src={ch.thumbnail} alt={ch.name} className="channel-badge-avatar" />
                <div className="channel-badge-info">
                  <span className="channel-badge-name">{ch.name}</span>
                  <span className="channel-badge-subs">{ch.subscribers}</span>
                </div>
              </div>

              <button 
                className={`sub-btn-pill ${isSubbed ? 'subbed' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleSubscribe(ch.name);
                }}
                title={isSubbed ? "Unsubscribe" : "Subscribe"}
              >
                {isSubbed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          );
        })}
      </div>

      <section className="video-grid-section" style={{ marginTop: '24px' }}>
        <h3 className="section-title">Latest Subscribed Videos ({subbedVideos.length})</h3>
        {subbedVideos.length === 0 ? (
          <div className="empty-state-card">
            <h3>No videos from your subscriptions yet</h3>
            <p>Subscribe to more channels from the list above to see their updates here.</p>
          </div>
        ) : (
          <div className="video-grid">
            {subbedVideos.map((video) => (
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
      </section>
    </div>
  );
}

export default Subscriptions;

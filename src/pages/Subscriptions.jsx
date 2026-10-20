import React from 'react';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function Subscriptions() {
  const { channels, videos, subscribedChannels, toggleSubscribe } = useApp();
  const subbedVideos = videos.filter((v) => subscribedChannels.includes(v.channelName));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Subscribed Channels Feed</h2>
        <p>Latest videos from the creators you follow ({subscribedChannels.length} active subscriptions)</p>
      </div>

      <div className="channels-pill-row">
        {channels.map((ch) => {
          const isSubbed = subscribedChannels.includes(ch.name);

          return (
            <div key={ch.id} className={`channel-card-badge ${isSubbed ? 'active' : ''}`}>
              <div 
                className="channel-badge-main-click"
                onClick={() => ch.channelUrl && window.open(ch.channelUrl, '_blank')}
                title={`Visit ${ch.name} on YouTube`}
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
                  toggleSubscribe(ch.name);
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
          <div className="empty-sub-card">
            <h3>No subscribed channels active</h3>
            <p>Click "Subscribe" on any creator above to see their videos here.</p>
          </div>
        ) : (
          <div className="video-grid">
            {subbedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Subscriptions;

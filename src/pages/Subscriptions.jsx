import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function Subscriptions() {
  const navigate = useNavigate();
  const { channels, videos, subscribedChannels, toggleSubscribe } = useApp();
  const subbedVideos = videos.filter((v) => subscribedChannels.includes(v.channelName));
  const subbedChannelsList = channels.filter((ch) => subscribedChannels.includes(ch.name));

  return (
    <div className="page-container">
      <div className="page-header-box">
        <h2>Subscribed Channels Feed</h2>
        <p>Latest videos from the creators you follow ({subscribedChannels.length} active subscriptions)</p>
      </div>

      {subbedChannelsList.length > 0 ? (
        <div className="channels-pill-row">
          {subbedChannelsList.map((ch) => (
            <div key={ch.id} className="channel-card-badge active">
              <div 
                className="channel-badge-main-click"
                onClick={() => navigate(`/channel/${ch.id}`)}
                title={`Visit ${ch.name} Channel Page`}
              >
                <img src={ch.thumbnail} alt={ch.name} className="channel-badge-avatar" />
                <div className="channel-badge-info">
                  <span className="channel-badge-name">{ch.name}</span>
                  <span className="channel-badge-subs">{ch.subscribers}</span>
                </div>
              </div>

              <button 
                className="sub-btn-pill subbed"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSubscribe(ch.name);
                }}
                title="Unsubscribe"
              >
                Subscribed
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-subbed-channels-notice" style={{ padding: '16px 20px', backgroundColor: 'var(--card-bg, #1f1f1f)', borderRadius: '12px', border: '1px solid var(--border-color, #333)', margin: '16px 0', color: 'var(--text-secondary, #aaa)' }}>
          <span>You haven't subscribed to any channels yet. Click "Subscribe" on any video or channel page to follow your favourite creators!</span>
        </div>
      )}

      <section className="video-grid-section" style={{ marginTop: '24px' }}>
        <h3 className="section-title">Latest Subscribed Videos ({subbedVideos.length})</h3>
        {subbedVideos.length === 0 ? (
          <div className="empty-sub-card">
            <h3>No subscribed channels active</h3>
            <p>Click "Subscribe" on any creator to see their videos here.</p>
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

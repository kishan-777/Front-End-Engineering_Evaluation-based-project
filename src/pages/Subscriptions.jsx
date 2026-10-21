import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';
import { MdCheck } from 'react-icons/md';

function Subscriptions() {
  const navigate = useNavigate();
  const { channels, videos, subscribedChannels, toggleSubscribe } = useApp();
  const subbedVideos = videos.filter((v) => subscribedChannels.includes(v.channelName));
  const subbedChannelsList = channels.filter((ch) => subscribedChannels.includes(ch.name));

  return (
    <div className="page-container subscriptions-page-container">
      <div className="page-header-box">
        <h2>Subscribed Channels Feed</h2>
        <p>Latest updates and videos from the creators you follow ({subbedChannelsList.length} active subscriptions)</p>
      </div>

      {subbedChannelsList.length > 0 ? (
        <section className="subscribed-channels-section">
          <div className="section-header-row">
            <h3 className="section-title">Subscribed Channels ({subbedChannelsList.length})</h3>
            <span className="channels-count-tag">Active Creators</span>
          </div>

          <div className="subscribed-channels-tiles-grid">
            {subbedChannelsList.map((ch) => (
              <div 
                key={ch.id} 
                className="subscribed-channel-tile"
                onClick={() => navigate(`/channel/${ch.id}`)}
                title={`Visit ${ch.name}'s channel page`}
              >
                <div className="sub-tile-avatar-wrapper">
                  <img src={ch.thumbnail} alt={ch.name} className="sub-tile-avatar" />
                  <span className="sub-tile-online-dot" title="Active creator"></span>
                </div>

                <div className="sub-tile-info">
                  <h4 className="sub-tile-name" title={ch.name}>
                    {ch.name}
                  </h4>
                  <span className="sub-tile-subs">{ch.subscribers}</span>
                </div>

                <div className="sub-tile-actions">
                  <button 
                    className="sub-tile-action-btn subbed"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubscribe(ch.name);
                    }}
                    title="Click to unsubscribe"
                  >
                    <MdCheck size={16} />
                    <span>Subscribed</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="empty-subbed-channels-notice">
          <span>You haven't subscribed to any channels yet. Click "Subscribe" on any creator or channel page to follow them!</span>
        </div>
      )}

      <section className="video-grid-section" style={{ marginTop: '28px' }}>
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

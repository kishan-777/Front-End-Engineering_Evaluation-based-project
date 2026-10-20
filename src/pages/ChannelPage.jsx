import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MdVerified } from 'react-icons/md';
import { FiExternalLink, FiShare2 } from 'react-icons/fi';
import { SiYoutubeshorts } from 'react-icons/si';
import { toast } from 'react-toastify';
import VideoCard from '../components/VideoCard';
import { useApp } from '../context/AppContext';

function ChannelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { channels, videos, shorts, subscribedChannels, toggleSubscribe } = useApp();
  const [activeTab, setActiveTab] = useState('Videos');

  // Find channel by id, handle, or name
  const channel = channels.find((c) => 
    c.id === id || 
    c.name.toLowerCase() === id.toLowerCase() ||
    (c.handle && c.handle.toLowerCase().replace('@', '') === id.toLowerCase().replace('@', ''))
  ) || channels[0];

  const isSubbed = subscribedChannels.includes(channel.name);
  const channelVideos = videos.filter((v) => v.channelName === channel.name || v.channelId === channel.id);
  const channelShorts = shorts.filter((s) => s.channelName === channel.name || s.channelId === channel.id);

  const handleShareChannel = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success(`Channel link copied to clipboard! 📋`, { toastId: `share_ch_${channel.id}` });
    }
  };

  return (
    <div className="channel-page-container">
      {/* 1. YouTube Hero Banner featuring Channel Icon */}
      <div className="channel-hero-banner">
        <div 
          className="channel-banner-backdrop" 
          style={{ backgroundImage: `url(${channel.thumbnail})` }} 
        />
        <div className="channel-banner-glass-overlay">
          <div className="channel-banner-center-brand">
            <img 
              src={channel.thumbnail} 
              alt={channel.name} 
              className="channel-banner-logo-img" 
              onError={(e) => { e.currentTarget.src = "/images/user_avatar.svg"; }}
            />
            <div className="channel-banner-title-box">
              <span className="channel-banner-official-tag">Official Channel Brand</span>
              <h2 className="channel-banner-heading">{channel.name}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Channel Header Profile Bar */}
      <div className="channel-header-wrapper">
        <div className="channel-avatar-column">
          <img 
            src={channel.thumbnail} 
            alt={channel.name} 
            className="channel-large-avatar"
            onError={(e) => {
              e.currentTarget.src = "/images/user_avatar.svg";
            }}
          />
        </div>

        <div className="channel-meta-column">
          <div className="channel-title-badge-row">
            <h1 className="channel-main-title">{channel.name}</h1>
            {channel.verified && (
              <MdVerified size={22} className="verified-icon" title="Verified Creator" />
            )}
          </div>

          <div className="channel-stats-row">
            <span className="channel-handle-text">{channel.handle || `@${channel.name.toLowerCase().replace(/\s+/g, '')}`}</span>
            <span className="meta-dot">•</span>
            <span className="channel-subs-count">{channel.subscribers}</span>
            <span className="meta-dot">•</span>
            <span>{channelVideos.length} streams in PheW TuBe ({channel.videosCount || 'Active'})</span>
          </div>

          <p className="channel-bio-text">{channel.description}</p>

          <div className="channel-header-actions">
            <button 
              className={`channel-sub-btn-primary ${isSubbed ? 'subbed' : ''}`}
              onClick={() => toggleSubscribe(channel.name)}
            >
              {isSubbed ? 'Subscribed' : 'Subscribe'}
            </button>

            <button 
              className="channel-action-btn-secondary"
              onClick={handleShareChannel}
              title="Share channel link"
            >
              <FiShare2 size={16} />
              <span>Share</span>
            </button>

            <button 
              className="channel-action-btn-secondary"
              onClick={() => window.open(channel.channelUrl, '_blank')}
              title="Visit official YouTube channel"
            >
              <FiExternalLink size={16} />
              <span>Visit on YouTube</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Channel Navigation Tabs */}
      <div className="channel-nav-tabs">
        {['Videos', 'Shorts', 'About'].map((tab) => (
          <button
            key={tab}
            className={`channel-tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {tab === 'Videos' && ` (${channelVideos.length})`}
            {tab === 'Shorts' && ` (${channelShorts.length})`}
          </button>
        ))}
      </div>

      {/* 4. Tab Content */}
      <div className="channel-tab-content-area">
        {activeTab === 'Videos' && (
          <div className="channel-videos-grid-wrapper">
            {channelVideos.length === 0 ? (
              <div className="channel-empty-state">
                <p>This channel has not posted any long-form videos yet.</p>
              </div>
            ) : (
              <div className="video-grid">
                {channelVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'Shorts' && (
          <div className="channel-shorts-grid-wrapper">
            {channelShorts.length === 0 ? (
              <div className="channel-empty-state">
                <SiYoutubeshorts size={36} color="#71717a" />
                <p>No shorts uploaded by @{channel.name} yet.</p>
              </div>
            ) : (
              <div className="channel-shorts-grid">
                {channelShorts.map((short) => (
                  <div 
                    key={short.id} 
                    className="channel-short-card"
                    onClick={() => navigate(`/shorts?id=${short.id}`)}
                  >
                    <div className="short-thumb-box">
                      <img src={short.thumbnail} alt={short.title} />
                      <span className="short-views-pill">{short.views}</span>
                    </div>
                    <h4 className="short-card-title">{short.title}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'About' && (
          <div className="channel-about-card">
            <h3>Description</h3>
            <p className="about-bio">{channel.description}</p>
            <hr className="about-divider" />
            <h3>Channel Details</h3>
            <div className="about-details-grid">
              <div>
                <strong>Channel Name:</strong> <span>{channel.name}</span>
              </div>
              <div>
                <strong>Handle:</strong> <span>{channel.handle}</span>
              </div>
              <div>
                <strong>Subscribers:</strong> <span>{channel.subscribers}</span>
              </div>
              <div>
                <strong>Official YouTube Link:</strong>{' '}
                <a href={channel.channelUrl} target="_blank" rel="noopener noreferrer">
                  {channel.channelUrl}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChannelPage;

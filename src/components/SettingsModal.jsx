import React, { useState } from 'react';
import { IoClose, IoSettingsOutline, IoLogoYoutube, IoCloudDownloadOutline } from 'react-icons/io5';
import { FaTrash, FaCheckCircle, FaKey } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function SettingsModal() {
  const { 
    isSettingsOpen, 
    setIsSettingsOpen, 
    clearHistory, 
    theme, 
    toggleTheme, 
    isAutoplayEnabled, 
    toggleAutoplay,
    youtubeApiKey,
    setYoutubeApiKey,
    isLiveApiEnabled,
    setIsLiveApiEnabled,
    isApiLoading,
    fetchLiveYouTube
  } = useApp();

  const [highQuality, setHighQuality] = useState(true);
  const [apiKeyInput, setApiKeyInput] = useState(youtubeApiKey);
  const [searchTopic, setSearchTopic] = useState('React tutorials');

  if (!isSettingsOpen) return null;

  const handleSaveApiKey = () => {
    setYoutubeApiKey(apiKeyInput.trim());
    toast.success('YouTube API Key saved!', { toastId: 'yt_key_saved' });
  };

  const handleTestApi = async () => {
    if (!apiKeyInput.trim()) {
      toast.warning('Please enter a YouTube API key first', { toastId: 'key_warn' });
      return;
    }
    setYoutubeApiKey(apiKeyInput.trim());
    await fetchLiveYouTube(searchTopic || 'React projects');
  };

  const handleClearAllStorage = () => {
    localStorage.clear();
    toast.success('Local application storage reset! Refreshing...', { toastId: 'storage_reset' });
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setIsSettingsOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
        <button 
          className="auth-close-btn" 
          onClick={() => setIsSettingsOpen(false)}
          aria-label="Close settings"
        >
          <IoClose size={24} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge" style={{ background: 'rgba(62, 166, 255, 0.15)', color: '#3ea6ff' }}>
            <IoSettingsOutline size={28} />
          </div>
          <h2>PheW TuBe Settings</h2>
          <p>Playback preferences, themes & persistent data</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#121215', borderRadius: '10px', border: '1px solid #27272a' }}>
            <div>
              <strong style={{ fontSize: '14px', display: 'block' }}>Display Theme</strong>
              <span style={{ fontSize: '12px', color: '#a1a1aa' }}>Switch between Dark and Light mode</span>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              style={{
                background: theme === 'dark' ? '#27272a' : '#f4f4f5',
                border: '1px solid #3f3f46',
                color: theme === 'dark' ? '#fff' : '#000',
                padding: '6px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '12px'
              }}
            >
              {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#121215', borderRadius: '10px', border: '1px solid #27272a' }}>
            <div>
              <strong style={{ fontSize: '14px', display: 'block' }}>Autoplay Next Video</strong>
              <span style={{ fontSize: '12px', color: '#a1a1aa' }}>Automatically load recommended queue</span>
            </div>
            <button
              type="button"
              onClick={toggleAutoplay}
              style={{
                background: isAutoplayEnabled ? '#22c55e' : '#3f3f46',
                border: 'none',
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '12px'
              }}
            >
              {isAutoplayEnabled ? 'ON' : 'OFF'}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#121215', borderRadius: '10px', border: '1px solid #27272a' }}>
            <div>
              <strong style={{ fontSize: '14px', display: 'block' }}>HD 1080p Stream Quality</strong>
              <span style={{ fontSize: '12px', color: '#a1a1aa' }}>High definition default playback</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setHighQuality(!highQuality);
                toast.info(`HD Mode ${!highQuality ? 'Enabled' : 'Disabled'}`, { toastId: 'set_hd' });
              }}
              style={{
                background: highQuality ? '#3ea6ff' : '#3f3f46',
                border: 'none',
                color: '#fff',
                padding: '6px 14px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '12px'
              }}
            >
              {highQuality ? 'HD' : 'AUTO'}
            </button>
          </div>

          {/* Classroom Requirement: YouTube Data API v3 Live Integration */}
          <div style={{ background: '#121215', borderRadius: '12px', border: '1px solid #27272a', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IoLogoYoutube size={20} color="#ff0033" />
                <strong style={{ fontSize: '14px' }}>YouTube Data API v3</strong>
              </div>
              <span style={{ 
                fontSize: '11px', 
                padding: '2px 8px', 
                borderRadius: '10px', 
                background: youtubeApiKey ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                color: youtubeApiKey ? '#22c55e' : '#a1a1aa',
                border: youtubeApiKey ? '1px solid #22c55e' : '1px solid #3f3f46'
              }}>
                {youtubeApiKey ? '● Live API Ready' : '○ Curated Mode'}
              </span>
            </div>

            <p style={{ fontSize: '11.5px', color: '#a1a1aa', margin: 0 }}>
              Connect Google Cloud YouTube API Key to dynamically fetch live YouTube channels and videos into the feed.
            </p>

            <div style={{ display: 'flex', gap: '6px' }}>
              <input
                type="text"
                placeholder="Paste YouTube API Key (AIzaSy...)"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                style={{
                  flex: 1,
                  background: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  color: '#fff',
                  padding: '6px 10px',
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={handleSaveApiKey}
                style={{
                  background: '#27272a',
                  border: '1px solid #3f3f46',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Save
              </button>
            </div>

            <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
              <input
                type="text"
                placeholder="Topic: e.g. React 19, Latent, Gaming"
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                style={{
                  flex: 1,
                  background: '#18181b',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  color: '#fff',
                  padding: '6px 10px',
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={handleTestApi}
                disabled={isApiLoading}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isApiLoading ? '#3f3f46' : '#ff0033',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: isApiLoading ? 'not-allowed' : 'pointer'
                }}
              >
                <IoCloudDownloadOutline size={14} />
                <span>{isApiLoading ? 'Fetching...' : 'Fetch Live'}</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            <button
              type="button"
              onClick={() => {
                clearHistory();
                setIsSettingsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: '#27272a',
                border: '1px solid #3f3f46',
                color: '#ffffff',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              <FaTrash size={13} color="#f87171" />
              <span>Clear Watch History</span>
            </button>

            <button
              type="button"
              onClick={handleClearAllStorage}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(220, 38, 38, 0.15)',
                border: '1px solid #dc2626',
                color: '#f87171',
                padding: '10px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              <FaTrash size={13} />
              <span>Reset All App Storage to Defaults</span>
            </button>
          </div>
        </div>

        <button 
          type="button"
          className="auth-submit-btn" 
          onClick={() => setIsSettingsOpen(false)}
        >
          Save & Close
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;

import React, { useState } from 'react';
import { IoClose, IoSettingsOutline } from 'react-icons/io5';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function SettingsModal() {
  const { isSettingsOpen, setIsSettingsOpen, clearHistory, theme, toggleTheme, isAutoplayEnabled, toggleAutoplay } = useApp();
  const [highQuality, setHighQuality] = useState(true);

  if (!isSettingsOpen) return null;

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

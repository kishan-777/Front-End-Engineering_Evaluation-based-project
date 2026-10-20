import React from 'react';
import { IoClose, IoHelpCircleOutline } from 'react-icons/io5';
import { FaKeyboard, FaInfoCircle } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function HelpModal() {
  const { isHelpOpen, setIsHelpOpen } = useApp();

  if (!isHelpOpen) return null;

  const shortcuts = [
    { key: 'Space / K', desc: 'Toggle Play / Pause active stream' },
    { key: 'M', desc: 'Mute / Unmute sound' },
    { key: 'F', desc: 'Toggle Fullscreen mode' },
    { key: '← / →', desc: 'Seek 5 seconds backward / forward' },
    { key: '↑ / ↓', desc: 'Increase / Decrease volume by 5%' },
    { key: '0 - 9', desc: 'Jump to 0% - 90% of video duration' }
  ];

  return (
    <div className="auth-modal-overlay" onClick={() => setIsHelpOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
        <button 
          className="auth-close-btn" 
          onClick={() => setIsHelpOpen(false)}
          aria-label="Close help dialog"
        >
          <IoClose size={24} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
            <IoHelpCircleOutline size={30} />
          </div>
          <h2>Help & Keyboard Shortcuts</h2>
          <p>Quick navigation & media player controls for PheW TuBe</p>
        </div>

        <div style={{ margin: '18px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#3ea6ff', fontWeight: '700', fontSize: '13.5px' }}>
            <FaKeyboard size={16} />
            <span>Assigned Player Hotkeys</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {shortcuts.map((sc) => (
              <div 
                key={sc.key} 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#121215',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #27272a',
                  fontSize: '12.5px'
                }}
              >
                <kbd style={{ 
                  background: '#27272a', 
                  padding: '2px 8px', 
                  borderRadius: '4px', 
                  color: '#ffffff', 
                  fontWeight: '700',
                  fontFamily: 'monospace',
                  border: '1px solid #3f3f46'
                }}>
                  {sc.key}
                </kbd>
                <span style={{ color: '#d4d4d8' }}>{sc.desc}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', background: 'rgba(62, 166, 255, 0.1)', border: '1px solid rgba(62, 166, 255, 0.3)', padding: '10px 12px', borderRadius: '8px', marginTop: '14px', alignItems: 'flex-start' }}>
            <FaInfoCircle size={18} color="#3ea6ff" style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ fontSize: '12px', color: '#c5cbd8', lineHeight: '1.45', margin: 0 }}>
              <strong>How Hotkeys Work in React:</strong> A global <code>window.addEventListener('keydown', handleKey)</code> listens for keyboard events. When focus is outside form inputs, pressing a shortcut directly manipulates video playback controls via DOM refs.
            </p>
          </div>
        </div>

        <button 
          type="button"
          className="auth-submit-btn" 
          onClick={() => setIsHelpOpen(false)}
        >
          Got It!
        </button>
      </div>
    </div>
  );
}

export default HelpModal;

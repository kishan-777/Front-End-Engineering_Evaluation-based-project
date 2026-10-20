import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiVideoUploadFill } from 'react-icons/ri';
import { useApp } from '../context/AppContext';

function UploadModal() {
  const { isUploadOpen, setIsUploadOpen, uploadVideo, categories } = useApp();
  const [formData, setFormData] = useState({
    title: '',
    category: 'React JS',
    youtubeId: '',
    duration: '14:20',
    description: ''
  });
  const [error, setError] = useState('');

  if (!isUploadOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('Please provide a video title.');
      return;
    }

    // Extract youtube ID if full URL was pasted
    let cleanYtId = formData.youtubeId.trim();
    if (cleanYtId.includes('v=')) {
      cleanYtId = cleanYtId.split('v=')[1].split('&')[0];
    } else if (cleanYtId.includes('youtu.be/')) {
      cleanYtId = cleanYtId.split('youtu.be/')[1].split('?')[0];
    } else if (!cleanYtId) {
      cleanYtId = 'k3G_n_L2B3g'; // High quality React demo fallback
    }

    uploadVideo({
      title: formData.title.trim(),
      category: formData.category,
      youtubeId: cleanYtId,
      videoUrl: `https://www.youtube.com/watch?v=${cleanYtId}`,
      duration: formData.duration || '10:00',
      description: formData.description.trim() || 'Community stream uploaded directly to PheW TuBe platform.'
    });
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setIsUploadOpen(false)}>
      <div className="auth-modal-card upload-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="auth-close-btn" 
          onClick={() => setIsUploadOpen(false)}
          aria-label="Close modal"
        >
          <IoClose size={24} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge" style={{ background: 'rgba(220, 38, 38, 0.15)', color: '#dc2626' }}>
            <RiVideoUploadFill size={30} />
          </div>
          <h2>Upload Video to PheW TuBe</h2>
          <p>Add a community stream or YouTube video into your local catalog</p>
        </div>

        {error && <div className="auth-error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-group">
            <label htmlFor="upload-title">Video Title</label>
            <div className="auth-input-wrapper">
              <input 
                id="upload-title"
                type="text" 
                name="title" 
                placeholder="e.g. Building an AI Assistant with React & Node.js"
                value={formData.title}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="upload-category">Category</label>
            <div className="auth-input-wrapper">
              <select 
                id="upload-category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none' }}
              >
                {categories.filter(c => c !== 'All').map(cat => (
                  <option key={cat} value={cat} style={{ background: '#18181b', color: '#fff' }}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="upload-ytid">YouTube Video ID or URL (Optional)</label>
            <div className="auth-input-wrapper">
              <input 
                id="upload-ytid"
                type="text" 
                name="youtubeId" 
                placeholder="e.g. FxgM9k1rg0Q or full link"
                value={formData.youtubeId}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="upload-desc">Description</label>
            <div className="auth-input-wrapper" style={{ padding: '8px 12px' }}>
              <textarea 
                id="upload-desc"
                name="description" 
                rows="3"
                placeholder="Brief summary of your stream..."
                value={formData.description}
                onChange={handleChange}
                style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', resize: 'none', fontFamily: 'inherit', fontSize: '13px' }}
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" style={{ marginTop: '12px' }}>
            Publish Video to Feed
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadModal;

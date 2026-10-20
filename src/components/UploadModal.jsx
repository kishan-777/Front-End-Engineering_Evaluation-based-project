import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { RiVideoUploadFill, RiFolderVideoLine, RiCheckLine } from 'react-icons/ri';
import { useApp } from '../context/AppContext';

function UploadModal() {
  const { isUploadOpen, setIsUploadOpen, uploadVideo, categories } = useApp();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Coding & Tech',
    youtubeId: '',
    duration: '06:45',
    description: ''
  });
  const [error, setError] = useState('');

  if (!isUploadOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      // Generate clean title from filename if title is currently empty
      const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      const formattedTitle = nameWithoutExt.replace(/[_-]+/g, ' ');
      setFormData((prev) => ({
        ...prev,
        title: prev.title.trim() ? prev.title : formattedTitle
      }));

      // Create preview object URL for videos / images
      try {
        const previewUrl = URL.createObjectURL(file);
        setFilePreview(previewUrl);
      } catch {
        setFilePreview(null);
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('Please provide a video title or select a file.');
      return;
    }

    // Clean YouTube ID if pasted
    let cleanYtId = formData.youtubeId.trim();
    if (cleanYtId.includes('v=')) {
      cleanYtId = cleanYtId.split('v=')[1].split('&')[0];
    } else if (cleanYtId.includes('youtu.be/')) {
      cleanYtId = cleanYtId.split('youtu.be/')[1].split('?')[0];
    } else if (!cleanYtId) {
      cleanYtId = 'k3G_n_L2B3g'; // High quality fallback stream
    }

    const fileSizeStr = selectedFile 
      ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`
      : 'Local Stream';

    const uploaded = uploadVideo({
      title: formData.title.trim(),
      category: formData.category,
      youtubeId: cleanYtId,
      videoUrl: `https://www.youtube.com/watch?v=${cleanYtId}`,
      duration: formData.duration || '05:30',
      description: formData.description.trim() || 'Community video uploaded directly to PheW TuBe platform.',
      thumbnail: (selectedFile && selectedFile.type.startsWith('image')) ? filePreview : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
      fileName: selectedFile ? selectedFile.name : null,
      fileSize: fileSizeStr,
      localFileUrl: filePreview
    });

    // Reset state & redirect to "Your Videos" / My Uploads page
    setSelectedFile(null);
    setFilePreview(null);
    setFormData({
      title: '',
      category: 'Coding & Tech',
      youtubeId: '',
      duration: '06:45',
      description: ''
    });
    navigate('/my-uploads');
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
            <RiVideoUploadFill size={28} />
          </div>
          <h2>Upload Video to PheW TuBe</h2>
          <p>Choose a video file from your computer or import stream details</p>
        </div>

        {error && <div className="auth-error-banner">{error}</div>}

        {/* 1. Native File Explorer Picker Area */}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="video/*,image/*"
          style={{ display: 'none' }}
        />

        <div 
          className={`upload-dropzone-box ${selectedFile ? 'has-file' : ''}`}
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          {selectedFile ? (
            <div className="selected-file-details">
              <div className="file-badge-icon">
                <RiCheckLine size={24} color="#22c55e" />
              </div>
              <div className="file-meta-col">
                <strong>{selectedFile.name}</strong>
                <span>{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to publish</span>
              </div>
              <button 
                type="button" 
                className="change-file-button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current && fileInputRef.current.click();
                }}
              >
                Change File
              </button>
            </div>
          ) : (
            <div className="dropzone-prompt">
              <RiFolderVideoLine size={42} color="#dc2626" />
              <h4>Select Video File from Computer</h4>
              <p>Click here to open File Explorer (supports MP4, MKV, WebM, MOV, and images)</p>
              <button type="button" className="browse-files-pill">
                Browse Files
              </button>
            </div>
          )}
        </div>

        {/* 2. Metadata Form */}
        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: '16px' }}>
          <div className="auth-input-group">
            <label htmlFor="upload-title">Video Title</label>
            <div className="auth-input-wrapper">
              <input 
                id="upload-title"
                type="text" 
                name="title" 
                placeholder="e.g. My Presentation Walkthrough & React Demo"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="upload-row-split" style={{ display: 'flex', gap: '12px' }}>
            <div className="auth-input-group" style={{ flex: 1 }}>
              <label htmlFor="upload-category">Category</label>
              <div className="auth-input-wrapper">
                <select 
                  id="upload-category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  style={{ background: 'transparent', border: 'none', color: 'inherit', width: '100%', outline: 'none' }}
                >
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat} style={{ background: '#18181b', color: '#fff' }}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="auth-input-group" style={{ width: '130px' }}>
              <label htmlFor="upload-duration">Duration</label>
              <div className="auth-input-wrapper">
                <input 
                  id="upload-duration"
                  type="text" 
                  name="duration" 
                  placeholder="08:20"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="upload-ytid">YouTube ID / Embed Link (Optional)</label>
            <div className="auth-input-wrapper">
              <input 
                id="upload-ytid"
                type="text" 
                name="youtubeId" 
                placeholder="Paste YouTube URL or leave blank for default stream"
                value={formData.youtubeId}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="upload-desc">Description</label>
            <div className="auth-input-wrapper" style={{ padding: '8px 12px' }}>
              <textarea 
                id="upload-desc"
                name="description" 
                rows="2"
                placeholder="Brief summary of your project or presentation..."
                value={formData.description}
                onChange={handleInputChange}
                style={{ background: 'transparent', border: 'none', color: 'inherit', width: '100%', outline: 'none', resize: 'none', fontFamily: 'inherit', fontSize: '13px' }}
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

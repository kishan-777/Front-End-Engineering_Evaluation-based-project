import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiVideoUploadFill, RiDeleteBin6Line, RiVideoLine } from 'react-icons/ri';
import { FaPlay, FaEye, FaHeart } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function MyUploads() {
  const { uploadedVideos, deleteUploadedVideo, setIsUploadOpen, currentUser } = useApp();
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Studio Banner / Profile Header */}
      <div className="my-uploads-header-card">
        <div className="my-uploads-profile-col">
          <img 
            src={currentUser.avatar || "/images/user_avatar.svg"} 
            alt={currentUser.name} 
            className="my-uploads-avatar"
            onError={(e) => {
              e.currentTarget.src = "/images/user_avatar.svg";
            }}
          />
          <div>
            <h2>{currentUser.isLoggedIn ? `${currentUser.name}'s Studio` : 'Your Videos (Channel Content)'}</h2>
            <p className="my-uploads-subtext">
              Manage and stream community videos uploaded locally to your PheW TuBe catalog ({uploadedVideos.length} total uploads)
            </p>
          </div>
        </div>

        <button 
          className="my-uploads-btn-primary"
          onClick={() => setIsUploadOpen(true)}
        >
          <RiVideoUploadFill size={18} />
          <span>Upload New Video</span>
        </button>
      </div>

      {/* Videos List / Grid */}
      {uploadedVideos.length === 0 ? (
        <div className="my-uploads-empty-box">
          <div className="empty-icon-circle">
            <RiVideoLine size={48} color="#71717a" />
          </div>
          <h3>No videos uploaded yet</h3>
          <p>
            Choose a video or image file from your computer and publish it to the PheW TuBe feed.
          </p>
          <button 
            className="my-uploads-btn-primary"
            style={{ marginTop: '16px' }}
            onClick={() => setIsUploadOpen(true)}
          >
            <RiVideoUploadFill size={18} />
            <span>Select File to Upload</span>
          </button>
        </div>
      ) : (
        <div className="my-uploads-grid">
          {uploadedVideos.map((video) => (
            <div key={video.id} className="my-upload-card">
              <div 
                className="my-upload-thumb-wrapper"
                onClick={() => navigate(`/watch/${video.slug || video.id}`)}
              >
                <img src={video.thumbnail} alt={video.title} className="my-upload-thumb-img" />
                <span className="my-upload-duration">{video.duration}</span>
                <div className="my-upload-play-hover">
                  <FaPlay size={16} />
                </div>
              </div>

              <div className="my-upload-info">
                <div className="my-upload-tag-row">
                  <span className="my-upload-category-badge">{video.category}</span>
                  <span className="my-upload-time">{video.timestamp}</span>
                </div>

                <h3 
                  className="my-upload-title" 
                  onClick={() => navigate(`/watch/${video.slug || video.id}`)}
                  title={video.title}
                >
                  {video.title}
                </h3>

                {video.fileName && (
                  <span className="my-upload-filename-pill">
                    📁 {video.fileName} {video.fileSize ? `(${video.fileSize})` : ''}
                  </span>
                )}

                <div className="my-upload-stats-row">
                  <span><FaEye size={12} /> {video.views}</span>
                  <span><FaHeart size={12} /> {video.likes} likes</span>
                </div>

                <div className="my-upload-actions-row">
                  <button 
                    className="my-upload-watch-btn"
                    onClick={() => navigate(`/watch/${video.slug || video.id}`)}
                  >
                    <FaPlay size={11} /> Watch
                  </button>

                  <button 
                    className="my-upload-delete-btn"
                    onClick={() => deleteUploadedVideo(video.id)}
                    title="Delete uploaded video"
                  >
                    <RiDeleteBin6Line size={15} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyUploads;

import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaYoutube, FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaTrashAlt, FaDatabase, FaCheckCircle } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function AuthModal() {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    loginUser, 
    registerUser, 
    registeredUsers, 
    clearAllProfiles 
  } = useApp();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSignUp) {
      // Sign In only requires Username and Password
      if (!formData.username.trim() || !formData.password) {
        setError('Please enter your username and password.');
        return;
      }

      // Check if user exists in registeredUsers
      const existing = (registeredUsers || []).find(
        (u) => u.username.toLowerCase() === formData.username.trim().toLowerCase()
      );

      loginUser({
        name: formData.username.trim(),
        email: existing?.email || `${formData.username.trim().toLowerCase().replace(/\s+/g, '')}@phew.tube`
      });
    } else {
      // Sign Up requires Username, Email, and Password
      if (!formData.username.trim() || !formData.email.trim() || !formData.password) {
        setError('Please fill in username, email, and password.');
        return;
      }

      const result = registerUser({
        username: formData.username.trim(),
        email: formData.email.trim(),
        password: formData.password
      });

      if (!result.success) {
        setError('User already registered with this username or email! Please switch to Sign In.');
        setIsSignUp(false); // Automatically switch to Sign In
      }
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setIsAuthModalOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="auth-close-btn" 
          onClick={() => setIsAuthModalOpen(false)}
          aria-label="Close dialog"
        >
          <IoClose size={24} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge">
            <FaYoutube size={32} color="#dc2626" />
            <span>PheW TuBe</span>
          </div>
          <h2>{isSignUp ? 'Create your Account' : 'Sign in to PheW TuBe'}</h2>
          <p>to save playlists, subscribe to channels, and post comments</p>
        </div>

        <div className="auth-tabs">
          <button 
            type="button"
            className={`auth-tab-btn ${!isSignUp ? 'active' : ''}`}
            onClick={() => { setIsSignUp(false); setError(''); }}
          >
            Sign In
          </button>
          <button 
            type="button"
            className={`auth-tab-btn ${isSignUp ? 'active' : ''}`}
            onClick={() => { setIsSignUp(true); setError(''); }}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="auth-error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Username Field */}
          <div className="auth-input-group">
            <label htmlFor="auth-username">Username</label>
            <div className="auth-input-wrapper">
              <FaUser className="auth-input-icon" />
              <input 
                id="auth-username"
                type="text" 
                name="username" 
                placeholder="e.g. Kishan"
                value={formData.username}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </div>

          {/* Email Field (Only on Sign Up) */}
          {isSignUp && (
            <div className="auth-input-group">
              <label htmlFor="auth-email">Email Address</label>
              <div className="auth-input-wrapper">
                <FaEnvelope className="auth-input-icon" />
                <input 
                  id="auth-email"
                  type="email" 
                  name="email" 
                  placeholder="e.g. kishan@chitkara.edu.in"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          {/* Password Field with Mask/Unmask Eye Icon */}
          <div className="auth-input-group">
            <label htmlFor="auth-password">Password</label>
            <div className="auth-input-wrapper password-wrapper">
              <FaLock className="auth-input-icon" />
              <input 
                id="auth-password"
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              <button 
                type="button" 
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Mask password" : "Unmask password"}
                aria-label={showPassword ? "Mask password" : "Unmask password"}
              >
                {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        {/* LocalStorage Inspector & Clear Profiles Button (Viva Defense Feature) */}
        <div className="auth-storage-footer">
          <div className="auth-storage-meta">
            <FaDatabase className="storage-icon" />
            <span>
              LocalStorage: <strong>{registeredUsers?.length || 0}</strong> {registeredUsers?.length === 1 ? 'account' : 'accounts'} registered
            </span>
          </div>
          <button 
            type="button" 
            className="auth-clear-profiles-btn"
            onClick={clearAllProfiles}
            title="Wipe registered profiles from browser LocalStorage for clean demonstration"
          >
            <FaTrashAlt size={11} /> Clear All Saved Profiles
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

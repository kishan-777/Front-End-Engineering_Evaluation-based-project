import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaYoutube, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, loginUser } = useApp();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
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
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (isSignUp && !formData.name) {
      setError('Please enter your full name.');
      return;
    }

    loginUser({
      name: formData.name || formData.email.split('@')[0],
      email: formData.email
    });
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
          {isSignUp && (
            <div className="auth-input-group">
              <label htmlFor="auth-name">Full Name</label>
              <div className="auth-input-wrapper">
                <FaUser className="auth-input-icon" />
                <input 
                  id="auth-name"
                  type="text" 
                  name="name" 
                  placeholder="e.g. Kishan Singh (G15)"
                  value={formData.name}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
            </div>
          )}

          <div className="auth-input-group">
            <label htmlFor="auth-email">Email Address</label>
            <div className="auth-input-wrapper">
              <FaEnvelope className="auth-input-icon" />
              <input 
                id="auth-email"
                type="email" 
                name="email" 
                placeholder="student@chitkara.edu.in"
                value={formData.email}
                onChange={handleChange}
                autoFocus={!isSignUp}
              />
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="auth-password">Password</label>
            <div className="auth-input-wrapper">
              <FaLock className="auth-input-icon" />
              <input 
                id="auth-password"
                type="password" 
                name="password" 
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className="auth-footer-note">
          Demo Account Mode: Group G15 Evaluation-II
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

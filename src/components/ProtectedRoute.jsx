import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MdLockOutline, MdOutlineAccountCircle } from 'react-icons/md';

/**
 * ProtectedRoute Component (Phase 2 Core Requirement)
 * Strictly protects authenticated views (Subscriptions, History, Liked, Watch Later, Playlists, My Uploads).
 * Implemented following teacher's pattern (Mr. Shubham Kumar - G15).
 */
const ProtectedRoute = ({ children, title = "Sign in to access this page" }) => {
  const { currentUser, setIsAuthModalOpen } = useApp();

  if (!currentUser || !currentUser.isLoggedIn) {
    return (
      <div className="protected-route-wrapper">
        <div className="protected-card">
          <div className="protected-icon-circle">
            <MdLockOutline size={48} color="#ff0033" />
          </div>
          <h2 className="protected-title">{title}</h2>
          <p className="protected-subtitle">
            This section is protected. Sign in or create an account to view your personalized library, 
            subscriptions, saved playlists, and watch history on PheW TuBe.
          </p>

          <div className="protected-actions">
            <button 
              className="protected-signin-btn"
              onClick={() => setIsAuthModalOpen(true)}
              title="Open Sign In Dialog"
            >
              <MdOutlineAccountCircle size={20} />
              <span>Sign In / Register</span>
            </button>
          </div>

          <div className="protected-guest-hint">
            <span>Or explore public videos &amp; shorts on the </span>
            <a href="/" className="protected-home-link">Home Page</a>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;

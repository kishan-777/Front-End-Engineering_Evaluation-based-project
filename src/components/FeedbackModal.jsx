import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineFeedback } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function FeedbackModal() {
  const { isFeedbackOpen, setIsFeedbackOpen } = useApp();
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState('5');

  if (!isFeedbackOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedbackText.trim()) {
      toast.warn('Please enter feedback text before sending.', { toastId: 'fb_empty' });
      return;
    }

    toast.success('Thank you for your feedback! It helps improve PheW TuBe 🚀', { toastId: 'fb_sent' });
    setFeedbackText('');
    setIsFeedbackOpen(false);
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setIsFeedbackOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
        <button 
          className="auth-close-btn" 
          onClick={() => setIsFeedbackOpen(false)}
          aria-label="Close feedback dialog"
        >
          <IoClose size={24} />
        </button>

        <div className="auth-header">
          <div className="auth-logo-badge" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}>
            <MdOutlineFeedback size={28} />
          </div>
          <h2>Send Us Feedback</h2>
          <p>Tell us your thoughts on PheW TuBe for Evaluation-II</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: '14px' }}>
          <div className="auth-input-group">
            <label htmlFor="fb-rating">Experience Rating</label>
            <div className="auth-input-wrapper">
              <select
                id="fb-rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none' }}
              >
                <option value="5" style={{ background: '#18181b' }}>⭐⭐⭐⭐⭐ Outstanding (5/5)</option>
                <option value="4" style={{ background: '#18181b' }}>⭐⭐⭐⭐ Very Good (4/5)</option>
                <option value="3" style={{ background: '#18181b' }}>⭐⭐⭐ Good (3/5)</option>
              </select>
            </div>
          </div>

          <div className="auth-input-group">
            <label htmlFor="fb-message">Your Feedback / Suggestion</label>
            <div className="auth-input-wrapper" style={{ padding: '8px 12px' }}>
              <textarea 
                id="fb-message"
                rows="4"
                placeholder="What did you like or what can we improve?"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', resize: 'none', fontFamily: 'inherit', fontSize: '13px' }}
                autoFocus
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" style={{ marginTop: '10px' }}>
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;

import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { 
  FaYoutube, 
  FaUserPlus, 
  FaSignInAlt, 
  FaUserCheck, 
  FaExclamationCircle, 
  FaTrashAlt, 
  FaInfoCircle, 
  FaUser, 
  FaLock, 
  FaEnvelope, 
  FaEye, 
  FaEyeSlash,
  FaDatabase
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

/**
 * AuthModal Component
 * Implements Authentication & Registration based on Queen's Kitchen architecture:
 * - Radio Mode Selector (New User / Registered User)
 * - Duplicate Account Detection & Automatic Switch to Quick Log In
 * - Select Saved Profile 1-Click Dropdown with Clear Profiles Action
 * - Clean input fields without distracting placeholder text
 * - Active session banner with dedicated Sign Out control
 * - Evaluator Reset for fresh viva testing
 */
function AuthModal() {
  const { 
    isAuthModalOpen, 
    setIsAuthModalOpen, 
    currentUser, 
    loginUser, 
    logoutUser, 
    registerUser, 
    registeredUsers, 
    clearAllProfiles,
    categories 
  } = useApp();

  const [authMode, setAuthMode] = useState('signup'); // 'signup' | 'login'
  
  // Registration form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [preferredCategory, setPreferredCategory] = useState('All');
  
  // Login form fields
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedRegisteredId, setSelectedRegisteredId] = useState('');
  
  // UI and Validation states
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [alreadyRegisteredMsg, setAlreadyRegisteredMsg] = useState('');

  // Auto-select initial user or mode when opening
  useEffect(() => {
    if (isAuthModalOpen) {
      setError('');
      setAlreadyRegisteredMsg('');
      if (registeredUsers && registeredUsers.length > 0) {
        setSelectedRegisteredId(registeredUsers[0].username);
        // If not logged in and users exist, default to login; otherwise signup
        if (!currentUser?.isLoggedIn) {
          setAuthMode('login');
        }
      } else {
        setAuthMode('signup');
      }
    }
  }, [isAuthModalOpen, registeredUsers, currentUser]);

  if (!isAuthModalOpen) return null;

  // Handle New User Registration with Duplicate Prevention (Queens Kitchen logic)
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setError('');
    setAlreadyRegisteredMsg('');

    const trimmedName = name.trim();
    if (!trimmedName || trimmedName.length < 2) {
      setError('Please enter a valid username (minimum 2 characters).');
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 3) {
      setError('Please enter a password (minimum 3 characters).');
      return;
    }

    // Check if username or email is already registered (DUPLICATE DETECTION)
    const existing = (registeredUsers || []).find(
      (u) => u.username.toLowerCase() === trimmedName.toLowerCase() || 
             (u.email && u.email.toLowerCase() === trimmedEmail)
    );

    if (existing) {
      // Switch directly to login tab, pre-select this user, and notify
      setAuthMode('login');
      setSelectedRegisteredId(existing.username);
      setLoginUsername(existing.username);
      setAlreadyRegisteredMsg(`Account already registered as "${existing.username}" (${existing.email || existing.username + '@phew.tube'}). Switched to Quick Log In to prevent duplicate accounts.`);
      
      toast.info(`Already registered as "${existing.username}". Redirected to Quick Log In!`, {
        icon: '🎬',
        position: 'top-right',
        autoClose: 3500
      });
      return;
    }

    // New unique user registration
    const result = registerUser({
      username: trimmedName,
      email: trimmedEmail,
      password: password
    });

    if (result.success) {
      setName('');
      setEmail('');
      setPassword('');
      setIsAuthModalOpen(false);
    } else {
      setError(result.error || 'Failed to register account.');
    }
  };

  // Handle Quick Login (via Dropdown or manual credentials)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!registeredUsers || registeredUsers.length === 0) {
      setError('No registered users found on this device. Please select "New User (Sign Up)" to create an account.');
      return;
    }

    // Match by selected ID from dropdown OR typed username/email
    const targetQuery = (loginUsername.trim() || selectedRegisteredId).toLowerCase();
    const matchedUser = (registeredUsers || []).find(
      (u) => u.username.toLowerCase() === targetQuery || (u.email && u.email.toLowerCase() === targetQuery)
    );

    if (!matchedUser) {
      setError('Account not found with that username/email. Please check or sign up as a New User.');
      return;
    }

    // STRICT PASSWORD VERIFICATION
    if (!loginPassword) {
      setError(`Please enter the password for "${matchedUser.username}".`);
      return;
    }

    if (matchedUser.password && matchedUser.password !== loginPassword) {
      setError('Incorrect password! Please enter the correct password for this account.');
      return;
    }

    loginUser({
      name: matchedUser.username,
      email: matchedUser.email || `${matchedUser.username.toLowerCase()}@phew.tube`
    });
    setLoginPassword('');
    setIsAuthModalOpen(false);
  };

  // Quick 1-click login from saved profile dropdown with strict password verification
  const handleQuickProfileLogin = () => {
    setError('');
    const targetQuery = (selectedRegisteredId || registeredUsers?.[0]?.username || '').toLowerCase();
    const matchedUser = (registeredUsers || []).find(
      (u) => u.username.toLowerCase() === targetQuery
    );

    if (!matchedUser) {
      setError('No matching profile selected.');
      return;
    }

    // STRICT PASSWORD VERIFICATION
    if (!loginPassword) {
      setError(`Please enter the password for "${matchedUser.username}" below to sign in.`);
      return;
    }

    if (matchedUser.password && matchedUser.password !== loginPassword) {
      setError('Incorrect password! Please enter the correct password for this account.');
      return;
    }

    loginUser({
      name: matchedUser.username,
      email: matchedUser.email || `${matchedUser.username.toLowerCase()}@phew.tube`
    });
    setLoginPassword('');
    setIsAuthModalOpen(false);
  };

  // Clear only registered user profiles
  const handleClearSavedProfiles = () => {
    clearAllProfiles();
    setSelectedRegisteredId('');
    setLoginUsername('');
    setAlreadyRegisteredMsg('');
  };

  return (
    <div className="auth-modal-overlay" onClick={() => setIsAuthModalOpen(false)}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Close Button */}
        <button 
          className="auth-close-btn" 
          onClick={() => setIsAuthModalOpen(false)}
          title="Close dialog"
          aria-label="Close dialog"
        >
          <IoClose size={22} />
        </button>

        {/* Modal Brand Header */}
        <div className="auth-header">
          <div className="auth-logo-badge">
            <FaYoutube size={30} color="#dc2626" />
            <span>PheW TuBe</span>
          </div>
          <h2>PheW TuBe Account Access</h2>
          <p className="auth-subtitle">
            {currentUser?.isLoggedIn 
              ? `Currently active: ${currentUser.name} (${currentUser.email})` 
              : 'Please register or log in to like videos, save playlists & post comments'}
          </p>
        </div>

        {/* Mode Selector: Radio Buttons (Queen's Kitchen Usability) */}
        <div className="auth-mode-selector">
          <label className={`radio-label ${authMode === 'signup' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="authMode" 
              value="signup" 
              checked={authMode === 'signup'} 
              onChange={() => { 
                setAuthMode('signup'); 
                setError(''); 
                setAlreadyRegisteredMsg('');
              }} 
            />
            <FaUserPlus className="radio-icon" />
            <span>New User (Sign Up)</span>
          </label>

          <label className={`radio-label ${authMode === 'login' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="authMode" 
              value="login" 
              checked={authMode === 'login'} 
              onChange={() => { 
                setAuthMode('login'); 
                setError(''); 
              }} 
            />
            <FaSignInAlt className="radio-icon" />
            <span>Registered User (Log In)</span>
          </label>
        </div>

        {/* Already Registered Info Banner (Duplicate Prevention Alert) */}
        {alreadyRegisteredMsg && authMode === 'login' && (
          <div className="already-registered-alert">
            <FaInfoCircle size={18} className="alert-icon" />
            <div className="alert-text">
              <strong>Account Already Exists</strong>
              <p>{alreadyRegisteredMsg}</p>
            </div>
          </div>
        )}

        {/* Error Alert Box */}
        {error && (
          <div className="auth-error-box">
            <FaExclamationCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Forms Container */}
        {authMode === 'signup' ? (
          /* New User Registration Form */
          <form className="auth-form" onSubmit={handleSignUpSubmit}>
            <div className="form-group">
              <label htmlFor="reg-name">Username / Channel Name *</label>
              <div className="auth-input-wrapper">
                <FaUser className="auth-input-icon" />
                <input 
                  id="reg-name"
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  autoFocus
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reg-email">Email Address *</label>
              <div className="auth-input-wrapper">
                <FaEnvelope className="auth-input-icon" />
                <input 
                  id="reg-email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="reg-password">Password *</label>
                <div className="auth-input-wrapper password-wrapper">
                  <FaLock className="auth-input-icon" />
                  <input 
                    id="reg-password"
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
                    required
                  />
                  <button 
                    type="button" 
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Mask password" : "Unmask password"}
                  >
                    {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                  </button>
                </div>
              </div>

              <div className="form-group half">
                <label htmlFor="reg-category">Favorite Category</label>
                <select 
                  id="reg-category"
                  value={preferredCategory} 
                  onChange={(e) => setPreferredCategory(e.target.value)}
                  className="auth-select"
                >
                  <option value="All">All Categories</option>
                  {(categories || ['React JS', 'Music', 'Gaming', 'Podcasts', 'News']).filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn primary">
              <FaUserCheck /> Register & Enter PheW TuBe
            </button>
          </form>
        ) : (
          /* Registered User Quick Log In (Queen's Kitchen 1-Click Dropdown Usability) */
          <form className="auth-form" onSubmit={handleLoginSubmit}>
            {registeredUsers && registeredUsers.length > 0 ? (
              <div className="form-group">
                <div className="label-with-action">
                  <label htmlFor="login-select-profile">Select Saved Profile (1-Click Login)</label>
                  <button 
                    type="button" 
                    className="clear-profiles-link-btn"
                    onClick={handleClearSavedProfiles}
                    title="Remove saved profiles from storage"
                  >
                    <FaTrashAlt size={10} /> Clear Profiles
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select 
                    id="login-select-profile"
                    value={selectedRegisteredId} 
                    onChange={(e) => {
                      setSelectedRegisteredId(e.target.value);
                      setLoginUsername(e.target.value);
                    }}
                    className="auth-select"
                    style={{ flex: 1 }}
                  >
                    {registeredUsers.map(u => (
                      <option key={u.username} value={u.username}>
                        {u.username} ({u.email || u.username.toLowerCase() + '@phew.tube'})
                      </option>
                    ))}
                  </select>
                  <button 
                    type="button" 
                    className="auth-quick-login-btn"
                    onClick={handleQuickProfileLogin}
                    title="Instant 1-Click Log In as selected profile"
                  >
                    <FaSignInAlt /> Log In
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty-guests-notice">
                <p>No previous accounts registered on this browser yet.</p>
                <button 
                  type="button" 
                  className="switch-link-btn"
                  onClick={() => setAuthMode('signup')}
                >
                  Click here to register as a New User
                </button>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="login-username">Or Enter Registered Username / Email</label>
              <div className="auth-input-wrapper">
                <FaUser className="auth-input-icon" />
                <input 
                  id="login-username"
                  type="text" 
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <div className="auth-input-wrapper password-wrapper">
                <FaLock className="auth-input-icon" />
                <input 
                  id="login-password"
                  type={showPassword ? "text" : "password"} 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder=""
                />
                <button 
                  type="button" 
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Mask password" : "Unmask password"}
                >
                  {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn red">
              <FaSignInAlt /> Sign In to PheW TuBe
            </button>
          </form>
        )}

        {/* Modal Bottom / Footer Actions */}
        <div className="auth-modal-bottom-actions">
          {/* Active User Sign Out Control */}
          {currentUser?.isLoggedIn && (
            <div className="modal-footer-active">
              <span>Signed in as <strong>{currentUser.name}</strong></span>
              <button type="button" className="logout-link-btn" onClick={logoutUser}>
                Sign Out
              </button>
            </div>
          )}

          {/* LocalStorage Inspector & Clear Profiles Button */}
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
              onClick={handleClearSavedProfiles}
              title="Wipe registered profiles from browser LocalStorage for clean demonstration"
            >
              <FaTrashAlt size={11} /> Clear All Saved Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

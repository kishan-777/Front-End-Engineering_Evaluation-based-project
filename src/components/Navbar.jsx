import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  IoMenu, 
  IoSearchOutline, 
  IoClose, 
  IoNotificationsOutline,
  IoSunnyOutline,
  IoMoonOutline
} from 'react-icons/io5';
import { IoMdMic } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { MdSwitchAccount } from 'react-icons/md';
import { 
  FaYoutube, 
  FaUserCircle, 
  FaSignOutAlt, 
  FaSearch, 
  FaUserPlus, 
  FaCheckCircle 
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useApp } from '../context/AppContext';

function Navbar() {
  const { 
    videos, 
    searchQuery, 
    setSearchQuery, 
    isSidebarExpanded, 
    setIsSidebarExpanded,
    currentUser,
    setIsAuthModalOpen,
    loginUser,
    logoutUser,
    registeredUsers,
    setSelectedCategory,
    setIsUploadOpen,
    notifications,
    unreadCount,
    markAllNotificationsRead,
    theme,
    toggleTheme
  } = useApp();

  const [isMicActive, setIsMicActive] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);
  const notifWrapperRef = useRef(null);
  const userMenuRef = useRef(null);

  // Live Suggestions computation
  const suggestions = searchQuery.trim().length > 0
    ? videos.filter((v) => 
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
      if (notifWrapperRef.current && !notifWrapperRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    navigate('/');
  };

  const handleSelectSuggestion = (video) => {
    setSearchQuery(video.title);
    setShowSuggestions(false);
    navigate(`/watch/${video.slug || video.id}`);
  };

  const handleMicClick = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Browser Speech API fallback
      setIsMicActive(true);
      toast.info('🎙️ Listening... (Voice Search active)');
      setTimeout(() => {
        setIsMicActive(false);
        setSearchQuery('React');
        toast.success('Voice recognized: "React"');
        navigate('/');
      }, 1800);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsMicActive(true);
        toast.info('🎙️ Listening... Speak now (e.g. "React", "Samay", "GTA")');
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        toast.success(`Voice recognized: "${transcript}" 🎯`);
        setIsMicActive(false);
        navigate('/');
      };

      recognition.onerror = (event) => {
        setIsMicActive(false);
        if (event.error === 'not-allowed') {
          toast.warn('Microphone permission blocked. Please allow mic in browser settings.');
        } else {
          toast.info('Could not recognize voice. Please try speaking again.');
        }
      };

      recognition.onend = () => {
        setIsMicActive(false);
      };

      recognition.start();
    } catch {
      setIsMicActive(false);
      toast.error('Voice search failed to start on this device.');
    }
  };

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleUploadClick = () => {
    setIsUploadOpen(true);
  };

  return (
    <header className="navbar">
      {/* Left: Hamburger & Brand Logo */}
      <div className="nav-left">
        <button 
          className="icon-btn menu-btn" 
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)} 
          title="Toggle Sidebar"
          aria-label="Toggle menu"
        >
          <IoMenu size={22} />
        </button>

        <Link 
          to="/" 
          className="logo-container" 
          onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} 
          title="PheW TuBe Home"
        >
          <FaYoutube className="yt-logo-icon" size={28} />
          <span className="yt-logo-text">PheW TuBe</span>
          <span className="country-code">IN</span>
        </Link>
      </div>

      {/* Center: Search Bar with Live Suggestions Dropdown */}
      <div className="nav-center" ref={searchWrapperRef}>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search (React, DSA, Gaming, Latent, Music...)" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn" 
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                <IoClose size={18} />
              </button>
            )}
          </div>
          <button type="submit" className="search-submit-btn" title="Search">
            <IoSearchOutline size={19} />
          </button>
        </form>

        {/* Live Search Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="search-suggestions-dropdown">
            {suggestions.map((item) => (
              <div 
                key={item.id} 
                className="suggestion-item"
                onClick={() => handleSelectSuggestion(item)}
              >
                <FaSearch className="suggestion-icon" />
                <div className="suggestion-text-col">
                  <span className="suggestion-title">{item.title}</span>
                  <span className="suggestion-sub">{item.channelName} • {item.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Voice Search Mic */}
        <button 
          className={`icon-btn mic-btn ${isMicActive ? 'mic-active' : ''}`}
          onClick={handleMicClick}
          title={isMicActive ? "Listening..." : "Search with your voice"}
        >
          <IoMdMic size={20} />
          {isMicActive && <span className="mic-pulse-ring"></span>}
        </button>
      </div>

      {/* Right: Actions, Notifications, & User Authentication */}
      <div className="nav-right">
        {/* Light / Dark Mode Toggle */}
        <button 
          className="icon-btn theme-toggle-btn" 
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <IoSunnyOutline size={20} color="#facc15" /> : <IoMoonOutline size={19} color="#3b82f6" />}
        </button>

        <button 
          className="icon-btn" 
          title="Create / Upload Video"
          onClick={handleUploadClick}
        >
          <RiVideoAddLine size={21} />
        </button>

        <div className="notification-btn-wrapper" ref={notifWrapperRef}>
          <button 
            className="icon-btn" 
            title="Notifications"
            onClick={handleNotificationsClick}
          >
            <IoNotificationsOutline size={22} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>

          {showNotifications && (
            <div className="notifications-dropdown-menu">
              <div className="notif-dropdown-header">
                <strong>Notifications</strong>
                <button 
                  type="button" 
                  className="mark-read-btn" 
                  onClick={markAllNotificationsRead}
                >
                  Mark all read
                </button>
              </div>
              <div className="notif-list">
                {notifications.map((item) => (
                  <div 
                    key={item.id} 
                    className={`notif-item ${item.unread ? 'unread' : ''}`}
                    onClick={() => {
                      setShowNotifications(false);
                      navigate(`/watch/${item.videoId}`);
                    }}
                  >
                    <div className="notif-dot" />
                    <div className="notif-body">
                      <p className="notif-title">{item.title}</p>
                      <span className="notif-time">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Auth / Profile Area with Multiple Users Switcher */}
        {currentUser.isLoggedIn ? (
          <div className="user-profile-wrapper" ref={userMenuRef}>
            <div 
              className="user-profile" 
              title={`Account - ${currentUser.name}`}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <img 
                src={currentUser.avatar || "/images/user_avatar.svg"} 
                alt="User Avatar" 
                className="user-avatar"
                onError={(e) => {
                  e.currentTarget.src = "/images/user_avatar.svg";
                }}
              />
            </div>

            {showUserMenu && (
              <div className="user-dropdown-menu">
                <div className="user-dropdown-header">
                  <div className="user-header-avatar-circle">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="user-header-text">
                    <strong>{currentUser.name}</strong>
                    <span>{currentUser.email}</span>
                  </div>
                </div>

                <hr className="dropdown-divider" />

                <button 
                  className="dropdown-item-btn"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate('/my-uploads');
                  }}
                >
                  <RiVideoAddLine size={16} />
                  <span>Your Videos</span>
                </button>

                <hr className="dropdown-divider" />

                {/* Multiple Users / Switch Account Section (YouTube Authenticity) */}
                <div className="dropdown-section-header">
                  <MdSwitchAccount size={16} />
                  <span>Switch Account</span>
                </div>

                <div className="dropdown-accounts-list">
                  {(registeredUsers || []).map((u) => {
                    const isCurrent = (currentUser.name || '').toLowerCase() === (u.username || '').toLowerCase();
                    return (
                      <button
                        key={u.username}
                        type="button"
                        className={`dropdown-account-item ${isCurrent ? 'active' : ''}`}
                        onClick={() => {
                          if (!isCurrent) {
                            loginUser({
                              name: u.username,
                              email: u.email || `${u.username.toLowerCase()}@phew.tube`
                            });
                            toast.success(`Switched account to ${u.username}! 👤`);
                          }
                          setShowUserMenu(false);
                        }}
                        title={isCurrent ? `Currently active: ${u.username}` : `Switch to ${u.username}`}
                      >
                        <div className="account-initial-circle">
                          {u.username ? u.username.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div className="account-text-info">
                          <span className="account-item-name">{u.username}</span>
                          <span className="account-item-email">{u.email || `${u.username.toLowerCase()}@phew.tube`}</span>
                        </div>
                        {isCurrent && <FaCheckCircle className="account-check-icon" size={13} />}
                      </button>
                    );
                  })}
                </div>

                <button 
                  type="button"
                  className="dropdown-item-btn add-account-btn"
                  onClick={() => {
                    setShowUserMenu(false);
                    setIsAuthModalOpen(true);
                  }}
                  title="Switch to another user or register new profile"
                >
                  <FaUserPlus size={15} />
                  <span>Add / Switch Account...</span>
                </button>

                <hr className="dropdown-divider" />

                <button 
                  className="dropdown-item-btn signout-btn"
                  onClick={() => {
                    logoutUser();
                    setShowUserMenu(false);
                  }}
                >
                  <FaSignOutAlt size={15} />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <button 
            className="navbar-signin-btn"
            onClick={() => setIsAuthModalOpen(true)}
            title="Sign in to your account"
          >
            <FaUserCircle size={18} />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;

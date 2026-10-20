import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  IoMenu, 
  IoSearchOutline, 
  IoClose, 
  IoNotificationsOutline 
} from 'react-icons/io5';
import { IoMdMic } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FaYoutube, FaUserCircle, FaSignOutAlt, FaSearch } from 'react-icons/fa';
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
    logoutUser,
    setSelectedCategory,
    setIsUploadOpen,
    notifications,
    unreadCount,
    markAllNotificationsRead
  } = useApp();

  const [isMicActive, setIsMicActive] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const searchWrapperRef = useRef(null);
  const notifWrapperRef = useRef(null);

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
    navigate(`/watch/${video.id}`);
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

        {/* Auth / Profile Area */}
        {currentUser.isLoggedIn ? (
          <div className="user-profile-wrapper">
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
                  <strong>{currentUser.name}</strong>
                  <span>{currentUser.email}</span>
                </div>
                <hr className="dropdown-divider" />
                <button 
                  className="dropdown-item-btn"
                  onClick={() => {
                    logoutUser();
                    setShowUserMenu(false);
                  }}
                >
                  <FaSignOutAlt />
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

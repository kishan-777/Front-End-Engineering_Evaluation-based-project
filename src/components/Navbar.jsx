import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  IoMenu, 
  IoSearchOutline, 
  IoClose, 
  IoNotificationsOutline 
} from 'react-icons/io5';
import { IoMdMic } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FaYoutube } from 'react-icons/fa';

function Navbar({ 
  onToggleSidebar, 
  searchQuery, 
  setSearchQuery, 
  onSearchSubmit, 
  onResetSearch 
}) {
  const [isMicActive, setIsMicActive] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery);
    }
    // If not on Home, navigate to Home to see results
    navigate('/');
  };

  const handleMicClick = () => {
    setIsMicActive(true);
    setTimeout(() => {
      setIsMicActive(false);
    }, 2500);
  };

  return (
    <header className="navbar">
      {/* Left: Menu & Brand Link */}
      <div className="nav-left">
        <button 
          className="icon-btn menu-btn" 
          onClick={onToggleSidebar} 
          title="Toggle Guide / Sidebar"
          aria-label="Toggle menu"
        >
          <IoMenu size={22} />
        </button>

        <Link to="/" className="logo-container" onClick={onResetSearch} title="PheW TuBe Home">
          <FaYoutube className="yt-logo-icon" size={28} />
          <span className="yt-logo-text">PheW TuBe</span>
          <span className="country-code">IN</span>
        </Link>
      </div>

      {/* Middle: Search bar */}
      <div className="nav-center">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search (e.g. React, JavaScript, Gaming, Music...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        <button 
          className={`icon-btn mic-btn ${isMicActive ? 'mic-active' : ''}`}
          onClick={handleMicClick}
          title={isMicActive ? "Listening..." : "Search with your voice"}
        >
          <IoMdMic size={20} />
          {isMicActive && <span className="mic-pulse-ring"></span>}
        </button>
      </div>

      {/* Right: Actions */}
      <div className="nav-right">
        <button className="icon-btn" title="Create / Upload Video">
          <RiVideoAddLine size={21} />
        </button>

        <div className="notification-btn-wrapper">
          <button className="icon-btn" title="Notifications">
            <IoNotificationsOutline size={22} />
            <span className="notification-badge">9+</span>
          </button>
        </div>

        <div className="user-profile" title="Account - Group G15">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
            alt="User Avatar" 
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
